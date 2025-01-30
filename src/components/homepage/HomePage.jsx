import React from 'react'
import Navbar from '../navbar/Navbar'
import HeroImage from './HeroImage'
import MiddleBanner from './MiddleBanner'
import Events from './Events'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
       <HeroImage />
       <MiddleBanner />
       <Events />
       <Footer />
        </div>
  )
}

export default HomePage