import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../utilities/firebase.init';

export default function PrivateRoute({ children }) {
  const [user] = useAuthState(auth);
  const location = useLocation();
  if (!user) {
   return <Navigate to='/signIn' state={{ from: location }} replace />
  }
  return children;
}
