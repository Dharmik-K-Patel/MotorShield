import React, { useEffect } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import policy_icon from '../../assets/policy_icon.png'
import claim_icon from '../../assets/claim_icon.png'

const Menu = () => {

  useEffect(() => {
    if (sessionStorage.getItem('showLoginToast') && true) {
      toast.success("Logged in successfully", {
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
        sessionStorage.removeItem('showLoginToast');
      }, 500);
    }
  }, []);

  return (
    <div className="card-menu">
      {/* <Link to='/policy-menu' className="card">Insurance Policy</Link>
      <Link to='/claim-menu' className="card">Claim Insurance</Link>
      <ToastContainer /> */}
      <Link to="/policy-menu" className="card">
        <div className="card-content">
          <img src={policy_icon} alt="Policy" className="main-menu-icon" />
          <h3>Insurance Policy</h3>
        </div>
      </Link>
      <Link to="/claim-menu" className="card">
        <div className="card-content">
          <img src={claim_icon} alt="Claim" className="main-menu-icon" />
          <h3>Claim Insurance</h3>
        </div>
      </Link>
      <ToastContainer />
    </div>
  )
}

export default Menu