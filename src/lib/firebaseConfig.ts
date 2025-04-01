import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  authDomain: "psychologists-services-f5a1c.firebaseapp.com",
  databaseURL: "https://psychologists-services-f5a1c-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "psychologists-services-f5a1c",
  storageBucket: "psychologists-services-f5a1c.appspot.com",
  messagingSenderId: "863349876673",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
