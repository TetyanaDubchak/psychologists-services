import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBfuZtez_b9bkmWsBT80wavhcRc_LmedCI",
  authDomain: "psychologists-services-f5a1c.firebaseapp.com",
  databaseURL: "https://psychologists-services-f5a1c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-services-f5a1c",
  storageBucket: "psychologists-services-f5a1c.firebasestorage.app",
  messagingSenderId: "863349876673",
  appId: "1:863349876673:web:07c87aac7f258f8fd2f140",
  measurementId: "G-VGMGED84RN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
