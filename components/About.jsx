import Image from 'next/image'
import React from 'react'
import aboutImage from '../public/assets/aboutImage.png'

const About = () => {
  return (
    // <div id='about' className='w-full md:h-screen p-2 flex items-center py-28'>
    <div id='about' className='w-full px-8 md:px-16 items-center py-28'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651ef]'>About</p>
          <h2 className='py-2 text-gray-600'>Who I Am</h2>
          <p className='py-2 text-gray-600'>Passionate and collaborative junior developer poised to build valuable experience and ready to contribute to team success. Well-versed in MERN Stack.</p>
        </div>
        {/* <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300'> */}
        <div className='w-full h-auto m-auto rounded-xl items-center justify-center p-4'>
          <Image className='rounded-xl' src={aboutImage} height='250px' width='250px' alt='/' />
        </div>
      </div>
    </div>
  )
}

export default About
