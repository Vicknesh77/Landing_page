import React from 'react'
import Laptop from '../assests/laptop.jpg'


const Analytics = ({scrollToTop}) => {
  return (
    <div className='w-full bg-white py-16 px-5'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className ='w-[500px] mx-auto my-5' src={Laptop} alt="laptop" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='sm:text-3xl md:text-4xl text-2xl font-bold py-3'>Manage Data Analytics Contrally</h1>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quibusdam deleniti ab, reprehenderit aut molestias autem quo modi error enim! Quidem animi dolorum eos quibusdam quis, odit consectetur reprehenderit 
                </p>
                <button onClick={scrollToTop} className='bg-[#000300] text-[#00df9a] w-[170px] font-semi-bold my-8 py-3 mx-auto px-2 rounded-3xl md:mx-0'> Read more</button>
            </div>
        </div>


    </div>
  )
}

export default Analytics