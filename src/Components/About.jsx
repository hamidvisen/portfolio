import React from 'react'
import { Styles } from '../utils/style'
import Resume from '../assests/fullstackdeveloperresume.pdf'
import { FiDownload } from "react-icons/fi"
import Profile from '../assests/mypic.png'
import '../App.css'
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";


function About() {
    return (
        <div className='flex flex-wrap justify-center item-center mt-20 p-10 shadow-orange-500' id='Home'>
            <div className='flex-1 py-4'>
                <span className={Styles.heroHeadText}>
                    Hi, I'm <span className='text-orange-600'>
                        Abdul Hamid
                    </span>
                    <br />
                    <span className={Styles.heroSubText}>
                        I am a Full Stack Developer 
                        <div>
                           Hire me   &#128522;
                        </div>
                    </span>
                </span>
                <br />
                <div className='w-[14rem]'>
                    <a
                        href={Resume}
                        download="AbdulHamidResume"
                        target='blank'
                        rel='noreferrer'
                    >
                        <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-orange-500 shadow-lg hover:shadow-orange-500'> <FiDownload className='text-lg mr-3 mt-1' />Resume

                        </div>
                    </a>
                </div>
            </div>
            <div>
                <div className='flex flex-wrap'>
                    <img src={Profile} alt='profile' className='element object-contain p-4 w-[40rem] h-[30rem] rounded-full' />

                </div>
                <div className='flex flex-row justify-center items-center mt-5'>
                    <a href="https://www.linkedin.com/in/abdul-hamid-938951213/" target='_blank' className='bg-orange-500 p-3 rounded-full hover:border-orange-500 shadow-lg hover:shadow-orange-500 mr-5 hover:scale-110'>
                        <FiLinkedin className='text-2xl' />

                    </a>
                    <a href="https://github.com/hamidvisen" target='_blank' className='bg-orange-500 p-3 rounded-full hover:border-orange-500 shadow-lg hover:shadow-orange-500 mr-5 hover:scale-110'>

                        <FiGithub className='text-2xl' />
                    </a>

                    <a href="mailto:abdulhamid.31102@gmail.com" target='_blank' className='bg-orange-500 p-3 rounded-full hover:border-orange-500 shadow-lg hover:shadow-orange-500 hover:scale-110'>
                        <FiMail className='text-2xl' />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default About
