import React from 'react'
import { FiLinkedin,FiGithub, FiMail, FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <div>
     
      <div className='w-[screen] bg-black'>
     
      <div className='text-white text-center p-5'>
          <p>"Thank you for visiting my portfolio! Let's connect on LinkedIn, GitHub, and Twitter. Crafted with passion and dedication. All rights reserved."</p>
      </div>
      <hr className='mb-3 mr-20 ml-20' />
        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href="https://www.linkedin.com/in/abdul-hamid-938951213/" target='black' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-orange-400'>
                <FiLinkedin className='text-white' />
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>LinkedIn</span>
            </a>

            <a href="https://github.com/hamidvisen" target='black' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-orange-400'>
                <FiGithub className='text-white' />
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>GitHub</span>
            </a>

            <a href="abdulhamid.31102@gmail.com" target='black' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-orange-400'>
                <FiMail className='text-white' />
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>abdulhamid.31102@gmail.com</span>
            </a>

            <a href="" target='black' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-orange-400'>
                <FiPhone className='text-white' />
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>+91 9818735756</span>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
