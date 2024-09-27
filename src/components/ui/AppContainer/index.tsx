import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NextUIProvider, Spinner } from '@nextui-org/react'
import { cn } from '../../../common/utils'
import Footer from '../../partials/Footer'

export function AppContainer({ className = '' }) {
    const navigate = useNavigate()

    return (
        <NextUIProvider navigate={navigate}>

            <div className={cn('w-full h-screen', className)}>
                <React.Suspense
                    fallback={
                        <div className="flex items-center justify-center w-full h-full">
                            <Spinner />
                        </div>
                    }
                >
                    <Outlet />
                </React.Suspense>

                <Footer />
            </div>

        </NextUIProvider >
    )
}
