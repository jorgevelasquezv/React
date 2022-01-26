import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../actions/authActions";

export const useRegisterScreen = () => {
        const dispatch = useDispatch();

        const [data, setData] = useState({
            email: '',
            password: '',
            password2: '',
            username: '',
        });

        const { email, username, password, password2 } = data;
        const handleChange = (e) => {
            const value = e.target.value;

            setData({ ...data, [e.target.name]: value });
        };

        const handleRegister = (e) => {
            e.preventDefault();
            if (
                email.trim() === '' ||
                !email.trim().includes('@', 1 - email.length) ||
                !email.trim().includes('.', email.indexOf('@') + 1) ||
                email.trim().slice(email.trim().indexOf('.')).length < 3
            ) {
                return;
            }

            if (username.trim().length < 2) {
                return;
            }

            if (password.trim().length < 6) {
                return;
            } else {
                if (password.trim() !== password2.trim()) {
                    return;
                }
            }
            dispatch(register(email, password, username));
    };
    
    return [handleChange, handleRegister, email, username, password, password2]
}