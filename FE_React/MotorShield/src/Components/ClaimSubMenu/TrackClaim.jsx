import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SingleInputForm from '../../Pages/SingleInputForm/SingleInputForm'

const TrackClaim = () => {

  const [vehicleNumber, setVehicleNumber] = useState('')
  const [err, setErr] = useState('')

  const navigate = useNavigate()

  const inputChangeHandler = (event) => setVehicleNumber(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault()
    let token = localStorage.getItem("token")
    try {
      const response = await axios.get(`http://127.0.0.1:8000/claims/${vehicleNumber}/`, {
        headers:{
            Authorization: token ? `Bearer ${token}` : null
        }
      });
      navigate('/claim-status', {
        state: {
            claim_id: response.data.id,
            date_of_claim: response.data.date_of_claim,
            reason_for_claim: response.data.reason_for_claim,
            claim_status: response.data.claim_status,
        }
      })
    }
    catch(error) {
        setErr(`No Claim raised for Vehicle - ${vehicleNumber}`)
        console.log(error)
    }
  }
  return (
    <SingleInputForm
      onFormSubmit={handleSubmit}
      heading={"Track/View Your Claim"}
      type={"text"}
      id={"vehicle_number"}
      name={"vehicle_number"}
      placeholder={"Enter the Vehicle Number"}
      value={vehicleNumber}
      handleInputChange={inputChangeHandler}
      messages={err}
      buttonName={"Next"} />
  )
}

export default TrackClaim