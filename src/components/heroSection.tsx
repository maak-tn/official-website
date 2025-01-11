import { styles } from '@/app/(root)/page'
import React from 'react'

function HeroSection() {
    return (
        <section className='flex justify-between flex-col px-4' style={styles.sharedSectionLayout}>
            <div className='h-full flex flex-col justify-center w-full'>
                <p className='lg:font-semibold leading-snug tracking-wide uppercase lg:text-8xl text-3xl lg:text-left text-center'>
                    👋 I'm aymen khedhriya
                    <br />
                    software developer
                    <br />
                    & founder of MAAK corp
                </p>
            </div>

            <div className='flex flex-col items-start gap-4 lg:justify-between lg:gap-0 lg:flex-row'>
                <p>
                    Based in TUNISIA
                    <br />
                    and working worldwide
                </p>
                <p className='lg:text-right lg:max-w-[600px]'>
                    SAAS products for small and medium businesses.
                    <br />
                    Project management and Consulting services.
                </p>
            </div>
        </section>
    )
}

export default HeroSection