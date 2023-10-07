import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';

const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
 
    //Create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login User
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google ligin

    const googleLogin = () => {
        return signInWithPopup(auth, provider)  
    }

    // logOut user
    const logOut = () => {
        return signOut(auth)
    }

    // update Profile 

    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo, 
        })
    }   

    // osjerving user 
    useEffect (()=> {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])



    const authInfo = {
        createUser, 
        loginUser,
        user,
        logOut,  
        googleLogin,
        handleUpdateProfile 
    }

    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;