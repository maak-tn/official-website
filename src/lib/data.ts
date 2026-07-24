import { TProject } from "./type";


export const projects: TProject[] = [
    {
        id: '1',
        title: 'VAGA SUITE',
        description: 'All-in-one ERP for Tunisian SMEs - quotes, orders, delivery notes, invoicing, stock and treasury in one place',
        link: 'https://vaga.tn',
        image: '/projects/vaga.png',
        tags: ["ERP", "SAAS", "Invoicing"],
        techStack: ['Angular', 'Supabase', 'NestJS'],
        longDescription: "VAGA SUITE is an all-in-one ERP built for small and medium Tunisian businesses juggling a stock notebook, a spreadsheet for treasury, and a separate invoicing tool. VAGA SUITE brings it all together: a quote turns into an order, then a delivery note, then an invoice, without re-entering anything. Stock updates itself automatically, and treasury tracks every payment in real time. With built-in TEIF compliance for electronic invoicing, VAGA SUITE removes the last-minute scramble around regulatory requirements, giving business owners a single, reliable system to run their day-to-day operations."
    }
];

export const services: TProject[] = [
    {
        id: '3',
        title: 'Enterprise Software Development',
        client: 'WinIntelligence (Netherlands)',
        description: "Delivered key product features and enhancements with autonomous execution and minimal supervision. Implemented secure, thoroughly tested, and high-performance solutions across multiple products. Resolved critical issues and optimized application performance through targeted bug fixes and code improvements.",
        image: '/services/dev.svg',
        tags: ['Frontend', 'Backend', 'Fullstack'],
        techStack: ['Angular', 'Angular-JS', 'React', 'Next-JS', 'NodeJS']
    },
    {
        id: '4',
        title: 'Technical Leadership & Enterprise Solutions',
        client: 'DivaSoftware (Tunisia)',
        description: 'Provided technical leadership and mentorship for development teams building enterprise-scale business solutions including ERP and custom CRM implementations. Developed comprehensive project roadmaps and technical strategies to ensure successful delivery. Led and managed a team of 6 developers, overseeing project execution and quality assurance throughout the development lifecycle.',
        image: '/services/management.svg',
        tags: ['Project Management', 'Consulting', 'Mentoring'],
        techStack: ['Agile', 'Scrum', 'Kanban', 'ClickUp', 'Slack']
    }
];