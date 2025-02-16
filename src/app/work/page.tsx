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
        }
    ];

    return (
        <section className='px-4 max-w-[var(--max-width)] flex flex-col gap-24 items-start lg:py-24 py-16 lg:px-0 mx-auto'>
            <SectionTitle title='Our Work.' />

            <section className='flex flex-col gap-8 w-full'>
                {
                    projects.map((project: TProject, index: number) => (
                        <div key={index} className='flex border border-gray-400 rounded-xl items-center w-4/5 min-h-[300px] pl-2'>
                            <img src={project.image} alt={project.title} className='w-64' />
                            <div className='flex flex-col gap-4 h-full w-full p-8'>
                                <h3 className='font-semibold text-4xl uppercase'>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className='leading-tight'>
                                    <div className='flex gap-1'>
                                        {
                                            project.tags.map((tag: string, index: number) => (
                                                <span key={index} className='bg-black text-stone-500 px-2 py-1 rounded-lg'>#{tag}</span>
                                            ))
                                        }
                                    </div>
                                    <div className='flex gap-1'>
                                        {
                                            project.techStack.map((tech: string, index: number) => (
                                                <span key={index} className='bg-black text-stone-500 px-2 py-1 rounded-lg'>#{tech}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <a href={project.link} className='bg-white text-black px-4 py-2 rounded-lg w-fit hover:bg-stone-200'>Read more</a>
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