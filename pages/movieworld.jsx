import Image from 'next/image'
import React from 'react'
import movieWorldPoster from '../public/assets/projects/movieWorldPoster.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const movieworld = () => {
  return (
    // <div className='w-full'>
    <div className='w-full'>
        {/* <div className='w-screen h-[30vh] lg:h-[45vh] relative'> */}
        <div className='w-screen h-[45vh] relative'>
            {/* <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[45vh] bg-black/80 z-10' /> */}
            <div className='absolute top-0 left-0 w-full h-[45vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={movieWorldPoster} alt='/' />
            {/* <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'> */}
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-8 md:px-16 text-xs lg:text-base'>
                <h2 className='py-2'>Movie World</h2>
                <h3>A movie review platform which allows user to search and review movies from a variety of genres.</h3>
            </div>
        </div>
        {/* <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'> */}
        <div className='max-w-[1240px] mx-auto px-8 md:px-16 grid md:grid-cols-5 gap-8 pt-8 pb-8'>
            <div className='col-span-4'>
                <h3>Overview</h3>
                <p className='text-sm md:text-base'>
                To cut down time & cost involved by an admin to rate user inserted reviews on a scale of 1 to 10. Instead with implementing machine learning to overcome this hurdle but also taking machine learning to a whole new level by adding extra filters to encounter junk and robot generated reviews before they are safe to be stored in my cluster on MongoDB.
                </p>
                {/* <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                <button className='px-8 py-2 mt-4'>Code</button> */}
                <Link href='/#projects'>
                    <button className='px-8 py-2 mt-4 mr-8'>Back</button>
                </Link>
            </div>
            <div className='text-xs lg:text-sm col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> React Js
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Node Js
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Express Js
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> JS ES6
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Movie Database API
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Mongo DB
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default movieworld
