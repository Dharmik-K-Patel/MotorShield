import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SingleInputForm from '../../Pages/SingleInputForm/SingleInputForm'

const ForgorPassword = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const inputChangeHandler = (event) => setEmail(event.target.value)

  useEffect(() => {
    if (localStorage.getItem("token")){
        navigate('/menu')
      }
  },[])
  
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/send-reset-password-email/', {
            email
        });
        setError('Password Reset link sent to your mail.')
    }
    catch(error) {
        setError('You are not a Registered User')
    }
  }

  return (
    <SingleInputForm
      onFormSubmit={submitHandler}
      heading={"Forgot Password"}
      type={"email"}
      id={"email"}
      name={"email"}
      placeholder={"Enter your Registered Email"}
      value={email}
      handleInputChange={inputChangeHandler}
      messages={error}
      buttonName={"Get Password Reset Link on Mail"} />
  )
}

export default ForgorPassword