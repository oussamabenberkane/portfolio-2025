import React from 'react'
import { FlipWords } from './FlipWords'

const HeroText = () => {
  return (
    <div className='z-10 mt-20 tex-center md:mt-40 md:text-left rounded-3xl
    bg-clib-text'>
        {/* Desktop View */}
        <div className='flex-col hidden md:flex c-space'>
            <h1 className='text-4xl font-medium'>Hi, I'm 
                Oussama</h1>
            <div className='flex flex-col items-start'>
                <p className='text-5xl font-medium text-neutral-300'>I'm a software engineer <br /> Dedicated to crafting</p>
                <div> <FlipWords words={["Secure", "Modern", "Scalable"]} 
                className="" /> </div>
                <p className='text-4xl font-medium text-neutral-300'>Web Solutions</p>
            </div>
        </div>
        {/* Mobile View */}
    </div>
  )
}

export default HeroText