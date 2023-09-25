import { firebaseAuth } from '../../../firebaseConfig' 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const auth = firebaseAuth;

export const userAuthChange = (user) => {
  return onAuthStateChanged(auth, user);
}

export const userSignin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const userRegister = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const userSignout = () => {
  return auth.signOut()
}



