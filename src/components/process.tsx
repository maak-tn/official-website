import React from 'react'
import ProcessCard from './ui/processCard'
import { TProcessItem } from '@/lib/type'
import SectionTitle from './ui/sectionTitle'
import ProcessFlow from './ui/processFlow'

function Process() {

    const process: TProcessItem[] = [
        {
            title: 'Initial Consultation',
            duration: '1/2 weeks',
            description: 'We begin with an in-depth exploration of your vision through',
            customList: [
                'Strategic discovery sessions to identify core business objectives',
                'Technical requirement analysis',
                'Resource and constraint evaluation',
                'Comprehensive project proposal development',
            ]
        },
        {
            title: 'Strategic Planning',
            duration: '2/5 weeks',
            description: 'During this phase, we',
            customList: [
                'Develop a comprehensive project roadmap',
                'Define project milestones and deliverables',
                'Create a detailed project schedule',
                'Establish project success criteria',
            ]
        },
        {
            title: 'Agile Development',
            duration: '20+ weeks',
            description: 'We implement your solution through structured 14-day sprints',
            customList: [
                'Sprint planning and backlog grooming',
                'Daily standups and progress tracking',
                'Bi-weekly sprint reviews and retrospectives',
                'Continuous integration and deployment',
            ]
        },
        {
            title: 'User Acceptance Testing',
            duration: '1 week',
            description: 'We begin with an in-depth exploration of your vision through',
            customList: [
                'End-user validation in production-like environment',
                'Performance testing under real-world conditions',
                'Bug tracking and resolution',
                'Final adjustments based on user feedback',
                'Deployment preparation and documentation',
            ]
        },
    ]

    return (
        <section className='px-4 max-w-[var(--max-width)] flex flex-col gap-16 items-start lg:py-24 py-16 lg:px-0 mx-auto'>
            <SectionTitle title='how we do it?' subTitle='process' />

            <div className='flex flex-col gap-8 w-full'>
                <p className='lg:text-2xl lg:leading-loose lg:text-left text-justify lg:tracking-wide lg:max-w-[900px]'>
                    Most agencies jump straight into code, leaving strategy and testing as an afterthought. We don&apos;t. Every project moves through the same four phases — from first conversation to final sign-off — so nothing gets rushed and nothing gets missed.
                </p>

                <ProcessFlow steps={process.map((item) => item.title)} />

                <p className='text-sm text-white/50'>
                    Each phase has a clear deliverable and timeline — no scope creep, no guesswork.
                </p>
            </div>

            <div className='w-full flex flex-col gap-6'>
                {
                    process.map((item: TProcessItem, index: number) => (<ProcessCard key={index} {...item} />))
                }
            </div>
        </section>
    )
}

export default Process