import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <LoadingSpinner/>
    }

    if(user){
        return children
    }

    return <Navigate to=""></Navigate>
};

export default PrivateRoute;