import React, { useState } from 'react'
import './AddClaim.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddClaim = () => {
  
  const [vehicleNumber, setVehicleNumber] = useState('')
  const [reasonForClaim, setReasonForClaim] = useState('')
  const [description, setDescription] = useState('')
  const [bankName, setBankName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [err, setErr] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    let token = localStorage.getItem("token")
    try {
        const response = await axios.post('http://127.0.0.1:8000/add-claim/', {
            description_of_incident: description,
            reason_for_claim: reasonForClaim,
            claimant_bank_name: bankName,
            claimant_account_number: accountNumber,
            vehicle_number: vehicleNumber
        },
        {
            headers:{
            Authorization: token ? `Bearer ${token}` : null
            }
        });
        navigate('/claim-filed', { state: {claim_id: response.data.id}})
    }
    catch(error) {
        setErr(error.response.data[0])
        console.log(error)
    }    
  }


  return (
    <div className='new-form'>
      <form className="claim-form" onSubmit={handleSubmit}>
        <h2>File for Claim</h2>
        <input type="text" placeholder="Vehicle Number" value={vehicleNumber} onChange={(event) => setVehicleNumber(event.target.value)} required />
        <select value={reasonForClaim} onChange={(event) => setReasonForClaim(event.target.value)} required>
          <option value="">Reason for Claim...</option>
          <option value="Accident">Accident</option>
          <option value="Theft">Theft</option>
          <option value="Natural Disaster">Natural Disaster</option>
          <option value="Fire Damage">Fire Damage</option>
        </select>
        <textarea placeholder="Description of incident" value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
        <input type="text" placeholder="Claimant's Bank Name" value={bankName} onChange={(event) => setBankName(event.target.value)} required />
        <input type="text" placeholder="Claimant's Account Number" value={accountNumber} onChange={(event) => setAccountNumber(event.target.value)} required />
        {err && <p className="claim-error">{err}</p>}
        <div className="btn-container">
            <button type="submit" className='btn light-btn'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddClaim