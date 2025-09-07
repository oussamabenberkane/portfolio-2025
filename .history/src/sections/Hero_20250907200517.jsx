import React from 'react'
import HeroText from '../components/HeroText'
import HeroText from '../components/HeroText'

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start 
    md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText />
        <ParallexBackground />
    </section>
  )
}

export default Hero