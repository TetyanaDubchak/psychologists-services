import {signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth,sendPasswordResetEmail } from "firebase/auth";
import { auth,db } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useUserStore } from "./store";
import { User } from "./stateTypes";

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
  const userData = userDoc.data() as Omit<User, "uid">;
  
  if (userDoc.exists()) {
    useUserStore.getState().setUser({ uid: user.uid, name: userData.name, email: userData.email, favorites: userData.favorites });
  }
};

const logout = async () => {
  await signOut(auth);
  useUserStore.getState().clearUser();
}

const sendPasswordReset = async (email: string) => {
  const auth = getAuth();
  await sendPasswordResetEmail(auth, email);
};

export { registration, login, logout, sendPasswordReset };