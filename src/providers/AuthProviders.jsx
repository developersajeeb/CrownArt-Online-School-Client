import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [paymentPrice, setPaymentPrice] = useState(0);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);

            if (currentUser && currentUser.email) {
                const loggedUser = {
                    email: currentUser.email
                }
                fetch('https://assigment-12-server-nu.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('access-token', data.token);
                    })
            } else {
                localStorage.removeItem('access-token');
            }

        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        googleSingIn,
        updateUserProfile,
        paymentPrice,
        setPaymentPrice
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;