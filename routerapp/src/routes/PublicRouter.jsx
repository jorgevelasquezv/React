import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PublicRouter = ({ children }) => {
    const { log } = useContext(AuthContext);

    return !log.log ? children : <Navigate to="/mens" />;
};

export default PublicRouter;
