import {
    auth,
    signInWithPopup,
    googleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
} from '../firebase/config-firebase';
import { types } from '../types/types';


export const googleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider).then(({ user }) =>
            dispatch(login(user))
        );
    };
};

export const emailAndPasswordLogin = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth, email, password).then(({ user }) =>
            dispatch(login(user.uid, user.displayName))
            
        );
    };
}

export const register = (email, password, username) => {
    return (dispath) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, {
                    displayName: username,
                });
                dispath(login(user.uid, user.displayName));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error, password);

                // ..
            });
    };
};

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
        },
    };
};
