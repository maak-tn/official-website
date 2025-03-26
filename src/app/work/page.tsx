import ProjectCard from '@/components/projectCard';
import SectionTitle from '@/components/ui/sectionTitle';
import { projects, services } from '@/lib/data';
import { TProject } from '@/lib/type';
import React from 'react'

function page() {

    return (
        <section className='px-4 lg:max-w-[var(--max-width)] flex flex-col gap-24 items-start lg:py-24 py-16 lg:px-0 mx-auto'>
            <SectionTitle title='Projects Developed.' />

            <section className='flex flex-col gap-8 w-full'>
                {
                    projects.map((project: TProject, index: number) => (
                        <ProjectCard key={index} project={project} isReverse={index % 2 === 0} />
                    ))
                }
            </section>

            <SectionTitle title='Case Studies' />

            <section className='flex flex-col gap-8 w-full'>
                {
                    services.map((project: TProject, index: number) => (
                        <ProjectCard key={index} project={project} isReverse={index % 2 === 0} />
                    ))
                }
            </section>
        </section>
    )
}

export default page