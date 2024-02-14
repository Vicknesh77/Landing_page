import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,

} from 'react-icons/fa'
const Footer = ({scrollToTop }) => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-7 text-gray-500 '>
         <div>
            <h1 className='w-full text-2xl m-2 font-bold text-[#00df9a]'>REACT .</h1>
            <p className='py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium, exercitationem aliquam ut iure earum quia nulla.</p>
            <div className='flex justify-between md:w-[%65] my-5 gap-10'>
                <FaFacebookSquare size ={25} onClick={scrollToTop}/>
                <FaInstagram size ={25} onClick={scrollToTop}/>
                <FaTwitterSquare size ={25} onClick={scrollToTop}/>
                <FaGithubSquare size ={25} onClick={scrollToTop}/>
                <FaDribbbleSquare size ={25} onClick={scrollToTop}/>
            </div>
          
         </div>
         {/* grid div */}
        <div className='flex justify-evenly lg:col-span-2 mt-4 '>
            <div>
                <h5 className='font-medium text-gray-400'>Solution</h5>
                <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>

            <div>
                <h5 className='font-medium text-gray-400'>Support</h5>
                <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Guides</li>
                </ul>
            </div>

            <div>
                <h5 onClick={scrollToTop} className='font-medium text-gray-400 cursor-pointer'>Company</h5>
                <ul>
                <li onClick={scrollToTop} className='py-2 text-sm cursor-pointer'>Home</li>
                <li onClick={scrollToTop} className='py-2 text-sm cursor-pointer'>About</li>
                <li onClick={scrollToTop} className='py-2 text-sm cursor-pointer'>Services</li>
                <li onClick={scrollToTop} className='py-2 text-sm cursor-pointer'>Contact</li>
                </ul>
            </div>
               
         </div>
         <p className='mx-auto '>  Made by Kiki</p>
    </div>
  )
}

export default Footer