import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({ log, element }) => {
    return log ? element : <Navigate to="/login" replace/>
}

export default PrivateRouter
