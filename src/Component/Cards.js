import React from 'react'
import Single from '../assests/single.png'
import Double from '../assests/double.png'
import triple from '../assests/triple.png'
import CountUp from 'react-countup';

const Cards = () => {
  return (
    <div className='w-full py-[160px] px-4 bg-white '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-7'> 

            <div className='w-full shadow-xl border flex flex-col my-4 p-4 rounded-lg hover:scale-90 duration-600'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
               <h2 className='text-center text-2xl font-bold py-7'>Single User</h2>
                <p className='text-center font-semibold text-3xl'><CountUp end={1900} duration={14}/>+</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mt-6'>500 GB Storage</p>
                    <p className='py-2 border-b'>1 Granted user</p>
                    <p className='py-2 border-b mb-6'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black mx-auto  px-8 py-2 font-semibold rounded-md '>Start Trial</button>
            </div>

{/* card 2 */}
<div className='w-full shadow-xl border bg-slate-100 flex flex-col my-4 p-4 rounded-lg hover:scale-90 duration-600'>
                <img className='w-20 mx-auto mt-[-3rem] bg-tranparent' src={Double} alt="" />
               <h2 className='text-center text-2xl font-bold py-7'>Double User</h2>
                <p className='text-center font-semibold text-3xl'><CountUp end={4550} duration={15}
                 />+</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mt-6'>800 GB Storage</p>
                    <p className='py-2 border-b'>1 Granted user</p>
                    <p className='py-2 border-b mb-6'>Send up to 2 GB</p>
                </div>
                <button className='bg-black text-[#00df9a] mx-auto  px-8 py-2 font-semibold rounded-md '>Start Trial</button>
            </div>

                       {/* card 3 */}
            
             <div className='w-full shadow-xl border flex flex-col my-4 p-4 rounded-lg hover:scale-90 duration-600'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="" />
               <h2 className='text-center text-2xl font-bold py-7'>Triple User</h2>
                <p className='text-center font-semibold text-3xl'><CountUp end={1450} duration={17} />+</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mt-6'>500 GB Storage</p>
                    <p className='py-2 border-b'>1 Granted user</p>
                    <p className='py-2 border-b mb-6'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black mx-auto  px-8 py-2 font-semibold rounded-md '>Start Trial</button>
            </div>
       
        </div>
      
    </div>
  )
}

export default Cards