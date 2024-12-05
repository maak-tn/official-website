import { Button, Link } from "@nextui-org/react";
import { VelocityScroll } from "../../components/ScrollingText";
import './index.css';
import styled from "styled-components";
import BackgroundDots from "../../components/ui/Background";


export default function Home() {

    const SPRINT_CYCLE = [
        {
            title: "Planning",
            time: "Day 1",
            description: "Backlog prioritization\nStory point estimation\nSprint goal definition"
        },
        {
            title: "Development",
            time: "Days 2-13",
            description: "Feature implementation\nContinuous integration\nDaily standups (15 minutes)\nQuality assurance"
        },
        {
            title: "Review",
            time: "Day 14",
            description: "Sprint demonstration\nStakeholder feedback\nMetrics review\nNext sprint preparation"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center lg:max-w-[var(--max-content-width)] lg:mx-auto lg:px-0 px-4 gap-28">

            <section id="heroSection" className="flex flex-col items-center justify-center w-full gap-12 min-h-[900px]">
                <BackgroundDots />
                <h1 className="block text-6xl font-bold leading-tight tracking-tighter text-center text-black lg:leading-none lg:text-8xl">
                    Software Development <br /> Done Right
                </h1>

                <div className="flex flex-col gap-4 text-center">
                    <strong className="text-xl">Crafted with precision, delivered with speed</strong>
                    <p className="text-lg font-normal text-gray-800">
                        We're committed to turning your ideas into reality. Our streamlined process ensures that every project is executed with precision and delivered on time. From initial planning to final deployment, we're dedicated to providing exceptional results.
                    </p>
                </div>

                <div className="relative flex-col items-center hidden w-full lg:flex group">
                    <Button variant="solid" color="default" radius="lg" size="lg" className="absolute z-30 w-full text-white scale-150 bg-black lg:w-fit" as={Link} href="/get-in-touch">Get In Touch</Button>

                    <VelocityScroll text="DO IT, DO IT NOW!" className="text-gray-400 opacity-0 group-hover:opacity-100" />
                </div>

                <Button variant="solid" color="default" radius="lg" size="lg" className="w-full text-white bg-black 0 lg:hidden lg:w-fit" as={Link} href="/get-in-touch">Get In Touch</Button>
            </section>

            <section id="processSection" className="flex flex-col w-full gap-8 text-left">

                <h1 className="text-6xl font-bold capitalize">How we do it?</h1>

                <div id="processGrid" className="!hidden lg:!grid">
                    {/* ** STEP 1 ** */}
                    <ProcessCard id="step1">
                        <div>
                            <h1>1. Initial Consultation</h1>
                            <h3>1-2 weeks</h3>
                        </div>
                        <p>We begin with an in-depth exploration of your vision through</p>
                        <ul>
                            <li>📝 Strategic discovery sessions to identify core business objectives</li>
                            <li>📝 Technical requirement analysis</li>
                            <li>📝 Resource and constraint evaluation</li>
                            <li>📝 Comprehensive project proposal development</li>
                        </ul>
                    </ProcessCard>

                    {/* ** STEP 3 ** */}
                    <ProcessCard id="step2">
                        <div className="isolate">
                            <div className="noise"></div>
                            <div className="overlay"></div>
                        </div>
                        <div>
                            <h1>2. Agile Development</h1>
                            <h3>20+ weeks</h3>
                        </div>
                        <p>We implement your solution through structured 14-day sprints</p>

                        <ol className="relative border-gray-200 border-s dark:border-gray-700">

                            {
                                SPRINT_CYCLE.map((step: any, index: number) => (
                                    <li className="mb-10 ms-4" key={index}>
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">{step.time}</time>
                                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                                        <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                            {
                                                step.description.split('\n').map((line: string, index: number) => (
                                                    <p key={index}>🚀 {line}</p>
                                                ))
                                            }
                                        </div>
                                    </li>
                                ))
                            }
                        </ol>

                    </ProcessCard>

                    {/* ** STEP 2 ** */}
                    <ProcessCard id="step3">
                        <div>
                            <h1>3. Strategic Planning</h1>
                            <h3>2-5 weeks</h3>
                        </div>
                        <p>During this phase, we</p>
                        <ol>
                            <li>🗺️ Transform your concept into an actionable roadmap</li>
                            <li>🗺️ Define technical architecture and stack</li>
                            <li>🗺️ Create detailed user stories and acceptance criteria</li>
                            <li>🗺️ Establish project milestones and resource allocation</li>
                            <li>🗺️ Develop risk mitigation strategies</li>
                        </ol>
                    </ProcessCard>

                    {/* ** STEP 4 ** */}
                    <ProcessCard id="step4">
                        <div>
                            <h1>4. User Acceptance Testing</h1>
                            <h3>1 week</h3>
                        </div>
                        <ul>
                            <li>👨‍💻 End-user validation in production-like environment</li>
                            <li>👨‍💻 Performance testing under real-world conditions</li>
                            <li>👨‍💻 Bug tracking and resolution</li>
                            <li>👨‍💻 Final adjustments based on user feedback</li>
                            <li>👨‍💻 Deployment preparation and documentation</li>
                        </ul>
                    </ProcessCard>
                </div>

                <div className="flex flex-col gap-8 lg:hidden">
                    {/* ** STEP 1 ** */}
                    <ProcessCard>
                        <div>
                            <h1>1. Initial Consultation</h1>
                            <h3>1-2 weeks</h3>
                        </div>
                        <p>We begin with an in-depth exploration of your vision through</p>
                        <ul>
                            <li>📝 Strategic discovery sessions to identify core business objectives</li>
                            <li>📝 Technical requirement analysis</li>
                            <li>📝 Resource and constraint evaluation</li>
                            <li>📝 Comprehensive project proposal development</li>
                        </ul>
                    </ProcessCard>

                    {/* ** STEP 3 ** */}
                    <ProcessCard>
                        <div className="isolate">
                            <div className="noise"></div>
                            <div className="overlay"></div>
                        </div>
                        <div>
                            <h1>2. Agile Development</h1>
                            <h3>20+ weeks</h3>
                        </div>
                        <p>We implement your solution through structured 14-day sprints</p>

                        <ol className="relative border-gray-200 border-s dark:border-gray-700">

                            {
                                SPRINT_CYCLE.map((step: any, index: number) => (
                                    <li className="mb-10 ms-4" key={index}>
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">{step.time}</time>
                                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                                        <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                            {
                                                step.description.split('\n').map((line: string, index: number) => (
                                                    <p key={index}>🚀 {line}</p>
                                                ))
                                            }
                                        </div>
                                    </li>
                                ))
                            }
                        </ol>

                    </ProcessCard>

                    {/* ** STEP 2 ** */}
                    <ProcessCard>
                        <div>
                            <h1>3. Strategic Planning</h1>
                            <h3>2-5 weeks</h3>
                        </div>
                        <p>During this phase, we</p>
                        <ol>
                            <li>🗺️ Transform your concept into an actionable roadmap</li>
                            <li>🗺️ Define technical architecture and stack</li>
                            <li>🗺️ Create detailed user stories and acceptance criteria</li>
                            <li>🗺️ Establish project milestones and resource allocation</li>
                            <li>🗺️ Develop risk mitigation strategies</li>
                        </ol>
                    </ProcessCard>

                    {/* ** STEP 4 ** */}
                    <ProcessCard>
                        <div>
                            <h1>4. User Acceptance Testing</h1>
                            <h3>1 week</h3>
                        </div>
                        <ul>
                            <li>👨‍💻 End-user validation in production-like environment</li>
                            <li>👨‍💻 Performance testing under real-world conditions</li>
                            <li>👨‍💻 Bug tracking and resolution</li>
                            <li>👨‍💻 Final adjustments based on user feedback</li>
                            <li>👨‍💻 Deployment preparation and documentation</li>
                        </ul>
                    </ProcessCard>
                </div>
            </section>

            <section id="contactTrigger" className="flex flex-row items-center justify-center w-full p-12 text-white shadow-md rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950">

                <div className="flex flex-col gap-8">
                    <h1 className="text-5xl font-semibold text-center">Let’s create your next big idea.</h1>
                    <p className="font-thin text-center">Get in touch with us to discuss your project requirements and get a free consultation.</p>

                    <Button variant="solid" color="default" radius="lg" size="lg" className="w-full text-black bg-white 0" as={Link} href="/get-in-touch">Get In Touch</Button>
                </div>

            </section>

            <section></section>

        </div>
    )
}


const ProcessCard = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 1rem;
    background: #fbfcfc;
    border-radius: 0%.5;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    position: relative;

    h1 {
        font-size: 2rem;
        font-weight: 700;
    }

    .isolate {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;

        .noise {
            background: 
                linear-gradient(20deg, rebeccapurple, transparent), 
                contrast(170%) brightness(1000%);
        }
        .overlay {
            background: #e09512;
            mix-blend-mode: multiply;
        }
    }
`;