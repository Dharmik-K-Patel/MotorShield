import React from 'react';
import { useLocation } from 'react-router-dom';
import MessagePage from '../../Pages/MessagePage/MessagePage';

const PaymentCompleted = () => {

    const location = useLocation()

    const { policy_id } = location.state

    return (
        <MessagePage 
          heading={"Payment Completed"}
          firstLine={`Your Payment for the Insurance Policy ID - ${policy_id} has been received`}
          secondLine={"The policy has been activated and the further details related to it have been sent to your registered email."}
          thirdLine={""}
          linkTo={'/'}
          buttonName={"Return to Dashboard"}/>
    );
}
export default PaymentCompleted;