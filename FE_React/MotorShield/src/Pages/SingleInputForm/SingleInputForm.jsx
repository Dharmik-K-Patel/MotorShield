import React from 'react'
import './SingleInputForm.css'

const SingleInputForm = ({onFormSubmit, heading, type, id, name, placeholder, value, handleInputChange, messages, buttonName}) => {
  return (
    <div className='input-page'>
      <form className="input-form" onSubmit={onFormSubmit}>
        <h2>{heading}</h2>
        <input 
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required
        />
        {messages && <p className="disp-error">{messages}</p>}
        <button type="submit" className='btn light-btn'>{buttonName}</button>
      </form>
    </div>
  )
}

export default SingleInputForm
// Reused in the Following Components:
// TrackClaim.jsx
// TrackPolicy.jsx
// RenewPolicy.jsx
// ForgotPassword.jsx