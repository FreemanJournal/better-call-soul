import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authorization from '../components/Authorization/Authorization';
import CheckoutPage from '../pages/CheckoutPage';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';
export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/checkout' element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
      <Route path='/signIn' element={<Authorization signIn />} />
      <Route path='/signUp' element={<Authorization signIn={false} />} />
      <Route path='*' />
    </Routes>
  )
}
