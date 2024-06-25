import React from 'react'
import MessagePage from '../../Pages/MessagePage/MessagePage'
import { useLocation } from 'react-router-dom'

const ClaimFiled = () => {

  const location = useLocation()

  const { claim_id } = location.state

  return (
    <MessagePage 
      heading={"Claimed Filed"}
      firstLine={"Your submission for the claim against the insurance policy has been received and duly processed."}
      secondLine={"The claim details are presently undergoing thorough review for approval. Upon successful verification, we will process the claim."}
      thirdLine={`Click here to track your Claim ID - ${claim_id} :`}
      linkTo={'/track-claim'}
      buttonName={'Track Claim'}/>
  )
}

export default ClaimFiled