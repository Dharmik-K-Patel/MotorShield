import React from 'react'

import './Services.css'
import bike from '../../assets/bike.jpg'
import car from '../../assets/car.jpg'
import truck from '../../assets/truck.jpg'
import bike_icon from "../../assets/bike_icon.png"
import car_icon from "../../assets/car_icon.png"
import truck_icon from "../../assets/truck_icon.png"
import ServiceComponent from './ServiceComponent'

const Services = () => {
  return (
    <div className='services'>
        <ServiceComponent img={bike} icon={bike_icon} vehicle={"Two Wheeler"} />
        <ServiceComponent img={car} icon={car_icon} vehicle={"Four Wheeler"} />
        <ServiceComponent img={truck} icon={truck_icon} vehicle={"Commercial Vehicle"} />
    </div>
  )
}

export default Services