import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthTypes } from "../types/authTypes";

const LoginScreen = () => {
    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        dispatch({ type: AuthTypes.login });
        navigate("/");
    };
    return (
        <div className="container mt-5 text-center">
            <img
                src="/assets/db3.gif"
                alt=""
                style={{ width: "35%", height: "400px" }}
            />
            <h1 className="my-3">Login Screen</h1>
            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default LoginScreen;
