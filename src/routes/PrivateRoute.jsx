import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    console.log(location)
    if(loading){
        return <LoadingSpinner/>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={location} replace></Navigate>
};

export default PrivateRoute;