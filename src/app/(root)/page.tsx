import React from 'react'
import HeroSection from '@/components/heroSection'

// Used to get the final height of the different sections
export const styles = {
    sharedSectionLayout: {
        minHeight: 'calc(100vh - var(--navbar-height))'
    }
};

function page() {
    return (
        <div>
            <HeroSection />
        </div>
    )
}

export default page