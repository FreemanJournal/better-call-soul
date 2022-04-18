import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ToastContainer } from 'react-toastify'
import BannerSection from '../components/BannerSection/BannerSection'
import CredentialSection from '../components/CredentialSection/CredentialSection'
import Footer from '../components/Footer/Footer'
import ServiceSection from '../components/ServiceSection/ServiceSection'
import auth from '../utilities/firebase.init'

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  

  return (
    <div className='container mx-auto relative'>
      {!loading && <ToastContainer pauseOnFocusLoss hideProgressBar={false}/>}
      <BannerSection />
      <ServiceSection />
      <CredentialSection />
      <Footer />
    </div>
  )
}
