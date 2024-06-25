import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SignUpForm.css';
import { Link, useNavigate } from 'react-router-dom';
import signup_image from '../../assets/signup_image.jpg'

const SignUpForm = () => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [tc, setTc] = useState(false)
  const [error, setError] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token")){
      navigate('/menu')
    }
  },[navigate])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!tc) {
      setError('Please accept the terms and conditions')
      return
    }
    else if (password !== password2) {
      setError("Passwords do not match, Try again")
      return
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/register/', {
        email,
        name,
        password,
        password2,
        tc
      });
      console.log('User Registered:', response.data);
      navigate('/login')
    }
    catch(error) {
      setError('User with this Email already exists')
    }
  }  
    
  return (
    <div className='cont'>
      <div className="image-container">
        <img src={signup_image} className="signup-image"/>
      </div>
      <div className="form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input type="email" id="email" name="email" placeholder='Enter Your Email' required value={email} onChange={(event) => setEmail(event.target.value)}/>
          <input type="text" id="name" name="name" placeholder='Enter Your Name' required value={name} onChange={(event) => setName(event.target.value)}/>
          <input type="password" id="password" name="password" placeholder='Enter Your Password' required value={password} onChange={(event) => setPassword(event.target.value)}/>
          <input type="password" id="password2" name="password2" placeholder='Confirm Your Password' required value={password2} onChange={(event) => setPassword2(event.target.value)}/>
          {error && <p className="error-message">{error}</p>}
          <div className="tandc-container">
            <label className='tandc'>
            <input type="checkbox" className='tnc' id="tc" name="tc" checked={tc} onChange={(event) => setTc(event.target.checked)}/>I accept the terms and conditions</label>
          </div>
          <button type="submit" className='btn light-btn'>Sign Up</button>
          
        </form>
        <p className="signin-link">
          Already have an account?
          <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpForm