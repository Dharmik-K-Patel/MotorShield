import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import SingleInputForm from '../../Pages/SingleInputForm/SingleInputForm'

const TrackPolicy = () => {

  const [vehicleNumber, setVehicleNumber] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const inputChangeHandler = (event) => setVehicleNumber(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let token = localStorage.getItem("token")
    try {
      const response = await axios.get(`http://127.0.0.1:8000/policies/${vehicleNumber}/`, {
        headers:{
            Authorization: token ? `Bearer ${token}` : null
        }
      });
      navigate('/policy-status', {
        state: {
            policy_id: response.data.id,
            policy_number: response.data.policy_number,
            vehicle_number: vehicleNumber,
            policy_status: response.data.policy_status,
            total_premium: response.data.total_premium
        }
      })
    }
    catch(error) {
        setError(`No Policy found for Vehicle - ${vehicleNumber}`)
    }
  }
  return (
    <SingleInputForm
      onFormSubmit={handleSubmit}
      heading={"Track/Pay for Policy"}
      type={"text"}
      id={"vehicle_number"}
      name={"vehicle_number"}
      placeholder={"Enter the Vehicle Number"}
      value={vehicleNumber}
      handleInputChange={inputChangeHandler}
      messages={error}
      buttonName={"Submit"} />
    )
}

export default TrackPolicy