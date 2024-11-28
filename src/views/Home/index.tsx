import { Button, Link } from "@nextui-org/react";
import { VelocityScroll } from "../../components/ScrollingText";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center lg:max-w-[var(--max-content-width)] lg:mx-auto lg:px-0 px-4 h-screen">

            <section id="heroSection" className="flex flex-col items-center justify-center w-full gap-12">
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


        </div>
    )
}