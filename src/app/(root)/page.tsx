import React from 'react'
import Nav from '@/components/nav'
import HeroSection from '@/components/heroSection'
import About from '@/components/about'

// Used to get the final height of the different sections
export const styles = {
    sharedSectionLayout: {
        height: 'calc(100vh - var(--navbar-height))'
    }
};

function page() {
    return (
        <div>
            <Nav />
            <HeroSection />
            <About />
        </div>
    )
}

export default page