import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const ClaimMenu = () => {
  return (
    <div className="card-menu">
      <Link to='/add-claim' className="card">File for a Claim</Link>
      <Link to='/track-claim' className="card">Track Your Claim</Link>
    </div>
  )
}

export default ClaimMenu