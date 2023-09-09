{/*import { useState, useEffect, useContext, createContext } from 'react';


import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }){
    const [user, SetUser] = useState({});
   
    function signUp(email, password) {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        const auth = getAuth();
        return signOut(auth)
    }

    function logIn(email,password){
        const auth = getAuth(); 
       return signInWithEmailAndPassword(auth, email, password)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            SetUser(currentuser)
        });
        return () => {
            unsubscribe();
        }
    })

    return <AuthContext.Provider value={{ user, logIn, logOut, signUp }}>
        {children}
    </AuthContext.Provider>
   
}

export const UserAuth = () => {
    return useContext(AuthContext)
}

*/}

import { useState, useEffect, useContext, createContext } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";


const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({}); // Initialize user state with null

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []); // Add an empty dependency array to run the effect once

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    return (
        <AuthContext.Provider value={{ user, logIn, logOut, signUp }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
