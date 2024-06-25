import React from 'react'
import './ErrorPage.css'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

  const error = useRouteError();

  const errorMessage = error?.message || "Oops! Something went wrong.";
  const errorStatus = error?.status || 400;

  return (
    <div className="error-container">
        <h1 className='error-heading'>{errorMessage}</h1>
        <p className='error-details'>Status : {errorStatus}</p>
        <p>
            Click <Link to={'/'}>here </Link> to go back to the application.
        </p>
    </div>
  )
}

export default ErrorPage