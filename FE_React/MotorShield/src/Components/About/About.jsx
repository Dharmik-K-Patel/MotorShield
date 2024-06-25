import React, { useState } from 'react'

import './About.css'
import about_img from '../../assets/about_img.jpg'
import play_icon from '../../assets/play_icon.png'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

const About = () => {

  const [playState, setPlayState] = useState(false)

  const togglePlay = () => {
    setPlayState(true)
  }

  return (
    <div>
      <div className='about'>
          <div className="about-left">
              <img src={about_img} className='about-img' alt="" />
              <img src={play_icon} className='play-icon' alt="" onClick={togglePlay} />
          </div>
          <div className="about-right">
              <h3>ABOUT US</h3>
              <h2>Secure Your Ride Effortlessly</h2>
              <p>At Motor Shield, we prioritize your peace of mind on the road. With our comprehensive vehicle insurance coverage, you can drive confidently knowing that your prized possessions are protected against unforeseen accidents and mishaps.</p>
              <p>Experience seamless claims processing and personalized support from our dedicated team of insurance experts. We're here to provide you with the assistance and guidance you need, every step of the way.</p>
              <p>Join the Motor Shield family today and safeguard your journey with reliability and trust. Your safety is our top priority, and we're committed to delivering the highest standard of service to meet your insurance needs.</p>
          </div>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default About