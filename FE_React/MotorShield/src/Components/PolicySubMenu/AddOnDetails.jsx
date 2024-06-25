import React, { useState } from 'react'
import './AddOnDetails.css'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const AddOnDetails = () => {

  const [personalCover, setPersonalCover] = useState(false);
  const [passengerCover, setPassengerCover] = useState(false);
  const [breakdownAssistance, setBreakdownAssistance] = useState(false);
  const [err, setErr] = useState('')

  const location = useLocation()
  const navigate = useNavigate()

  const {vehicle_number} = location.state
  
  const submitHandler = async (event) => {
    event.preventDefault();
    let token = localStorage.getItem("token")
    try {  
        const response = await axios.post('http://127.0.0.1:8000/add-policy/', {
            vehicle_number: vehicle_number,
            personal_accident: personalCover,
            passenger_cover: passengerCover,
            breakdown_assistance: breakdownAssistance},
            {headers:{
                Authorization: token ? `Bearer ${token}` : null
            }
        });
        console.log('Policy Creaated :', response.data.id)
        navigate('/proposal-filed', { state: {policy_id: response.data.id}})
    }
  catch(error) {
    // setErr(error.respons.data.slice[2,-2])
    setErr(error.response.data[0])
  }
}
  return (
    <div className='add-ons-page'>
      <h2 className="add-ons-title">Select the Add-ons</h2>
      <div className="add-card-container">
        <div className="add-card">
          <div className="addon">
            <label htmlFor="personalCover">
              <h3>Personal Cover</h3>
              <hr />
              <p>Provides financial protection in case of accidental injury, offering compensation for medical expenses.</p>
              <br />
              <p> ₹11 per month</p>
            </label>
            <input type="checkbox" id="personalCover" name="personalCover" checked={personalCover} onChange={() => setPersonalCover(!personalCover)} />
          </div>
        </div>
        <div className="add-card">
          <div className="addon">
            <label htmlFor="passengerCover">
              <h3>Passenger Cover</h3>
              <hr/>
              <p>Offers compensation for medical expenses and accidental death or injury sustained during the journey.</p>
              <br />
              <p>₹21 per month</p>
            </label>
            <input type="checkbox" id="passengerCover" name="passengerCover" checked={passengerCover} onChange={() => setPassengerCover(!passengerCover)} />
          </div>
        </div>
        <div className="add-card">
          <div className="addon">
            <label htmlFor="breakdownAssistance">
              <h3>Breakdown Assistance</h3>
              <hr />
              <p>Offers timely support in case of vehicle malfunction such as towing, roadside repairs, and emergency transportation</p>
              <br/>
              <p>₹3 per month</p>
            </label>
            <input type="checkbox" id="breakdownAssistance" name="breakdownAssistance" checked={breakdownAssistance} onChange={() => setBreakdownAssistance(!breakdownAssistance)} />
          </div>
        </div>
      </div>
      {err && <p className="vehicle-error">{err}</p>}
      <div className="add-on-btn-container">
      <button onClick={submitHandler} className='btn light-btn'>Submit</button>
      </div>
    </div>
  )
}

export default AddOnDetails