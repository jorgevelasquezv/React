import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { log } = useContext(AuthContext);
    return log.log ? children : <Navigate to="/login" />
};

export default PrivateRouter;
