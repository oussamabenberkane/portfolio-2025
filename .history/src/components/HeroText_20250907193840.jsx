import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react';

const HeroText = () => {
  
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div className='z-10 mt-20 tex-center md:mt-40 md:text-left rounded-3xl
    bg-clib-text'>
        {/* Desktop View */}
        <div className='flex-col hidden md:flex c-space'>
            <motion.h1 
            className="text-4xl font-medium"
            variants={variants}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            >
            Hi, I'm Oussama
            </motion.h1>
            <div className='flex flex-col items-start'>
                <motion.p className='text-5xl font-medium text-neutral-300'>I'm a software engineer <br /> Dedicated to crafting</motion.p>
                <motion.div> <FlipWords words={words} 
                className="font-black text-white text-8xl" /> </motion.div>
                <motion.p className='text-4xl font-medium text-neutral-300'>Web Solutions</motion.p>
            </div>
        </div>
        {/* Mobile View */}
        <div className="flex flex-col space-y-6 md:hidden">
            <motion.p className='text-4xl font-medium'>Hi, I'm Oussama</motion.p>
            <div>
                <motion.p className='text-5xl font-black text-neutral-300'>
                    Building
                </motion.p>
                <motion.div>
                    <FlipWords words={words} 
                    className="font-black text-white text-7xl"/>
                </motion.div>
                <motion.p className='text-4xl font-black text-neutral-300'>
                    Web Applications
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default HeroText