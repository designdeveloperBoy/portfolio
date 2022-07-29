import React from 'react'
import movieWorldIcon from '../public/assets/projects/movieWorldIcon.png'
import movieWorld2 from '../public/assets/projects/movieworld2.png'
import toDoListIcon from '../public/assets/projects/toDoListIcon.png'
import newsletterIcon from '../public/assets/projects/newsletterIcon.png'
import deploymentCompanyIcon from '../public/assets/projects/deploymentCompanyIcon.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full px-8 md:px-16 py-28'>
        {/* <div className='max-w-[1240px] mx-auto px-2 py-32'> */}
        <div className='max-w-[1240px] mx-auto'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem title='Movie World' backgroundImg={movieWorldIcon} projectUrl='/movieworld' keyTools='React Js & Node Js' />
            <ProjectItem title='Movie World 2.0' backgroundImg={movieWorld2} projectUrl='/movieworld2' keyTools='React Js & Next Js' />
            <ProjectItem title='To Do List' backgroundImg={toDoListIcon} projectUrl='/ToDoList' keyTools='Node Js' />
            <ProjectItem title='Newsletter Subscription' backgroundImg={newsletterIcon} projectUrl='/newsletter' keyTools='Node Js' />
            <ProjectItem title='Deployment Company' backgroundImg={deploymentCompanyIcon} projectUrl='/deploymentcompany' keyTools='React Js' />
            </div>
        </div>
    </div>
  )
}

export default Projects
