import React from 'react'
import HeroSection from './components/HeroSection'
import MobileAppSection from './components/MobileAppSection'
import PlayFromAnyDevice from './components/PlayFromAnyDevice'
import ProductGrid from './components/ProductGrid'
import VideoSection from "./components/VideoSection"
import Header from './components/Header'
import Footer from './components/Footer'
import FeaturedInSection from './components/FeaturedInSection'
import SubscriptionSection from './components/SubscriptionSection'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProductGrid/>
      
      <MobileAppSection/>
      <PlayFromAnyDevice/>
      <SubscriptionSection/>
      <VideoSection/>
      <FeaturedInSection/>
      <Footer/>
    </div>
  )
}

export default App