'use client';
import { styles } from '@/app/(root)/page';
import React from 'react'
import styled from 'styled-components'

function About() {
    return (
        <section className='px-4 py-24 w-full flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between items-start' style={styles.sharedSectionLayout}>
            <h1 className='uppercase text-3xl font-thin lg:min-w-[800px]'>What I do?</h1>
            <div className='w-full h-full flex flex-col gap-24'>
                <p className='lg:text-2xl lg:leading-loose lg:text-left text-justify lg:tracking-wide'>
                    For over 6 years, I've helped small businesses and startups save up to 70% on web development costs through strategic use of <strong>no-code tools and custom development</strong>. From e-commerce websites to business automation, my proven hybrid approach delivers enterprise-grade solutions at a fraction of traditional development costs. Perfect for businesses looking for quick deployment and budget-friendly digital transformation with trusted expertise.
                </p>

                <div className='flex lg:flex-row flex-col lg:gap-24 gap-8 items-center'>
                    <NumbersCard>
                        <h2>18+</h2>
                        <p>Completed Projects</p>
                    </NumbersCard>
                    <NumbersCard>
                        <h2>6+</h2>
                        <p>Years of Experience</p>
                    </NumbersCard>
                </div>
            </div>
        </section>
    )
}

const NumbersCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;
    font-weight: 500;

    h2{
        font-size: 8rem;
        font-weight: 400;
    }
`;

export default About