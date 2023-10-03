
import { useState, useEffect, useContext, createContext } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth} from "../firebase";
import { doc,setDoc,getFirestore } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

     function signUp(email, password){
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
