import React from 'react'
import HeroSection from './components/HeroSection'
import CombinedExperienceSection from './components/CombinedExperienceSection'
import ProductGrid from './components/ProductGrid'
import VideoSection from "./components/VideoSection"
import Header from './components/Header'
import Footer from './components/Footer'
import FeaturedInSection from './components/FeaturedInSection'
import SubscriptionSection from './components/SubscriptionSection'

const App = () => {
  // ok all good now let's put all components together
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProductGrid/>
      
      <CombinedExperienceSection/>
      <SubscriptionSection/>
      <VideoSection/>
      <FeaturedInSection/>
      <Footer/>
      
    </div>
  )
}

export default App