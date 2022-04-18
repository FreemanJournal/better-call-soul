import React from 'react'
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'

export default function CheckoutPage() {
  return (
    <div className=''>

      <div className="min-h-screen">
      <ToastContainer />
      <h1 className='text-center mt-10 font-bold text-2xl'>CheckoutPage</h1>
      </div>
      <Footer />
    </div>
  )
}
