import { useEffect, useRef, useState } from 'react';
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';
import { login } from '../actions/authActions';
import AppRouter from './AppRouter';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import { loadData } from '../helpers/loadData';

const AuthRouter = () => {
    const dispatch = useDispatch();
    const auth = getAuth();

    const [log, setLog] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLog(true)
                dispatch(login(user.uid, user.displayName));
                loadData(user.uid)
            } else {
                setLog(false)
            }
        });
    }, []);
    return (
        <div>
            <Router>
                <Routes>
                    <Route
                        end
                        path="/login"
                        element={
                            <PublicRouter log={log} element={<LoginScreen />} />
                        }
                    />
                    <Route
                        end
                        path="/register"
                        element={
                            <PublicRouter
                                log={log}
                                element={<RegisterScreen />}
                            />
                        }
                    />
                    <Route
                        end
                        path="/app"
                        element={
                            <PrivateRouter log={log} element={<AppRouter />} />
                        }
                    />
                    <Route
                        path="/*"
                        element={<Navigate to="/login" replace />}
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default AuthRouter;
