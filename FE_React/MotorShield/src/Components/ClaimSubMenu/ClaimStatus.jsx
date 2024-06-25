import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ClaimStatus.css'

const ClaimStatus = () => {

  const location = useLocation()

  const {claim_id, date_of_claim, reason_for_claim, claim_status} = location.state
  
  return (
    <div className='claim-status-page'>
      <h2>Claim Status</h2>
      <p>Below are the details related to the raised claim: </p>
      <br/>
      <div className="claim-details">
        <div className="claim_id">Claim ID : {claim_id}</div>
        <div className="date_of_claim">Date of Claim : {date_of_claim}</div>
        <div className="reason_for_claim">Reason for Claim : {reason_for_claim}</div>
        <div className= 'claim_status'>Claim Status : {claim_status}</div>
      </div>
      <Link to='/' className='btn light-btn'>Return to Home</Link>
  </div>
  )
}

export default ClaimStatus