import React, { useEffect, useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { TiShoppingBag } from "react-icons/ti";
import Mens from './Mens';
import Womens from './Womens';
const Nav2 = () => {
    const [heart, setHeart] = useState(false)
    const [bag, setBag] = useState(false)
    const [mens, setMens] = useState(false)
    const [womens, setWomens] = useState(false)
   const mensRef = useRef(null)
   const womensRef = useRef(null)
    
   useEffect(() => {
    const handleClickOutside1 = (event) => {
        if (womensRef.current && !womensRef.current.contains(event.target)) {
            setWomens(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside1);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside1);
    };
}, []);
   
   useEffect(() => {
    const handleClickOutside = (event) => {
        if (mensRef.current && !mensRef.current.contains(event.target)) {
            setMens(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);
  return (
    <>
    <div className=' w-full flex items-center justify-between p-4 '>
        <h1 className='ml-5 text-3xl'>logo</h1>
        <div className='flex items-center justify-between gap-4 ml-48'>
            <h2 className='text-2xl font-bold'>Sale</h2>
            <div className='relative' ref={mensRef}>
            <h2 onMouseEnter={()=>{
                setMens(true)
                setWomens(false)
            }}
             className='text-2xl font-bold'>Mens</h2>
             {
                mens && (
                    <Mens isVisible={mens} className='relative left-0 top-96 z-50 shadow-lg'/>
                )
             }
            </div>
           <div ref={womensRef}>
           <h2
            onMouseEnter={()=>{
              setWomens(true)
              setMens(false)
            }}
            
            className='text-2xl font-bold'>Womens</h2>
            {
              womens &&(
                <Womens isVisible1={womens} className='absolute  z-50 shadow-lg'/>
              )
            } 
           </div>
           
            <h2 className='text-2xl font-bold'>Kids</h2>
        </div>



     <div className='flex'>
        <div className='w-64 relative'>
        <CiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
   <input className='w-48 text-l bg-gray-50  pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500'  type="text" placeholder= 'Search' />
   </div>


   <div className='relative'>
   <div className='flex gap-2 ml-[-2vw] mr-3'>
   <CiHeart onMouseEnter={()=>{
      setHeart(true)
   }}
   onMouseLeave={()=>{
    setHeart(false)
   }}  className='text-3xl mt-1' />
  {heart &&(<span className='absolute left transform -translate-x-1/2 mt-10  text-sm bg-gray-800 text-white px-2 py-1 rounded-md opacity-90 whitespace-nowrap z-70 shadow-lg'>
    Favorites
  </span>)}

   <TiShoppingBag
   onMouseEnter={()=>{
    setBag(true)
   }}
   onMouseLeave={()=>{
    setBag(false)
   }}
   className='text-3xl mt-1' />
   {bag && (
    <span className='absolute left-1/2 transform -translate-x-1/2 mt-10  text-sm bg-gray-800 text-white px-2 py-1 rounded-md opacity-90 whitespace-nowrap z-70 shadow-lg'>
        Add to bag
    </span>
   )}
   </div>
   </div>
   
   

        </div>
       
       
    </div>
    </>
  )
}

export default Nav2
