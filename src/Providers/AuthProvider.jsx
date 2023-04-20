import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
  const signIn = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    user,
    setUser,
    signInWithGoogle,
    signIn,
    
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
