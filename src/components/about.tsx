import { styles } from '@/app/(root)/page';
import React from 'react'
import NumberCard from './ui/numberCard';
import { TStatsCard } from '@/app/lib/type';
import SectionTitle from './ui/sectionTitle';

function About() {

    const stats: TStatsCard[] = [
        {
            label: '18+',
            description: 'Completed Projects'
        },
        {
            label: '6+',
            description: 'Years of Exprience'
        }
    ]

    return (
        <section className='px-4 w-full flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between lg:items-center' style={styles.sharedSectionLayout}>
            <SectionTitle title='what i do ?' />
            <div className='w-full h-full flex flex-col gap-24'>
                <p className='lg:text-2xl lg:leading-loose lg:text-left text-justify lg:tracking-wide'>
                    For over 6 years, I've helped small businesses and startups save up to 70% on web development costs through strategic use of <strong>no-code tools and custom development</strong>. From e-commerce websites to business automation, my proven hybrid approach delivers <strong>enterprise-grade solutions at a fraction of traditional development costs</strong>. Perfect for businesses looking for quick deployment and budget-friendly digital transformation with trusted expertise.
                </p>

                <div className='flex lg:flex-row flex-col lg:gap-24 gap-8 items-center'>
                    {
                        stats.map((item: TStatsCard, index: number) => (
                            <NumberCard {...item} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default About