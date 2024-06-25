import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './VehicleDetails.css';
import axios from 'axios';
import {Link} from 'react-scroll';

const VehicleDetails = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [seats, setSeats] = useState(1);
  const [purchasePrice, setPurchasePrice] = useState('');
  const [er, setEr] = useState('')

  const navigate = useNavigate()
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let token = localStorage.getItem("token")
    try {
      const resp = await axios.get(`http://127.0.0.1:8000/vehicles/${vehicleNumber}/`, {
        headers: {
          Authorization: token? `Bearer ${token}` : null
        }
      });
      setEr('This Vehicle Number is already Registered')
      return
    }
    catch(error) {
      console.log(error)
      const response = await axios.post('http://127.0.0.1:8000/add-vehicle/', {
        vehicle_type:vehicleType,
        vehicle_number:vehicleNumber,
        make:make,
        model:model,
        fuel_type:fuelType,
        registration_date:registrationDate,
        seats:seats,
        purchase_price:purchasePrice},
        {headers:{
          Authorization: token ? `Bearer ${token}` : null
      }});
      console.log('Vehicle Added:', response.data);
      navigate('/addOns-details', { state: {vehicle_number: vehicleNumber}})
    }
  }  
  return (
    <div className='new-form'>
      <form className="vehicle-form">
        <h2>Vehicle Details</h2>
        <select id="vehicleType" name="vehicleType" value={vehicleType} onChange={(event) => setVehicleType(event.target.value)} required>
          <option value="">Select the Vehicle Type</option>
          <option value="Two Wheeler">Two Wheeler</option>
          <option value="Four Wheeler">Four Wheeler</option>
          <option value="Commercial Vehicle">Commercial Vehicle</option>
        </select>
        <input type="text" id="vehicleNumber" name="vehicleNumber" placeholder="Enter Vehicle Number" value={vehicleNumber} onChange={(event) => setVehicleNumber(event.target.value)} required />
        <input type="text" id="make" name="make" placeholder="Enter Vehicle's Make" value={make} onChange={(event) => setMake(event.target.value)} required />
        <input type="text" id="model" name="model" placeholder="Enter Vehicle's Model" value={model} onChange={(event) => setModel(event.target.value)} required />
        <select id="fuelType" name="fuelType" value={fuelType} onChange={(event) => setFuelType(event.target.value)} required>
          <option value="">Select the Fuel Type</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
        <input type="date" id="registrationDate" name="registrationDate" placeholder="Enter Vehicle's Registration Date" value={registrationDate} onChange={(event) => setRegistrationDate(event.target.value)} required />
        <input type="number" id="seats" name="seats" min="1" placeholder='Number of Seats' value={seats} onChange={(event) => setSeats(event.target.value)} required />
        <input type="number" id="purchasePrice" name="purchasePrice" placeholder="Enter Vehicle's Purchase Price" value={purchasePrice} onChange={(event) => setPurchasePrice(event.target.value)} required />
        {er && <p className="add-error">{er}</p>}
        <Link to='hero' smooth={true} offset={0} duration={500} onClick={handleSubmit} className='btn light-btn'>Submit</Link>
      </form>
    </div>
  )
}

export default VehicleDetails