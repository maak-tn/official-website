import React from 'react'

function ProcessFlow({ steps }: { steps: string[] }) {
    return (
        <div className='flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-3 w-full'>
            {
                steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <span className='border border-white/20 rounded-full px-6 py-3 font-bold whitespace-nowrap text-center'>
                            {step}
                        </span>
                        {
                            index < steps.length - 1 &&
                            <span className='text-white/40 text-xl rotate-90 lg:rotate-0' aria-hidden>→</span>
                        }
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default ProcessFlow
