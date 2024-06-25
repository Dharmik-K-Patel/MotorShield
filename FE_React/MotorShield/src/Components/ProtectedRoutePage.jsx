import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const ProtectedRoutePage = ({children}) => {
  
  const navigate = useNavigate()
  const { state } = useAuth();
  
  useEffect(() => {
    if (!state.isAuthenticated) {
        navigate("/login")
    }
  }, [state.isAuthenticated, navigate])

  return children
}

export default ProtectedRoutePage