import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const PolicyMenu = () => {
  return (
    <div className="policy-card-menu">
      <Link to='/add-vehicle' className="card">Purchase Policy - Get Quotes</Link>
      <Link to='/renew-policy' className="card">Renew Insurance Policy</Link>
      <Link to='/track-policy' className="card">Track/Pay for Policy</Link>
    </div>
  )
}

export default PolicyMenu