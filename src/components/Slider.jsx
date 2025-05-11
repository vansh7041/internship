import React, { useEffect, useState } from 'react'
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
const Slider = () => {
    const data = [
        "/shirt1.jpg","/shirt2.jpg","/shirt3.jpg","/shirt4.jpg"
    ]
    const prevSlide = ()=>{setIndex((prevIndex)=>(prevIndex-1 + data.length)%data.length)} 
    const nextSlide = ()=>{setIndex((prevIndex)=>(prevIndex+1 + data.length)%data.length)} 

const [index, setIndex] = useState(0)
    useEffect(() => {
      const interval = setInterval(()=>{
        setIndex((prevIndex)=>(prevIndex+1)% data.length)
      },2000)
    
     
      return () => {
        clearInterval(interval)
        
      }
    }, [])
    
  return (
    <>
    <div>
        <div className='relative h-[700px] w-full bg-gray-200 '>
            <h1 className='text-6xl font-[abc2] mt-[12%] font-bold absolute left-[15%]'>Premium</h1>
            <h2 className='text-7xl font-[abc] mt-[19%] absolute font-bold left-[9%]'>Quality Clothes</h2>
            <button className='bg-emerald-500 px-10 py-2 text-2xl text-white rounded-2xl font-[abc] mt-[28%] absolute font-bold left-[17%]'>Explore ⤵ </button>
           
<div className='relative'>
<button className='absolute right-[44%] mt-[20%] z-50 '  onClick={()=>{
                prevSlide()
            }}><FaLessThan className='text-xl' /></button>

            <button className='absolute right-[10.5%] mt-[20%] z-50 text-xl' onClick={()=>{

                
                nextSlide()
            }}><FaGreaterThan /></button>

<img className='w-[600px] z-30 h-[600px] absolute right-[10%] p-8 rounded-2xl shadow-xl mt-10' src={data[index]} alt={`Slide ${setIndex+1}`} />
</div>

           
        </div>
    </div>
    
    </>
  )
}

export default Slider
