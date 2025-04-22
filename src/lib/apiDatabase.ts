import { database } from "./firebaseConfig";
import { ref, get } from "firebase/database";

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