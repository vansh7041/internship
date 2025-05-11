import React, { useEffect, useRef } from 'react'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
const Mens = ({isVisible}) => {
  const menuRef = useRef(null)
  useGSAP(() => {
    if (isVisible) {
        gsap.fromTo(
            menuRef.current,
            { opacity: 0, y: -20 }, 
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" } 
        );
    }
}, [isVisible]);


  return (
    <>
    <div id='box' ref={menuRef}  className='  p-10 justify-between flex h-46 w-76 absolute left-[-100%]  z-70 shadow-lg bg-white'>
        <div>
            <h1 className='mb-6 text-xl' >Shoes</h1>
            <h6 className='cursor-pointer'>All shoes</h6>
            <h6 className='cursor-pointer'>Lifestyle</h6>
        </div>

        <div>
        
            <h1 className='mb-6 text-xl'>Clothing</h1>
          
            <h6 className='cursor-pointer'>All clothing</h6>
            <Link to='/tshirts' className='cursor-pointer'>T-Shirts</Link>
        </div>
    </div>
    </>
  )
}

export default Mens
