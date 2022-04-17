import React from 'react'
import BannerSection from '../components/BannerSection/BannerSection'
import CredentialSection from '../components/CredentialSection/CredentialSection'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
import ServiceSection from '../components/ServiceSection/ServiceSection'

export default function Home() {
  return (
    <div className='container mx-auto relative'>
        <BannerSection/>
        <ServiceSection/>
        <CredentialSection/>
        <Footer/>
    </div>
  )
}
