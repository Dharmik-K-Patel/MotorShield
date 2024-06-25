import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router';

const SignOut = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    sessionStorage.setItem('showLogoutToast', true);
    navigate('/');
  }, [logout, navigate]);

  return null;
};

export default SignOut;