import React from 'react'

const HeroText = () => {
  return (
    <div className='z-10 mt-20 tex-center md:mt-40 md:text-left rounded-3xl
    bg-clib-text'>
        {/* Desktop View */}
        <div className='flex-col hidden md:flex c-space'>
            <h1 className='text-4xl font-medium'>Hi, I'm 
                Oussama</h1>
            <div className='flex flex-col items-start'>
                <p className='subtext'>I'm a software engineer Dedicated to crafting</p>
            </div>
        </div>
        {/* Mobile View */}
    </div>
  )
}

export default HeroText