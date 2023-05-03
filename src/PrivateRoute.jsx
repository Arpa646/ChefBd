import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthMaster } from './componant/Contexapi';


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthMaster)
 const location=useLocation()
 console.log(location)
    if(loading){
        return <h1>LOADING</h1>
    }
    if(user)
    {
        return children;
    }
    return <Navigate to="/logIn" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;