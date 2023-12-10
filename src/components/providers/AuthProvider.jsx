import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebaseConfig';


//createContext
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //signInWithGoogle
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }



    //sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                // console.log('Sign out successfully');
            })
            .catch(error => {
                console.error(error);
            })
    }


    //to observe current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            // console.log('Current user: ', currentUser);

            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);




    const authInfo = { user, createUser, loginUser, signInWithGoogle, logOut, loading };

    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

AuthProvider.propTypes = {

    children: PropTypes.node
};

export default AuthProvider;