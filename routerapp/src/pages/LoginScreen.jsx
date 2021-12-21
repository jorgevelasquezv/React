import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthTypes } from "../types/authTypes";

const LoginScreen = () => {
    const history = useHistory();

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        dispatch({ type: AuthTypes.login });
        history.push("/");
    };
    return (
        <div className="container mt-5 text-center">
            <img src="/assets/animate.gif" alt="" />
            <h1 className="my-3">Login Screen</h1>
            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default LoginScreen;
