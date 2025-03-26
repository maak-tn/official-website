import { TProject } from '@/lib/type'
import Image from 'next/image'
import React from 'react'

export default function ProjectCard({project, isReverse}: {project: TProject, isReverse: boolean}) {
    return (
        <div className={`flex items-center gap-32 bg-[#1E1E1E] text-white rounded-xl p-12 ${isReverse ? 'flex-row-reverse' : ''}`}>
            <Image src={project.image} alt="placeholder" width={300} height={300}/>

            <div className='flex flex-col gap-4'>
                <h1 className='text-5xl font-bold capitalize'>{project.title}</h1>
                <p className='text-base font-light'>{project.description}</p>
                <a href={project.link} className='bg-white text-black px-4 py-2 rounded-lg lg:w-fit w-full text-center hover:bg-stone-200'>Read more</a>
            </div>
        </div>
    )
}