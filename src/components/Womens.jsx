import React, { useRef } from 'react'
import Mens from './Mens'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Womens = ({isVisible1}) => {
const menuRef1 = useRef(null)

  useGSAP(() => {
    if (isVisible1) {
        gsap.fromTo(
            menuRef1.current,
            { opacity: 0, y: -20 }, 
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" } 
        );
    }
}, [isVisible1]);


  return (
    <>
     <div ref={menuRef1} className='  p-10 justify-between flex h-47 w-76 absolute top-24 right-[41.7%] z-70 shadow-lg bg-white'>
        <div>
            <h1 className='mb-6 text-xl' >Shoes</h1>
            <h6 className='cursor-pointer'>All shoes</h6>
            <h6 className='cursor-pointer'>Lifestyle</h6>
        </div>

        <div>
        
            <h1 className='mb-6 text-xl'>Clothing</h1>
          
            <h6 className='cursor-pointer'>All clothing</h6>
            <h6 className='cursor-pointer'>Sarees</h6>
        </div>
    </div>
    </>
  )
}

export default Womens
