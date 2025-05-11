import React, { useState } from 'react'
import NavHelp from './NavHelp'
import { Link } from 'react-router-dom'
import Nav2 from './Nav2'
import Video from './Video'
import Slider from './Slider'
import Slider2 from './Slider2'
import Section from './Section'

const Nav1 = () => {
  const [showHelp, setShowHelp] = useState(false)
  return (
    <>
    <div className='bg-gray-200 w-full h-12 flex items-center justify-between px-4 py-3'>
    <h1 className='ml-6 font-bold text-2xl'>Logo</h1>
    <div className='flex items-center justify-evenly gap-8 mr-10 '>
        <div className='flex gap-2 '>
             <Link to={"/faq"} className='font-bold relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>FAQ </Link>
             <span className='mt-[-0.1vw]'>&#124;</span>
             
        </div>
        <div className='flex gap-2 justify-between items-center ml-[-1vw] '>
        <h3 onMouseEnter={()=>{
          setShowHelp(true)
        }} 
        onMouseLeave={()=>{
          setShowHelp(false)
        }}
        className=' font-bold relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Help </h3>
        <span className='mt-[-0.1vw]'>&#124;</span>
        </div>
        {
          showHelp &&(
            <div 
          
             className='absolute top-12 bg-white shadow-lg'>
                <NavHelp/>
            </div>
          
          )
        }
        
        <div className=' flex gap-2 justify-items-start ml-[-1vw] '>
        <Link to='/contactus' className='font-bold relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Contact Us </Link>
        <span className='mt-[-0.1vw]'>&#124;</span>
        </div>
        
    </div>
    </div>
    
    </>
  )
}

export default Nav1
