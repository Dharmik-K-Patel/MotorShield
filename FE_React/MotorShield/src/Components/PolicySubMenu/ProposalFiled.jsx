import React from 'react'
import MessagePage from '../../Pages/MessagePage/MessagePage';
import { useLocation } from 'react-router-dom';

const ProposalFiled = () => {

  const location = useLocation()

  const {policy_id} = location.state

  return (
      <MessagePage 
        heading={"Proposal Filed"}
        firstLine={`Your proposal for the Insurance Policy ID : ${policy_id} has been duly submitted.`}
        secondLine={"It is currently undergoing review for approval. Upon completion of background verification, you will be prompted to proceed with payment for the policy."}
        thirdLine={"Click here to track the policy"}
        linkTo={'/track-policy'}
        buttonName={"Track Policy"} />
    );
}

export default ProposalFiled