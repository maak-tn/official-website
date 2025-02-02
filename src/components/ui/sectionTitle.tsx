import React from 'react'

function SectionTitle({ title }: { title: string }) {
    return (
        <h1 className='uppercase text-5xl font-bold lg:min-w-[800px] underline'>
            {title}
        </h1>
    )
}

export default SectionTitle