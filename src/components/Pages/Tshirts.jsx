import React, { useState } from 'react'
import Tshirt1 from '../Tshirt1'
import Tshirt2 from '../Tshirt2'

const Tshirts = () => {
 const toggleContent = ()=>{
  setNum1(!num1)
 }

 const toggleContent1 = ()=>{
  setNum3(!num3)
 }
  const [num1, setNum1] = useState(false)
  const [num3, setNum3] = useState(false)
  return (
    <>
    <h1 className='font-bold text-5xl mt-10 text-center'>T-SHIRTS</h1>
    <div className='mt-20  w-[100%]  p-10 bg-gray-200'>
      <div>
      <div className='h-[30%] w-80 px-5 py-7 bg-gray-200 ml-[10%] shadow-2xl'>
      <img className='rounded-2xl border-2' src="shirt1.jpg" alt="" />
      <button
      onClick={()=>{
        setNum1(true)
        toggleContent()
      }}
      className='text-xxl text-white font-bold bg-emerald-300 p-2 px-3 rounded-2xl ml-21 mt-4'>
        {num1 ? "show less" : "show more"}
      </button>
      <br /><br />
{
  num1 && <Tshirt1/>
}
      
    </div>
    <br />
    <div className='h-[30%] w-80 px-5 py-7 bg-gray-200 ml-[10%] shadow-2xl'>
    <img className='rounded-2xl border-2' src="shirt2.jpg" alt="" />
    <button
    onClick={()=>{
      setNum3(true)
      toggleContent1()
    }}
    className='text-xxl text-white font-bold bg-emerald-300 p-2 px-3 rounded-2xl ml-21 mt-4'>
    {num3 ? "show less" : "show more"}
    </button>
    <br /><br />
    {
      num3 && <Tshirt2/>
    }
    </div>
    <br />
    

    <div className='w-[30%] mr-12'>
      <h1 className='text-black absolute top-[30%] ml-[40%] font-bold text-9xl mt-4 '>WE PROVIDE PREMIUM QUALITY COTHING</h1>
      
    </div>
      </div>
   

    </div>
   
    </>
  )
}

export default Tshirts
