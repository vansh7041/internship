import React from 'react'
import Footer from './Footer'

const Section = () => {
  return (
    <>
    <div className='h-[600px] w-full bg-black relative'>
        <div className='h-full w-full bg-black flex   justify-between px-12'>
        <div className='text-white mt-16 ml-10'>
    <div className='text-3xl font-bold border-4 px-7 py-2 rounded-4xl'>Resouces</div>
    <h2 className='mt-6 ml-4 inline-block cursor-pointer  relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Find A Store</h2><br />
    <h2 className='mt-6 ml-4 inline-block cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Become A Member</h2><br />
    <h2 className='mt-6 ml-4 inline-block cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Send Us Feedback</h2>
</div>

<div className='text-white mt-16 mr-16'>
    <div className='text-3xl font-bold border-4 px-7 py-2 rounded-4xl'>Help</div>
    <h2 className='mt-6 inline-block ml-4 cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Get Help</h2><br />
    <h2 className='mt-6 ml-4 inline-block cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Order Status</h2><br />
    <h2 className='mt-6 ml-4 inline-block cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Delivery</h2><br />
    <h2 className='mt-6 ml-4 inline-block cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Returns</h2><br />
    <h2 className='mt-6 ml-4 inline-block cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Payment Options</h2><br />
    <h2 className='mt-6 ml-4 inline-block cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Contact Us</h2>
</div>

<div className='text-white mt-16 mr-10'> 
<div  className='text-3xl font-bold border-4 px-7 py-2 rounded-4xl'>Company</div>
<h2 className='mt-6 ml-4 inline-block cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>About Company</h2><br />
<h2 className='mt-6 ml-4 inline-block cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>News</h2><br />
<h2 className='mt-6 ml-4 inline-block cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Carrers</h2><br />
<h2 className='mt-6 ml-4 inline-block cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Investors</h2>
</div>

        </div>

<Footer/>
    </div>
    </>
  )
}

export default Section
