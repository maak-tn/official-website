import { TProject } from '@/lib/type'
import Image from 'next/image'
import React from 'react'

export default function ProjectCard({project, isReverse}: {project: TProject, isReverse: boolean}) {
    return (
        <div className={`flex lg:flex-row flex-col items-center justify-center lg:gap-32 gap-12 bg-[#1E1E1E] text-white rounded-xl w-full p-12 ${isReverse ? 'lg:flex-row-reverse flex-col-reverse' : ''}`}>
            <Image src={project.image} alt="placeholder" width={300} height={300} className='block w-44 lg:w-[300px] mx-auto'/>

            <div className='flex flex-col gap-4'>
                <h1 className='lg:text-5xl text-2xl font-bold capitalize'>{project.title}</h1>
                <p className='text-base font-light'>{project.description}</p>
                <a href={project.link} className='bg-white text-black px-4 py-2 rounded-lg lg:w-fit w-full text-center hover:bg-stone-200'>Read more</a>
            </div>
        </div>
    )
}