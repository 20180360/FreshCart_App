import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import Style from './ProtectedRoute.module.css'
import { UserContext } from '../../context/UserContext'
import Login from '../Login/Login'
import { Navigate } from 'react-router-dom'
function ProtectedRoute(props) {
    useEffect(() => {}, [])
    const {Token}=useContext(UserContext);
if (Token==null){
  return <Navigate to={''} ></Navigate>
}
else{
  return props.children
}
    
  
}

export default ProtectedRoute