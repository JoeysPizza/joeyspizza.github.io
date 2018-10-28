import React from 'react'
import PizzaHeroImage from './pizza-hero-image'
import LargeLogo from './large-logo'

const Hero = () => (
  <div style={{ position: 'relative' }}>
    <div style={{ borderBottom: '3px solid #a60512' }}>
      <PizzaHeroImage />
    </div>
    <LargeLogo />
  </div>
)

export default Hero
