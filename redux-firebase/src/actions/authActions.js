import {
    auth,
    signInWithPopup,
    googleAuthProvider,
} from '../firebase/config-firebase';
import { types } from '../types/types';

export const googleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>
            dispatch(login(user.uid, user.displayName))
        );
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
