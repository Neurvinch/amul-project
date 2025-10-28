import React from 'react'
import HeroSection from '../components/HeroSection'
import MobileAppSection from '../components/MobileAppSection'
import PlayFromAnyDevice from '../components/PlayFromAnyDevice'
import ProductGrid from '../components/ProductGrid'
import VideoSection from "../components/VideoSection"
import Header from '../components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <MobileAppSection/>
      <PlayFromAnyDevice/>
      <ProductGrid/>
      <VideoSection/>
      <Footer/>
    </div>
  )
}

export default App