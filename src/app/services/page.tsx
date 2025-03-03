import SectionTitle from '@/components/ui/sectionTitle';
import { TService } from '@/lib/type';
import React from 'react'

function page() {

    const services: TService[] = [
        {
            title: 'Web Development',
            client: 'WinIntelligence (Netherlands)',
            description: "Ship small features and enhancements with minimal guidance and support from other team members.\n Develop features and improvements to the available products in a secure, well-tested, and performant way.\n Fix prioritized issues from the issue tracker.",
            image: '/services/dev.svg',
            tags: ['Frontend', 'Backend', 'Fullstack'],
            techStack: ['Angular', 'Angular-JS', 'React', 'Next-JS', 'NodeJS']
        },
        {
            title: 'Project Management & Consulting',
            client: 'DivaSoftware (Tunisia)',
            description: 'Leading and mentoring development teams in delivering complex, enterprise-scale solutions (ERP, Custom CRM, …).\n Develop and execute comprehensive project roadmaps and development plans.\n Manage and lead a team of 6 developers to achieve project objectives.',
            image: '/services/management.svg',
            tags: ['Project Management', 'Consulting', 'Mentoring'],
            techStack: ['Agile', 'Scrum', 'Kanban', 'ClickUp', 'Slack']
        }
    ];

    return (
        <section className='px-4 max-w-[var(--max-width)] flex flex-col gap-24 items-start lg:py-24 py-16 lg:px-0 mx-auto'>
            <SectionTitle title='Services Provided.' />

            <section className='flex flex-col gap-8 w-full'>
                {
                    services.map((service: TService, index: number) => (
                        <div key={index} className='flex flex-col lg:flex-row border border-gray-400 rounded-xl items-center lg:w-4/5 min-h-[300px] lg:pl-2 p-4'>
                            <img src={service.image} alt={service.title} className='w-64' />
                            <div className='flex flex-col gap-8 h-full w-full lg:p-8 lg:pt-0 pt-12'>
                                <div>
                                    <h3 className='font-semibold text-4xl uppercase'>{service.title}</h3>
                                    <h4 className='font-light text-lg uppercase text-stone-400'>{service.client}</h4>
                                </div>
                                <ul className='list-disc lg:pl-12 pl-4'>
                                    {
                                        service.description.split('\n').map((line: string, index: number) => (
                                            <li key={index}>{line}</li>
                                        ))
                                    }
                                </ul>
                                <div className='leading-tight'>
                                    <div className='flex gap-1 flex-wrap'>
                                        {
                                            service.tags.map((tag: string, index: number) => (
                                                <span key={index} className='bg-black text-stone-500 px-2 py-1 rounded-lg'>#{tag}</span>
                                            ))
                                        }
                                    </div>
                                    <div className='flex gap-1 flex-wrap'>
                                        {
                                            service.techStack.map((tech: string, index: number) => (
                                                <span key={index} className='bg-black text-stone-500 px-2 py-1 rounded-lg'>#{tech}</span>
                                            ))
                                        }
                                    </div>
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