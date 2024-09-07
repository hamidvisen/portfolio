import React from 'react'
import Tilt from 'react-parallax-tilt'
import { Styles } from '../utils/style'
import Marquee from 'react-fast-marquee'
import { services, technologies } from '../Constants/Index'
// import { motion } from 'framer-motion'
import './style.css'

function Overview() {
    return (
        <div>
            <div className='flex-row items-center pl-5 justify-center pt-3' id='Overview'>
                <span className={Styles.sectionHeadText}>
                    Introduction
                </span>
                <hr className='w-[25%] ml-8'/>
                <div className={Styles.sectionText}>
              
            <div className='flex flex-wrap justify-center items-center'>
            <p className='text-justify'>
                    Aspiring full stack developer with hands-on experience in the MERN stack, Java, and PHP. Eager to leverage my strong technical skills, problem-solving abilities, and passion for developing innovative solutions to contribute to a dynamic development team. Committed to continuous learning and professional growth, I aim to deliver high-quality software solutions that enhance user experiences and drive business success.
                    </p>
            </div>
         
                   
                </div>

            </div>
            <div className='flex flex-wrap justify-center'>
                {
                    services.map( (service) => {
                       return <div>
                            <Tilt
                                key={service.icon}
                                className='parallax-effect-glare-scale'
                                perspective={500}
                                glareColor='fed7aa'
                                glareEnable={true}
                                glareMaxOpacity={0.50}
                                scale={1.02}
                                gyroscope={true}>
                                <div className='p-3 m-3 flex flex-col justify-evenly items-center'>
                                    <img className='h-[150px] w-[150px]' src={service.icon} alt={service.title} />
                                    <div className='m-s text-white'>
                                    {service.title}
                                    </div>
                                    
                                </div>

                            </Tilt>
                        </div>
                    })
                }

            </div>
            <div className='flex justify-center items-center text-4xl text-white font-mediumbold'>
                <span className='border-b-4 border-orange-500'>Skills</span>
                </div>
                <Marquee pauseOnHover speed={100}>
            <div className='flex flex-wrap  justify-center items-center '>
                 {
                    technologies.map((technology) =>{
                        return  <div key={technology.name} className='m-6 mt-[50px] mb-[50px] h-[90px] w-[90px] rounded-3xl shadow-2xl  hover:shadow-orange-500 hover:bg-orange-400 hover:scale-110'>
                            <img className='p-4 h-[90px]  w-[90px]' src={technology.icon} alt={technology.name} />
                            <div className='text-white justify-center flex'>
                               {technology.name}
                            </div>

                        </div>
                    })
                 }
            </div>
            </Marquee>
        </div>
    )
}

export default Overview
