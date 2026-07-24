'use client';
import { TSocialsLinks } from '@/lib/type';
import React, { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'

function Footer() {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: 'intro' });
            cal('ui', {
                theme: 'dark',
                styles: { branding: { brandColor: '#000000' } },
                hideEventTypeDetails: false,
                layout: 'month_view',
            });
        })();
    }, []);

    const SOCIALS: TSocialsLinks[] = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/maak-corp-tn/',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
            )
        },
        {
            name: 'Email',
            href: 'mailto:contact@maak-corp.tn',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
            )
        },
    ];

    return (
        <footer className='mt-24'>
            <div className='flex flex-col items-center gap-6 px-4 py-12 border border-t border-b border-l-0 border-r-0 border-border lg:px-0'>
                <h3 className='text-lg font-normal uppercase'>have a project in mind?</h3>
                <h1 className='text-5xl font-bold text-center uppercase lg:text-7xl'>Let's work together</h1>
                <button
                    data-cal-namespace="intro"
                    data-cal-link="aymkh/intro"
                    data-cal-config='{"layout":"month_view"}'
                    className='px-8 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-white hover:text-black transition-colors duration-300 border border-whitte capitalize'
                >
                    get in touch ↗️
                </button>
                <div className="flex justify-center mt-8 space-x-6">
                    {
                        SOCIALS.map((item: TSocialsLinks, index: number) => (
                            <a key={index} target="_blank" href={item.href} className="hover:text-gray-500">
                                {item.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
            <p className="py-8 text-base leading-6 text-center">
                © {new Date().getFullYear()} <strong>MAAK CORP</strong>, All rights reserved.
            </p>
        </footer>
    )
}

export default Footer