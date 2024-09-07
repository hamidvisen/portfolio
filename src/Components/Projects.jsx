import React from 'react'
import Tilt from 'react-parallax-tilt'
import { Styles } from '../utils/style'
import { projects } from '../Constants/Index'
import { BiLogoNetlify,BiLogoGithub } from "react-icons/bi";

function Projects() {
  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3' id='Project'>
                <span className={Styles.sectionHeadText}>
                    Projects
                </span>
                <hr className='w-[25%] ml-8' />
                <div className={Styles.sectionText}>
                    <p className='text-justify pr-10'>
                    I'm a skilled Full stack developer with experience in Javascript, Java & PHP and expertise in frameworks like React, NodeJs I'm a quick learner and collaborate, scalable and user friendly solutions that solve real-world problems, Let's work together to bring your ideas to Life!
                    </p>
                </div>
            </div>
            <div className='flex flex-wrap justify-center '>
                {
                    projects.map( (project) => {
                       return <div>
                            <Tilt
                                key={project.name}
                                className='w-[300px] h-[500px] flex flex-wrap justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-grey-400 shadow-pink-300 p-3 rounded-xl border-2  bg-slate-100'
                                >
                                    <div className='text-center justify-center'>
                                <img src={project.image} alt={project.name} className='h-[200px] w-[250px] self-center border-2  rounded-2xl text-center'/>
                                </div>
                                    <div >
                                    <div className='text-center'>
                                    <div className='text-2xl text-grey-600 font-extrabold'>
                                        {project.name}
                                    </div>
                                    </div>
                                    <div className='text-justify ml-2 mr-2 mt-2'>
                                        <span className='text-orange-600 font-normal'>
                                            {project.description}
                                        </span>
                                    </div>
                                <div className='flex justify-evenly items-center mb-3'>
                                    

                                    <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-orange-500 flex justify-center items-center'>
                                        <a href={project.source_deploy_link} target='grey'>
                                        <BiLogoNetlify className='text-3xl font-bold' />
                                        </a>

                                    </div>
                                    <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-orange-500 flex justify-center items-center'>
                                        <a href={project.source_code_link} target='grey'>
                                       <BiLogoGithub className='text-3xl font-bold' />
                                        </a>

                                    </div>
                                </div>
                                
                                </div>
                            </Tilt>
                        </div>
                    })
                }
            </div>
    </div>
  )
}

export default Projects
