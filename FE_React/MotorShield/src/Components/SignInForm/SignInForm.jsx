import React, { useEffect, useState } from 'react';
import './SignInForm.css';
import axios from "axios";
import signin_image from '../../assets/signin_image.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

const SignInForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("token")){
        navigate('/menu');
    }
    if (sessionStorage.getItem('showPasswordResetToast') && true) {
      toast.info("Password Reset, Please Login", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        sessionStorage.removeItem('showPasswordResetToast');
      }, 500);
    }
  },[]);

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
        email,
        password
      });
      console.log('Login Successful:', response.data);
      login(response.data.token.access);
      sessionStorage.setItem('showLoginToast', true);
      navigate('/menu');
    }
    catch (error) {
      setError('Invalid Email or Password')
      toast.error('Login Failed', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log('Login Error:',error)
    }
  }

  return (
    <div className='conta'>
      <div className="img-container">
        <img src={signin_image} className="signin-image"/>
      </div>
      <div className="form-container">
        <form className="signin-form" onSubmit={handleSignIn}>
          <h2>Welcome back</h2>
          <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter Your Email'required/>
          <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter Your Password' required/>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className='btn light-btn'>Sign In</button>
        </form>
        <p className="forgot-password-link"><Link to='/send-reset-password-email'>Forgot Password?</Link></p>
        <p className="signup-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignInForm