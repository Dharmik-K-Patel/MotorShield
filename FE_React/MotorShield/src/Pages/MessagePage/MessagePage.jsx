import React from 'react'
import { Link } from 'react-router-dom';
import './MessagePage.css'

const MessagePage = ({heading, firstLine, secondLine, thirdLine, linkTo, buttonName}) => {
  return (
    <div className='filed-page'>
      <h2>{heading}</h2>
      <br/>
      <p>{firstLine}</p>
      <br/> 
      <p>{secondLine}</p>
      <br/>
      <p>{thirdLine}</p>
      <br/>
      <Link to={linkTo} className='btn light-btn'>{buttonName}</Link>
    </div>
  );
}

export default MessagePage
// Reused in the Following Components:
// ProposalFiled.jsx
// ClaimFiled.jsx
// PaymentCompleted.jsx