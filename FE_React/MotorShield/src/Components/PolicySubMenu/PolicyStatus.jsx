import React from 'react'
import './PolicyStatus.css'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const PolicyStatus = () => {

  const location = useLocation()

  const navigate = useNavigate()

  const {policy_id, policy_number, vehicle_number, policy_status, total_premium} = location.state

  const paymentHandler = async () => {
    let token = localStorage.getItem("token")
    try {
      const respo = await axios.patch(`http://127.0.0.1:8000/policies/${policy_id}/update/`, {
        "payment_status":"True"
      },
      {
        headers:{
          Authorization: token ? `Bearer ${token}` : null
        }
      });

      const response = await axios.post('http://127.0.0.1:8000/send-policy-on-email/',{
        vehicle_number:vehicle_number
      },
      {
        headers:{
          Authorization: token ? `Bearer ${token}` : null
        }
      });
      console.log(respo.data)
      console.log(response.data)
      navigate('/payment-completed', { state: {policy_id: respo.data.id}})
    }
    catch(error) {
      console.log(error)
    }
  }

  return (
    <div className='policy-status-page'>
      <h2>Policy Status</h2>
      <p>Below are the details concerning the policy : </p>
      <br/>
      <div className="policy-details">
        <div className="policy_id">Policy ID : {policy_id}</div>
        {policy_status==='Active' && <div className="policy_number">Policy Number : {policy_number}</div>}
        <div className="vehicle_number">Vehicle Number : {vehicle_number}</div>
        <div className= 'policy_status'>Policy Status : {policy_status}</div>
        {(policy_status==='Pay to Activate Your Policy' || policy_status==='Active') && <div className='total_premium'>Total Premium : {total_premium}</div>}
      </div>
      {policy_status === "Pay to Activate Your Policy" && <button onClick={paymentHandler} className='btn light-btn'>Pay Premium</button>}

  </div>
  )
}

export default PolicyStatus