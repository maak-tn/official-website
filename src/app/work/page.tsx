import ProjectCard from '@/components/projectCard';
import SectionTitle from '@/components/ui/sectionTitle';
import { TProject } from '@/lib/type';
import React from 'react'

function page() {

    const projects: TProject[] = [
        {
            title: 'Planifi ERP',
            description: 'Affordable Solution for tender management - available as SaaS / self-hosted solutions',
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

    const services: TProject[] = [
        {
            title: 'Enterprise Software Development',
            client: 'WinIntelligence (Netherlands)',
            description: "Delivered key product features and enhancements with autonomous execution and minimal supervision. Implemented secure, thoroughly tested, and high-performance solutions across multiple products. Resolved critical issues and optimized application performance through targeted bug fixes and code improvements.",
            image: '/services/dev.svg',
            tags: ['Frontend', 'Backend', 'Fullstack'],
            techStack: ['Angular', 'Angular-JS', 'React', 'Next-JS', 'NodeJS']
        },
        {
            title: 'Technical Leadership & Enterprise Solutions',
            client: 'DivaSoftware (Tunisia)',
            description: 'Provided technical leadership and mentorship for development teams building enterprise-scale business solutions including ERP and custom CRM implementations. Developed comprehensive project roadmaps and technical strategies to ensure successful delivery. Led and managed a team of 6 developers, overseeing project execution and quality assurance throughout the development lifecycle.',
            image: '/services/management.svg',
            tags: ['Project Management', 'Consulting', 'Mentoring'],
            techStack: ['Agile', 'Scrum', 'Kanban', 'ClickUp', 'Slack']
        }
    ];

    return (
        <section className='px-4 lg:max-w-[var(--max-width)] flex flex-col gap-24 items-start lg:py-24 py-16 lg:px-0 mx-auto'>
            <SectionTitle title='Projects Developed.' />

            <section className='flex flex-col gap-8 w-full'>
                {
                    projects.map((project: TProject, index: number) => (
                        <ProjectCard key={index} project={project} isReverse={index%2===0} />
                    ))
                }
            </section>

            <SectionTitle title='Case Studies' />

            <section className='flex flex-col gap-8 w-full'>
                {
                    services.map((project: TProject, index: number) => (
                        <ProjectCard key={index} project={project} isReverse={index%2===0} />
                    ))
                }
            </section>
        </section>
    )
}

export default page