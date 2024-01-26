import {  createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Authprovider = ({children}) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState();


    // Create User
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign up with google
    const googleSin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Login
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout
    const logOut = () =>{
        return signOut(auth)
    }


    // user available or not

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("Current User", currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            return unsubscribe();
        }
    }, [])

    const authinfo = {
        user,
        createUser,
        googleSin,
        login,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;