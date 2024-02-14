import React, { useState } from 'react'
import { AiOutlineClose , AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
   const [nav , setnav] = useState(false)

   const handleNav =()=>{
      setnav(!nav);
   }

  return (
    <div className='text-white flex py-5 items-center justify-between h-24 max-w-[1240px] px-4  mx-auto'>
        <h1 className='w-full text-2xl font-bold text-[#00df9a]'>REACT .</h1>

      {/* min width 768 is reached then the flex will display otherwise display hidden */}
        <ul className='hidden md:flex'>    
          <li className=' cursor-pointer p-5 hover:underline '>Home</li>
          <li className='p-5 cursor-pointer hover:underline'>Company</li>
          <li className='p-5 hover:underline' cursor-pointer>Resources</li>
          <li className='p-5 hover:underline cursor-pointer'>About</li>
          <li className='p-5 hover:underline  cursor-pointer'>Contact</li>
        </ul>

        <div className='cursor-pointer block md:hidden'onClick={handleNav}>
          {nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/> }
         
        </div>

        {/* For Mobile Response */}

        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-0 border-r-gray-600 bg-[#000300]': ' ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-2xl m-4 font-bold text-[#00df9a]'>REACT .</h1>
          <ul className='p-4 uppercase'>
          <li className='p-5 border-b border-gray-600'>Home</li>
          <li className='p-5 border-b border-b-gray-600'>Company</li>
          <li className='p-5 border-b border-b-gray-600'>Resources</li>
          <li className='p-5 border-b border-b-gray-600'>About</li>
          <li className='p-5'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar