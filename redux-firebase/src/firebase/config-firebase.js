import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAvmNoGBbe_-wR0EHAfbd0rU_DN4RUkHLk',
    authDomain: 'crud-react-aa37b.firebaseapp.com',
    projectId: 'crud-react-aa37b',
    storageBucket: 'crud-react-aa37b.appspot.com',
    messagingSenderId: '946223824368',
    appId: '1:946223824368:web:e9c6cc5a7ca2538fd5f135',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

export { app, db, auth, signInWithPopup, googleAuthProvider };
