import React, { useState } from 'react'
import axios from 'axios'
import './ResetPassword.css'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {

  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const {uid, token} = useParams()
  
  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== password2) {
        setError("Passwords do not match, Try again")
        return
    }
    try {
        const response = await axios.post(`http://127.0.0.1:8000/reset-password/${uid}/${token}/`, {
            password,
            password2
        });
        console.log(response.data)
        sessionStorage.setItem('showPasswordResetToast', true)
        navigate('/login')
    }
    catch(error) {
        setError('Try Setting a different Password')
    }
  }

  return (
    <div className="rp-cont">
        <div className="rp-container">
            <form className='rp-form' onSubmit={submitHandler}>
                <h2>Forgot Password</h2>
                <input type="password" id="password" name="password" placeholder='Enter New Password' required value={password} onChange={(event) => setPassword(event.target.value)}/>
                <input type="password" id="password2" name="password2" placeholder='Confirm Your Password' required value={password2} onChange={(event) => setPassword2(event.target.value)}/>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className='btn light-btn'>Reset Password</button>
            </form>
        </div>
    </div>
  )
}

export default ResetPassword