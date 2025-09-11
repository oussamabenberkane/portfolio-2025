import React, { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/Globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { Frameworks } from '../components/Frameworks'

const About = () => {
    const grid2Container = useRef()
    return <section className='c-space section-spacing'>
        <h2 className='text-heading'>About Me</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
            {/* Grid 1 */}
            <div className='flex items-end grid-default-color grid-1'>
                <img src="assets/ouss2.jpg" alt="" className='absolute scale-[1.75] ' />
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
                <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
                    <p className='flex items-enf text-5xl text-gray-500'>

                    </p>
                    <Card
                        style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                        text="Dev Ops"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                        text="Automation"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{ rotate: "-10deg", top: "10%", left: "0%" }}
                        text="AI"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{ rotate: "20deg", top: "45%", left: "0%" }}
                        text="Backend"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{ rotate: "20deg", top: "10%", left: "30%" }}
                        text="Data Science"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{ rotate: "0deg", top: "70%", left: "70%" }}
                        image="assets/logos/aws.svg"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{ rotate: "30deg", top: "60%", left: "25%" }}
                        image="assets/logos/java.png"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{ rotate: "-30deg", top: "20%", left: "23%" }}
                        image="assets/logos/python.svg"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{ rotate: "-10deg", top: "15%", left: "70%" }}
                        image="assets/logos/git.svg"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{ rotate: "-20deg", top: "10%", left: "55%" }}
                        image="assets/logos/tensorflow.svg"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{ rotate: "-20deg", top: "35%", left: "60%" }}
                        image="assets/logos/docker.png"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{ rotate: "20deg", top: "40%", left: "35%" }}
                        image="assets/logos/spring.svg"
                        containerRef={grid2Container}
                    />
                    <Card
                        style={{ rotate: "20deg", top: "60%", left: "45%" }}
                        image="assets/logos/linux.svg"
                        containerRef={grid2Container}
                    />
                </div>
            </div>
            {/* Grid 3 */}
            <div className='grid-black-color grid-3'>
                <div className='z-10 w-[50%]'>
                    <p className='headText'>Time Zone</p>
                    <p className='subText'>I'm based in Algeria, open to work remotely worldwide</p>
                </div>
                <figure className='absolute left-[30%] top-[10%]'>
                    <Globe />
                </figure>
            </div>
            {/* Grid 4 */}
            <div className='grid-special-color grid-4'>
                <div className='flex flex-col items-center justify-center gap-4 size-full'>
                    <p className='text-center headText'>
                        Do you want to start a project together?
                    </p>
                    <CopyEmailButton />
                </div>
            </div>
            {/* Grid 5 */}
            <div className='grid-default-color grid-5'>
                <div className='z-10 w-[50%]'>
                    <p className='headText'>Teck Stack</p>
                    <p className='headText'>Over the years, I’ve picked up a stack of languages and frameworks that help me craft clean backends, smart AI solutions, and smooth user experiences</p>
                </div>
                <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] ms:scale-125'>
                    <Frameworks />
                </div>
            </div>
        </div>
    </section>
}

export default About
