import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const isLoggedIn = localStorage.getItem('token') ? true : false
  if(isLoggedIn){
    return children
  }
  return <Navigate to="/login"></Navigate>;
}

export default ProtectedRoute