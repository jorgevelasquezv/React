import React from 'react';
import { Navigate} from 'react-router-dom';

const PublicRouter = ({ log, element }) => {
    return log ? <Navigate to="/app" replace /> : element;
};

export default PublicRouter;
