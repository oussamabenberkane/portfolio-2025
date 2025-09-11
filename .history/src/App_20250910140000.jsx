import React from 'react'
import Navbar from './sections'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
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