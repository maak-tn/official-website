import SectionTitle from '@/components/ui/sectionTitle';
import { TProject } from '@/lib/type';
import React from 'react'

function page() {

    const projects: TProject[] = [
        {
            title: 'Planifi',
            description: 'Affordable SAAS for tender management - streamline your bidding process',
            link: 'https://planifi.tn',
            image: '/projects/planifi.svg',
            tags: ["SAAS", "Tender Management", "Bidding"],
            techStack: ['Angular', 'NestJS', 'MySQL', 'AWS', 'Digital Ocean', 'Docker']
        },
        {
            title: 'GitHub Groups',
            description: 'A Chrome extension to manage your GitHub repositories with ease',
            link: 'https://ghg.tn',
            image: '/projects/ghg.png',
            tags: ["Feature", "GitHub", "Chrome Extension"],
            techStack: ['HTML', 'CSS', 'JavaScript']
        }
    ];

    return (
        <section className='px-4 max-w-[var(--max-width)] flex flex-col gap-24 items-start lg:py-24 py-16 lg:px-0 mx-auto'>
            <SectionTitle title='Projects Developed.' />

            <section className='flex flex-col gap-8 w-full'>
                {
                    projects.map((project: TProject, index: number) => (
                        <div key={index} className='flex flex-col lg:flex-row border border-gray-400 rounded-xl items-center lg:w-4/5 min-h-[300px] lg:pl-2 p-4'>
                            <img src={project.image} alt={project.title} className='lg:w-64' />
                            <div className='flex flex-col gap-4 h-full w-full lg:p-8 lg:pt-0 pt-12'>
                                <h3 className='font-semibold text-4xl uppercase'>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className='leading-tight'>
                                    <div className='flex gap-1 flex-wrap'>
                                        {
                                            project.tags.map((tag: string, index: number) => (
                                                <span key={index} className='bg-black text-stone-500 px-2 py-1 rounded-lg'>#{tag}</span>
                                            ))
                                        }
                                    </div>
                                    <div className='flex gap-1 flex-wrap'>
                                        {
                                            project.techStack.map((tech: string, index: number) => (
                                                <span key={index} className='bg-black text-stone-500 px-2 py-1 rounded-lg'>#{tech}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <a href={project.link} className='bg-white text-black px-4 py-2 rounded-lg lg:w-fit w-full text-center hover:bg-stone-200'>Read more</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
        </section>
    )
}

export default page