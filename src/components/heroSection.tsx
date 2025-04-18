import React from 'react'

function HeroSection() {
    return (
        <section className='flex justify-between flex-col px-4 h-sahredSection'>
            <div className='flex flex-col justify-center w-full lg:h-[800px] h-screen'>
                <p className='lg:font-thin leading-snug lg:leading-normal tracking-wide uppercase lg:text-8xl text-3xl lg:text-left text-center'>
                    👋 I'm <a href="https://app.diligentspace.com/profiles/freelancers/659d351039659a24404590a2" target='_blank' className='text-white font-semibold'>aymen khedhriya</a>
                    <br />
                    software developer
                    <br />
                    & founder of MAAK corp
                </p>
            </div>

            <div className='hidden lg:flex flex-col items-start gap-4 lg:justify-between lg:gap-0 lg:flex-row text-xl font-thin lg:pb-12`'>
                <p>
                    Based in <a href="https://en.wikipedia.org/wiki/Tunisia" target='_blank' className='text-white font-semibold'>TUNISIA</a>
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