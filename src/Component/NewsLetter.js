import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-6'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow? </h1>
            <p>Signup to your newsletter and stay up to date.</p>
        </div>
        <div className='py-3'>
            <div className=' flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 w-full flex rounded-md text-black' type="email" placeholder='Enter email' />
                <button onClick ={window.scrollTo(10,10)}className=' font-bold bg-[#00df9a] text-black rounded-md p-3 ml-4 my-4 w-[200px] '>Notify Me</button>
            </div>
            <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
            
        </div>
        
      </div>
    </div>
  )
}

export default NewsLetter