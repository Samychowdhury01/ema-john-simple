import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Sign-in with Google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  // create new user with Email and Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   validate user with email verification link
  const validateUser = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // sign-in existing user with email and password
  const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    user,
    setUser,
    signInWithGoogle,
    createUser,
    validateUser,
    signIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
