import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      {/* <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer/> */}
    </div>
    
  )
}

export default App