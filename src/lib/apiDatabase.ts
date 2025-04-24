import { database,db } from "./firebaseConfig";
import { ref, get } from "firebase/database";
import { doc, updateDoc, deleteField, getDoc } from "firebase/firestore";
import { useUserStore, User } from "./store";

export const getPsychologistsList = async() => {
  const userRef = ref(database, 'psychologists');
  try {
      const snapshot = await get(userRef);
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.error("Error fetching psychologists:", error);
    return null;
  }
};

export const addFavoritePsychologist = async (userId:string, psychologistId:string)=>{
 
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    [`favorites.${psychologistId}`]:true,
  })
}

export const removeFavoritePsychologist = async (userId:string, psychologistId:string)=>{
  const userRef = doc(db, "users", userId);

  await updateDoc(userRef, {
    [`favorites.${psychologistId}`]: deleteField(),
  })
}

export const updateFavoriteList =async (userId:string) => {
  const userDoc = await getDoc(doc(db, "users", userId));
  if (!userDoc.exists()) return;
  const userData = userDoc.data() as Pick<User, "favorites">;
  useUserStore.getState().updateFavorites(userData.favorites)
}