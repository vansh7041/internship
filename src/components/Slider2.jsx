import React, { useState } from 'react'

const Slider2 = () => {
const [img1, setImg1] = useState(false)
const [img2, setImg2] = useState(false)
const [img3, setImg3] = useState(false)
const [img4, setImg4] = useState(false)
const [img5, setImg5] = useState(false)
  return (
   <>
   <div className='h-[900px] w-full overflow-x-scroll bg-gray-200 '>
    <div className=' flex flex-nowrap gap-10  whitespace-nowrap h-full p-20 '>
        <div
        onMouseEnter={()=>{
            setImg1(true)
        }}
        onMouseLeave={()=>{
            setImg1(false)
        }}
        className=' w-[600px] h-[700px] min-w-[600px] relative cursor-pointer'>
        <img 
        className='w-full h-full relative rounded-3xl shadow-lg z-30  cursor-grab' src="/jacket1.jpg" alt="" style={{pointerEvents : "auto"}} />
        
        {
            img1 &&(
                <>
                <div className='h-full w-full absolute inset-0 top-0 rounded-2xl bg-black z-50 opacity-50 cursor-pointer'>  </div>
                <span className='absolute text-white font-extrabold text-2xl flex items-center inset-0 ml-[42%] font-[abc] z-50'>Explore</span>
              
                
                </>
                
            )
        }
        <h1 className=' relative mt-5 ml-3 text-xl font-[abc] font-bold' style={{pointerEvents : "none"}}>Ferrari Team Jacket</h1>
        </div>
   
        <div
         onMouseEnter={()=>{
            setImg2(true)
        }}
        onMouseLeave={()=>{
            setImg2(false)
        }}
        className='w-[600px] h-[700px]  min-w-[600px] relative cursor-pointer'>
        <img className='w-full h-full rounded-3xl shadow-lg' src="/jacket2.jpg" alt="" style={{pointerEvents : "auto"}}/>
        {
            img2 &&(
                <>
                <div className='h-full w-full absolute inset-0 top-0 rounded-2xl bg-black z-50 opacity-50 cursor-pointer'>  </div>
                <span className='absolute text-white font-extrabold text-2xl flex items-center inset-0 ml-[42%] font-[abc] z-50'>Explore</span>
              
                
                </>
                
            )
        }
        <h1 className=' relative mt-5 ml-3 text-xl font-[abc] font-bold'style={{pointerEvents : "none"}}>Lambo Team Jacket</h1>
        </div>

        <div
         onMouseEnter={()=>{
            setImg3(true)
        }}
        onMouseLeave={()=>{
            setImg3(false)
        }}
        className='w-[600px] h-[700px]  min-w-[600px] relative cursor-pointer'>
        <img className='w-full h-full rounded-3xl shadow-lg' src="/jacket3.jpg" alt="" style={{pointerEvents : "auto"}} />
        {
            img3 &&(
                <>
                <div className='h-full w-full absolute inset-0 top-0 rounded-2xl bg-black z-50 opacity-50 cursor-pointer'>  </div>
                <span className='absolute text-white font-extrabold text-2xl flex items-center inset-0 ml-[42%] font-[abc] z-50'>Explore</span>
              
                
                </>
                
            )
        }
        <h1 className=' relative mt-5 ml-3 text-xl font-[abc] font-bold' style={{pointerEvents : "none"}}>Air Windbreaker Jacket</h1>
        </div>

        <div
         onMouseEnter={()=>{
            setImg4(true)
        }}
        onMouseLeave={()=>{
            setImg4(false)
        }}
        className='w-[600px] h-[700px]  min-w-[600px] relative cursor-pointer'>
        <img className='w-full h-full rounded-3xl shadow-lg' src="/jacket4.jpg" alt="" style={{pointerEvents : "auto"}} />
        {
            img4 &&(
                <>
                <div className='h-full w-full absolute inset-0 top-0 rounded-2xl bg-black z-50 opacity-50 cursor-pointer'>  </div>
                <span className='absolute text-white font-extrabold text-2xl flex items-center inset-0 ml-[42%] font-[abc] z-50'>Explore</span>
              
                
                </>
                
            )
        }

        <h1 className='relative mt-5 ml-3 text-xl font-[abc] font-bold' style={{pointerEvents : "none"}}>Windbreaker Jacket</h1>
        </div>

        <div 
         onMouseEnter={()=>{
            setImg5(true)
        }}
        onMouseLeave={()=>{
            setImg5(false)
        }}
        className='w-[600px] h-[700px]  min-w-[600px] relative cursor-pointer'>
        <img className='w-full h-full rounded-3xl shadow-lg' src="/jacket5.jpg" alt="" style={{pointerEvents : "auto"}}/>
        {
            img5 &&(
                <>
                <div className='h-full w-full absolute inset-0 top-0 rounded-2xl bg-black z-50 opacity-50 cursor-pointer'>  </div>
                <span className='absolute text-white font-extrabold text-2xl flex items-center inset-0 ml-[42%] font-[abc] z-50'>Explore</span>
              
                
                </>
                
            )
        }
        <h1 className=' relative mt-5 ml-3 text-xl font-[abc] font-bold' style={{pointerEvents : "none"}}>Windrunner Jacket</h1>
        </div>
    </div>
   
   
   </div>
   </>
  )
}

export default Slider2
