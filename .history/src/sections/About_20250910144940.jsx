import React from 'react'
import Card from '../components/Card'

const About = () => {
    return <section className='c-space section-spacing'>
        <h2 className='text-hissen'>About Me</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
            {/* Grid 1 */}
            <div className='flex items-end grid-default-color grid-1'>
                <img src="assets/coding-pov.png" alt="" className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale[2.5]' />
                <div className='z-10'>
                    <p className='headtext'>Hi, I'm Oussama</p>
                    <p className='subtext'>
                        an <strong>AI graduate</strong> and <strong>Backend Engineer</strong> who loves turning ideas into scalable systems. Over the past few years, I’ve worked on everything from cloud-based architectures to AI-driven applications, using tools like <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>Python</strong>.

                        What excites me most is solving real problems with code, learning new things along the way, and sharing knowledge with others.
                    </p>
                </div>
                <div className='absolute inset-x-0 pointer-events-none -bottom-2 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
            </div>
            {/* Grid 2 */}
            <div className='grid-default-color grid-2'>
                <div className='flex items-center justify-center w-full h-full'>
                    <p className='flex items-enf text-5xl text-gray-500'>
                        CODE IS CRAFT
                    </p>
                    <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="GRASP" />
                    <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="SOLID" />
                    <Card text="Design Patterns" />
                    <Card text="SRP" />
                </div>
            </div>
            {/* Grid 3 */}
            <div className='grid-black-color grid-3'></div>
            {/* Grid 4 */}
            <div className='grid-special-color grid-4'></div>
            {/* Grid 5 */}
            <div className='grid-default-color grid-5'></div>
        </div>
    </section>
}

export default About
