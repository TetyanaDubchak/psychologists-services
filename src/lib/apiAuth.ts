import {signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useUserStore } from "./store";

const registration = async (email: string, password: string, name:string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    name,
    email,
    favorites: {}
  });
};



const login = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  const userDoc = await getDoc(doc(db, "users", user.uid));
  const userData = userDoc.data() as { name: string; email: string };
  
  if (userDoc.exists()) {
    useUserStore.getState().setUser({ uid: user.uid, name: userData.name, email: userData.email });
  }
};

const logout = async () => {
  await signOut(auth);
  useUserStore.getState().clearUser();
}

export { registration, login, logout };