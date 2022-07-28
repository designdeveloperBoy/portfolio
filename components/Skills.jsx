import Image from 'next/image'
import React from 'react'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import javascript from '../public/assets/skills/javascript.png'
import react from '../public/assets/skills/react.png'
import tailwind from '../public/assets/skills/tailwind.png'
import firebase from '../public/assets/skills/firebase.png'
import github from '../public/assets/skills/github1.png'
import aws from '../public/assets/skills/aws.png'
import mongo from '../public/assets/skills/mongo.png'
import nextjs from '../public/assets/skills/nextjs.png'
import node from '../public/assets/skills/node.png'
import java from '../public/assets/skills/java.png'
import python from '../public/assets/skills/python.png'
import bootstrap from '../public/assets/skills/bootstrap.png'
import salesforce from '../public/assets/skills/salesforce.png'
import ant from '../public/assets/skills/wordpress.png'
import typescript from '../public/assets/skills/typescript.png'
import angular from '../public/assets/skills/angular.png'
import mailchimp from '../public/assets/skills/mailchimp.png'
import jQuery from '../public/assets/skills/jQuery.png'
import npm from '../public/assets/skills/npm.png'
import heroku from '../public/assets/skills/heroku.png'
import googlecloud from '../public/assets/skills/googlecloud.png'
import docker from '../public/assets/skills/docker.png'

const Skills = () => {
  return (
    // <div id='skills' className='w-full lg:h-screen p-2'>
    <div id='skills' className='w-full py-28 p-2'>
        {/* </div><div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'> */}
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center'>
           <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
           <h2 className='py-4'>What I Can Do</h2>
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={html} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={css} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javascript} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwind} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={firebase} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={github} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={aws} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>AWS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={mongo} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextjs} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next Js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={node} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node Js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={java} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Java</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={python} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={bootstrap} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={salesforce} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Salesforce</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={wordpress} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Wordpress</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={ant} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>ANT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={typescript} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Typescript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={angular} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Angular</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={mailchimp} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Mailchimp</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={jQuery} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>jQuery</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={npm} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NPM</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={heroku} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Heroku</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={googlecloud} height='60px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Google Cloud Platform</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={docker} height='64px' width='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Docker</h3>
                        </div>
                    </div>
                </div>
           </div> 
        </div>
    </div>
  )
}

export default Skills
