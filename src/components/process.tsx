import { styles } from '@/app/(root)/page'
import React from 'react'
import ProcessCard from './ui/processCard'
import { TProcessItem } from '@/app/lib/type'
import SectionTitle from './ui/sectionTitle'

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
        <section className='px-4 w-full flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between lg:items-center' style={styles.sharedSectionLayout}>
            <SectionTitle title='how i do ito ?' />
            <div className='w-full h-full flex flex-row gap-8 overflow-x-scroll hiddenScroll '>
                {
                    process.map((item: TProcessItem, index: number) => (<ProcessCard key={index} {...item} />))
                }
            </div>
        </section>
    )
}

export default Process