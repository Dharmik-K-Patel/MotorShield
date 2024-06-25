import React, { useEffect } from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const HeroHome = () => {

  const { state } = useAuth();

  useEffect(() => {
    if (sessionStorage.getItem('showLogoutToast') && true) {
      toast.dark("Logged Out successfully", {
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
        sessionStorage.removeItem('showLogoutToast');
      }, 500);
    }
  }, []);

  return (
      <div className="hero-text">
        <h1>Driving Confidence, Securing Your Every Mile.</h1>
        <p>Our commitment to excellence drives every aspect of our service, ensuring your satisfaction and peace of mind at Motor Shield.</p>
        {!state.isAuthenticated && <Link className='btn' to="/login">SignIn to Get Quotes<img src={dark_arrow} alt="" /></Link>}
        <ToastContainer />
      </div>
  )
}

export default HeroHome