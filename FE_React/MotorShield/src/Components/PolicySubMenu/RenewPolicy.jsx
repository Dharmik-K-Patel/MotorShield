import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SingleInputForm from '../../Pages/SingleInputForm/SingleInputForm'

const RenewPolicy = () => {
  
  const [vehicleNumber, setVehicleNumber] = useState('')

  const navigate = useNavigate()

  const inputChangeHandler = (event) => setVehicleNumber(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/addOns-details', { state: {vehicle_number: vehicleNumber}})
  } 
  return (
    <SingleInputForm
      onFormSubmit={handleSubmit}
      heading={"Renew Insurance Policy"}
      type={"text"}
      id={"vehicle_number"}
      name={"vehicle_number"}
      placeholder={"Enter the Vehicle Number"}
      value={vehicleNumber}
      handleInputChange={inputChangeHandler}
      messages={''}
      buttonName={"Next"} />
  )
}

export default RenewPolicy