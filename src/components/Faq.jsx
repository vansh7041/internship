import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import Faq1 from './subcomponents/Faq1';
import { FaMinus } from "react-icons/fa";
import Faq2 from './subcomponents/Faq2';
import Faq3 from './subcomponents/Faq3';
import Faq4 from './subcomponents/Faq4';

const Faq = () => {
const [faq1, setFaq1] = useState(false)
const [faq2, setFaq2] = useState(false)
const [faq3, setFaq3] = useState(false)
const [faq4, setFaq4] = useState(false)


const toggleFaq1 = ()=>{
    setFaq1(!faq1)
}


const toggleFaq2 = ()=>{
    setFaq2(!faq2)
}


const toggleFaq3 = ()=>{
    setFaq3(!faq3)
}


const toggleFaq4 = ()=>{
    setFaq4(!faq4)
}
  return (
    <>
    <h1 className='text-6xl font-bold text-center mt-10'>Frequently Asked Questions</h1>
    <div className='bg-gray-300 cursor-pointer ml-[25%] font-bold flex-wrap rounded-2xl mt-14 px-7 justify-between w-[50%] flex p-2 shadow-lg border-2'>
    <div 
     onClick={()=>{
        setFaq1(true)
        setFaq2(false)
        setFaq3(false)
        setFaq4(false)
        toggleFaq1()
    }}
    className='  flex-wrap rounded-2xl  px-7 justify-between w-full flex p-4  '>


        <h1 className='text-2xl'>
            What is a E-commerce Website ?
        </h1>
       
        {faq1 ? <FaMinus className='text-2xl mr-0 mt-1'/> : <FaPlus className='text-2xl mr-0 mt-1'/>}
        </div>
        

    {
        faq1 && <Faq1/>
    }
    </div>
   
       
    <div className='bg-gray-300 cursor-pointer ml-[25%] font-bold flex-wrap rounded-2xl mt-14 px-7 justify-between w-[50%] flex p-2 shadow-lg border-2'>
    <div 
     onClick={()=>{
        setFaq2(true)
        setFaq1(false)
        setFaq3(false)
        setFaq4(false)
        toggleFaq2()
    }}
    className='  flex-wrap rounded-2xl  px-7 justify-between w-full flex p-4  '>


        <h1 className='text-2xl'>
        How can I contact support ? 
        </h1>
       
        {faq2 ? <FaMinus className='text-2xl mr-0 mt-1'/> : <FaPlus className='text-2xl mr-0 mt-1'/>}
        </div>
        

    {
        faq2 && <Faq2/>
    }
    </div>

    <div className='bg-gray-300 cursor-pointer ml-[25%] font-bold flex-wrap rounded-2xl mt-14 px-7 justify-between w-[50%] flex p-2 shadow-lg border-2'>
    <div 
     onClick={()=>{
        setFaq3(true)
        setFaq1(false)
        setFaq2(false)
        setFaq4(false)
        toggleFaq3()
    }}
    className='  flex-wrap rounded-2xl  px-7 justify-between w-full flex p-4  '>


        <h1 className='text-2xl'>
        What services do you offer ? 
        </h1>
       
        {faq3 ? <FaMinus className='text-2xl mr-0 mt-1'/> : <FaPlus className='text-2xl mr-0 mt-1'/>}
        </div>
        

    {
        faq3 && <Faq3/>
    }
    </div>


    <div className='bg-gray-300 cursor-pointer ml-[25%] font-bold flex-wrap mb-14 rounded-2xl mt-14 px-7 justify-between w-[50%] flex p-2 shadow-lg border-2'>
    <div 
     onClick={()=>{
        setFaq4(true)
        setFaq1(false)
        setFaq2(false)
        setFaq3(false)
        toggleFaq4()
    }}
    className='  flex-wrap rounded-2xl  px-7 justify-between w-full flex p-4  '>


        <h1 className='text-2xl'>
        Where are you located ? 
        </h1>
       
        {faq4 ? <FaMinus className='text-2xl mr-0 mt-1'/> : <FaPlus className='text-2xl mr-0 mt-1'/>}
        </div>
        

    {
        faq4 && <Faq4/>
    }
    </div>
       
  
   

    </>
  )
}

export default Faq
