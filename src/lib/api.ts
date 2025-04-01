import { database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";

export const getPsychologistsList = () => {
  const userRef = ref(database);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
      console.log("User data:", data);
      return data;
  });
};