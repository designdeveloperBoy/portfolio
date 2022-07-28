import Image from 'next/image'
import React from 'react'
import newsletterPoster from '../public/assets/projects/newsletterIcon.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const newsletter = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[45vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[45vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={newsletterPoster} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Newsletter Subscription</h2>
                <h3>A platform designed for business marketing.</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h3>Overview</h3>
                <p>
                Converting user inserted details into flatpack using JSON.stringify() for migration onto Mailchimp&apos;s server.
                </p>

                {/* <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                <button className='px-8 py-2 mt-4'>Code</button> */}

                <Link href='https://haiders-newsletter-subscrition.herokuapp.com/'>
                    <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </Link>
                <Link href='/#projects'>
                    <button className='px-8 py-2 mt-4 mr-8'>Back</button>
                </Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Node Js
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Express Js
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Mailchimp
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default newsletter
