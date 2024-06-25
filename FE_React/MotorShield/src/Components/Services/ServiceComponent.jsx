import React from 'react'
import './Services.css'

const ServiceComponent = ({img, icon, vehicle}) => {
  return (
    <div className="service">
        <img src={img} alt="" />
        <div className="caption">
            <img src={icon} alt="" />
            <p>{vehicle}</p>
            <p>Insurance</p>
        </div>
    </div>
  )
}

export default ServiceComponent