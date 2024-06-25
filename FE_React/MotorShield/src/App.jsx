import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { AuthProvider } from './context/AuthContext';
import HeroHome from './Components/Hero/HeroHome';
import MainPage from './Components/MainPage/MainPage';
import SignInForm from './Components/SignInForm/SignInForm';
import Menu from './Components/Menu/Menu';
import PolicyMenu from './Components/Menu/PolicyMenu';
import ClaimMenu from './Components/Menu/ClaimMenu';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import ProtectedRoutePage from './Components/ProtectedRoutePage';
import SignOut from './Components/SignOut/SignOut';
import VehicleDetails from './Components/PolicySubMenu/VehicleDetails';
import ForgorPassword from './Components/ForgotPassoword/ForgorPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import AddOnDetails from './Components/PolicySubMenu/AddOnDetails';
import ProposalFiled from './Components/PolicySubMenu/ProposalFiled';
import RenewPolicy from './Components/PolicySubMenu/RenewPolicy';
import TrackPolicy from './Components/PolicySubMenu/TrackPolicy';
import PolicyStatus from './Components/PolicySubMenu/PolicyStatus';
import PaymentCompleted from './Components/PolicySubMenu/PaymentCompleted';
import AddClaim from './Components/ClaimSubMenu/AddClaim';
import ClaimFiled from './Components/ClaimSubMenu/ClaimFiled';
import TrackClaim from './Components/ClaimSubMenu/TrackClaim';
import ClaimStatus from './Components/ClaimSubMenu/ClaimStatus';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <HeroHome />
      },
      {
        path: '/signup',
        element: <SignUpForm />
      },
      {
        path:'/login',
        element: <SignInForm />
      },
      {
        path: '/signout',
        element: <SignOut />
      },
      {
        path: '/send-reset-password-email',
        element: <ForgorPassword />
      },
      {
        path: '/reset-password/:uid/:token',
        element: <ResetPassword />

      },
      {
        path: '/menu',
        element: (
          <ProtectedRoutePage>
            <Menu />
          </ProtectedRoutePage>
        ),
      },
      {
        path: '/policy-menu',
        element: (
          <ProtectedRoutePage>
            <PolicyMenu />
          </ProtectedRoutePage>
        ),
      },
      {
        path: '/claim-menu',
        element: (
          <ProtectedRoutePage>
            <ClaimMenu />
          </ProtectedRoutePage>
        ),
      },
      {
        path: '/add-vehicle',
        element: (
          <ProtectedRoutePage>
            <VehicleDetails />
          </ProtectedRoutePage>
        )
      },
      {
        path: '/addOns-details',
        element : (
          <ProtectedRoutePage>
            <AddOnDetails />
          </ProtectedRoutePage>
        )
      },
      {
        path: '/proposal-filed',
        element: (
          <ProtectedRoutePage>
            <ProposalFiled />
          </ProtectedRoutePage>
        )
      },
      {
        path: '/renew-policy',
        element: (
          <ProtectedRoutePage>
            <RenewPolicy />
          </ProtectedRoutePage>
        )
      },
      {
        path: '/track-policy',
        element: (
          <ProtectedRoutePage>
            <TrackPolicy />
          </ProtectedRoutePage>
        )
      },
      {
        path: '/policy-status',
        element: (
          <ProtectedRoutePage>
            <PolicyStatus />
          </ProtectedRoutePage>
        )
      },
      {
        path: '/payment-completed',
        element: (
          <ProtectedRoutePage>
            <PaymentCompleted />
          </ProtectedRoutePage>
        )
      },
      {
        path: '/add-claim',
        element: (
          <ProtectedRoutePage>
            <AddClaim />
          </ProtectedRoutePage>
        )
      },
      {
        path: '/claim-filed',
        element: (
          <ProtectedRoutePage>
            <ClaimFiled />
          </ProtectedRoutePage>
        )
      },
      {
        path: '/track-claim',
        element: (
          <ProtectedRoutePage>
            <TrackClaim />
          </ProtectedRoutePage>
        )
      },
      {
        path: '/claim-status',
        element: (
          <ProtectedRoutePage>
            <ClaimStatus />
          </ProtectedRoutePage>
        )
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App