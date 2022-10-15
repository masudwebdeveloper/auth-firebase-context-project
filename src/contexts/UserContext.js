import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const UserContext = ({children}) => {
   const [user, setUser] = useState({})
   // preLoader
   const [loader, setLoader] = useState(true);
   

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   }

   const googleSignIn = () => {
      return signInWithPopup(auth, googleProvider);
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         setLoader(false)
         console.log('auth state change', currentUser);
      })
      return () => {
         unsubscribe();
      }
   }, [])
   
   const logOut = () => {
      return signOut(auth);
   }
   const authInfo = { user,loader,  createUser, signIn, logOut, googleSignIn};

   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            1{children}
         </AuthContext.Provider>
         
      </div>
   );
};

export default UserContext;