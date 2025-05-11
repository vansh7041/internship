import React from 'react'
import { Link } from 'react-router-dom'

const Video = () => {
  return (
    <>
    <div className='flex items-center'>
        <div className='relative w-full text-white text-7xl z-50 '>
            <h1 className='absolute left-[40%] top-[20%] font-bold'>THE KEY TO</h1>
            <h1 className='absolute left-[37%] top-[35%] font-[abc2] font-bold'>Enlightenment</h1>
            <h5 className='absolute left-[33%] top-[52%] text-xl font-[abc1] font-bold'>Unlock all-day comfort for all-day efforts with Nano-Air® Ultralight.</h5>
            <div className='absolute left-[33%] top-[70%] text-xl font-[abc1] gap-16 flex' >
                <Link to={"/menswear"} className='bg-white text-black text-[80%] rounded-3xl px-7 py-3 z-50 font-bold cursor-pointer active:scale-90 '>
                           Men's Wear
                </Link>
                 <button className='bg-white text-black text-[80%] rounded-3xl px-7 py-3 z-50 font-bold cursor-pointer active:scale-90' >
                            Women's Wear
                 </button>
                 <button className='bg-white text-black text-[80%] rounded-3xl px-7 py-3 z-50 font-bold cursor-pointer active:scale-90'>
                               Shop All
                 </button >
            </div>
        <video className='h-[600px] w-full object-cover'  autoPlay loop muted src="video.mp4"></video>
        </div>
 
    </div>
    </>
  )
}

export default Video
