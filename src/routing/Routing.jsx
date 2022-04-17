import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authorization from '../components/Authorization/Authorization';
import ResetPassword from '../components/Authorization/ResetPassword';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import CheckoutPage from '../pages/CheckoutPage';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/checkout' element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
      <Route path='/signIn' element={<Authorization signIn />} />
      <Route path='/signUp' element={<Authorization signIn={false} />} />
      <Route path='/reset' element={<ResetPassword />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
