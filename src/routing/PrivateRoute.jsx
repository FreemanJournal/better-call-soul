import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../utilities/firebase.init';

export default function PrivateRoute({ children }) {
  const [user,loading] = useAuthState(auth);
  const location = useLocation();
  const customId = "custom-id-yes";
  if(loading){
    toast.info('Loading...', {
      toastId: customId
    })
    return <ToastContainer position="top-center"/>
  }

  if (!user) {
   return <Navigate to='/signIn' state={{ from: location }} replace />
  }
  return children;
}
