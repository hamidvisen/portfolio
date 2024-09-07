import React, { useState } from 'react'
import Logo from '../assests/abdulhamid_logo.png'
import Moon from '../assests/moon.png'
import Sun from '../assests/sun.png'
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from 'react-scroll';



function Navbar() {
    // const[isopen,setIsopen] = useState(false);
    const[imageSrc,setImageSrc] = useState(Moon)
    const setDarkTheme = ()=>{document.querySelector('#toggle').setAttribute("setTheme", "dark")}
    const setLightTheme = ()=>{document.querySelector('#toggle').setAttribute("setTheme", "light")}
    const changeImage = (e) =>{
        setImageSrc((prevImageSrc) =>(
            prevImageSrc === Moon ? Sun : Moon
        ))
        if(imageSrc===Moon){
            setLightTheme();
        }else{
            setDarkTheme();
        }
       
        
    }
    

    // const toggle = ()=>{
    //     setIsopen(!isopen);
    // }
    return (
        <div>
            <nav className='fixed top-0 w-full z-20 bg-orange-500'>
           
                    
                <div className='box-border flex flex-wrap items-center justify-between mx-auto'>
                    <img src={Logo} alt="logo" className='w-[10vw] h-[18vh] ml-5'/>
                    <div className='flex md:order-2'>
                    {/* onClick={toggle} */}                       <button  className='inline-flex item-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:ring-2 focus:ring-gray-200'> 
                            <HiMenuAlt1 className='text-gray-800 text-2xl font-semibold' />
                        </button>
                    </div>
                    
                    
                    {/* <div className={` items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                        isopen?'block': 'hidden'
                    }`}> */}
                    {/* ${
                            isopen?' bg-opacity-70':""
                        } */}
                        <ul className={`flex flex-col p-4 md:p-0 mt-4 text-xl cursor-pointer md:flex-row md:space-x-8 md:mt-0 mt:border-0 `}>
                            <Link spy={true} to='Home' activeClass='activeClass'>
                            <li className='mr-4 ml-4'>
                                <div className='block py-2 pl-3 pr-4 rounded md:p-0  hover:scale-110 text-grey-100 text-[20px] font-medium hover:font-mediumbold hover:text-white'>Home</div>
                            </li>
                            </Link>
                            <Link spy={true} to='Overview'>
                            <li className='mr-4 ml-4'>
                                <div className='block py-2 pl-3 pr-4 rounded md:p-0  hover:scale-110 text-grey-100 text-[20px] font-medium hover:font-mediumbold hover:text-white'>About</div>
                            </li>
                            </Link>
                            <Link spy={true} to='Project'>
                            <li className='mr-4 ml-4'>
                                <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:scale-110 text-grey-100 text-[20px] font-medium hover:font-mediumbold hover:text-white'>Projects</div>
                            </li>
                            </Link>
                            <Link spy={true} to='Contact'>
                            <li className='mr-4 ml-4'>
                                <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:scale-110 text-grey-100 text-[20px] font-medium hover:font-mediumbold hover:text-white'>Contact</div>
                            </li>
                            </Link>
                        </ul>
                       
                    {/* </div> */}


                     <div id="toggle" className='absolute end-0 m-7 cursor-pointer'>
                        <img src={imageSrc} onClick={changeImage} alt='avtar' className='h-8 w-8' />
                            
                    </div>
                    
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar
