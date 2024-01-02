import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GithubAuthProvider, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) { // Fixed 'childern' to 'children'

    const [user, setUser] = useState("");

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        return signOut(auth);
    }
    function googleSignIn(email, password) {
        const GithubAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GithubAuthProvider);
    }
    function facebookSignIn() {
        const facebookAuthProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookAuthProvider);
    }
    function GithubSignIn() {
        const githubAuthProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubAuthProvider);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    return <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn, facebookSignIn, GithubSignIn }}>{children}</userAuthContext.Provider> // Fixed 'childern' to 'children'

}

export function useUserAuth() {
    return useContext(userAuthContext);
}
