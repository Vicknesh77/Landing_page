import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-94] w-full h-screen mx-auto text-center justify-center flex flex-col'>
        
        <div className='mt-[-84px] mb-42px'>
            <p className='font-bold p-2 text-[#00df9a] uppercase lg:text-2xl'>growing with data analytics</p>
              <h1 className=' md:text-7xl sm:text-5xl text-4xl md:py-2 font-bold py-0'>Grow with data.</h1>
            <div className='flex justify-center items-center md:py-0 '>
                <p className='md:text-4xl sm:text-3xl text-xl py-3'>Fast, flexible financing for  <ReactTyped className='md:text-4xl sm:text-3xl text-xl'
                  strings={['Buy', 'Cost','Earn']}
                  typeSpeed={140}
                  backSpeed={70}
                  loop
                /></p>
          </div>

        </div>
        <p className='md:text-2xl text-xl py-0 px-2 font-bold text-gray-500'>Monitor  your data analytics to increase the business Growth</p>
         <button className='bg-[#00df9a] w-[200px] font-bold my-8 py-3 mx-auto px-4 rounded-3xl'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero