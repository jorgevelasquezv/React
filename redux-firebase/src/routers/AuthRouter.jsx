import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';
import { login } from '../actions/authActions';
import AppRouter from './AppRouter';
import AppScreen from '../pages/AppScreen';

const AuthRouter = () => {

    const dispatch = useDispatch()
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login(user.uid, user.displayName))
            } else {
            }
        });
    }, [dispatch]);
    return (
        <div>
        
        <Router>
            <Routes>
                <Route end path="/login" element={<LoginScreen />} />
                <Route end path="/register" element={<RegisterScreen />} />
                <Route path="/app" element={<AppRouter></AppRouter>} />
                
                </Routes>
        </Router>
        </div>
    );
};

export default AuthRouter;
