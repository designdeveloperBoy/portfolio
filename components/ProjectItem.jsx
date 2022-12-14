import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, backgroundImg, projectUrl, keyTools}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-2 group bg-[#5651e5] hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            {/* <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3> */}
            <h3 className='text-lg lg:text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{keyTools}</p>
            <Link href={projectUrl}>
                <p className='text-center px-4 lg:px-0 py-2 sm:py-3 rounded-lg bg-white text-gray-700 font-bold md:text-lg cursor-pointer'>More Info</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem
