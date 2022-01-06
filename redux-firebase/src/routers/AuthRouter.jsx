import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';

const AuthRouter = () => {
    return (
        <Router>
            <Routes>
                <Route end path="/login" element={<LoginScreen />} />
                <Route end path="/register" element={<RegisterScreen />} />
            </Routes>
        </Router>
    );
};

export default AuthRouter;
