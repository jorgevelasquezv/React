import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { googleLogin, emailAndPasswordLogin } from '../actions/authActions';

export const useLoginScreen = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = data;

    const handleChange = (e) => {
        const value = e.target.value;

        setData({ ...data, [e.target.name]: value });
    };

    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(googleLogin());
    };

    const handleEmailLogin = (e) => {
        e.preventDefault();

        if (email.trim() === '' || !email.trim().includes('@')) {
            return;
        }

        if (password.trim().length < 6) {
            return;
        }

        dispatch(emailAndPasswordLogin(email, password));
    };

    return [handleChange, handleLogin, handleEmailLogin, email, password];
};
