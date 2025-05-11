import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='w-full text-white bottom-0 flex items-center gap-10 px-16 mb-10 absolute'>
        <h1>© 2025 Company, Inc. All rights reserved</h1>
        <h1 className='cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Guides</h1>
        <h1 className='cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Terms of Use</h1>
        <h1 className='cursor-pointer relative after:content-[""] after:absolute after:left-0  after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-red-500 after:h-1'>Privacy Policy</h1>
    </div>
    </>
  )
}

export default Footer
 