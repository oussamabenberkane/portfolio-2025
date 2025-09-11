import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
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