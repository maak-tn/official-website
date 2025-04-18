import { TProject } from '@/lib/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard({ project, isReverse }: { project: TProject, isReverse: boolean }) {
    return (
        <div className={`flex lg:flex-row flex-col items-center justify-center lg:gap-32 gap-12 bg-[#252527] text-white rounded-xl w-full p-12 ${isReverse ? 'lg:flex-row-reverse flex-col-reverse' : ''}`}>
            <Image src={project.image} alt="placeholder" width={300} height={300} className='block w-44 lg:w-[300px] mx-auto' />

            <div className='flex flex-col gap-4'>
                <h1 className='lg:text-5xl text-2xl font-bold capitalize'>{project.title}</h1>
                {project.client && <h3 className='font-semibold text-xl'>For {project.client}</h3>}
                <p className='text-base font-light'>{project.description}</p>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-1 flex-wrap'>
                        {
                            project.tags.map((tag: string, index: number) => (
                                <span key={index} className='bg-[#414042] text-white opacity-70 px-2 py-1 rounded-lg'>#{tag}</span>
                            ))
                        }
                    </div>
                    <div className='flex gap-1 flex-wrap'>
                        {
                            project.techStack.map((tech: string, index: number) => (
                                <span key={index} className='bg-[#414042] text-white opacity-70 px-2 py-1 rounded-lg'>#{tech}</span>
                            ))
                        }
                    </div>
                </div>
                {
                    project.link &&
                    <Link href={'work/' + project.id} className='bg-white text-black px-4 py-2 rounded-lg lg:w-fit w-full text-center hover:bg-stone-200'>Read more</Link>
                }
            </div>
        </div>
    )
}