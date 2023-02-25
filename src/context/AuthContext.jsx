import React, { createContext } from "react";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from "../firebase";

export const AuthContext = createContext();
const loginWithGoogle = async () => {
const googleProvider = new GoogleAuthProvider()
await signInWithPopup(auth, googleProvider)
}
export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{loginWithGoogle}}>{children}</AuthContext.Provider>;
};
