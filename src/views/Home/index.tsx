import { Button, Link } from "@nextui-org/react";
import { VelocityScroll } from "../../components/ScrollingText";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center px-4 max-w-[var(--max-content-width)] mx-auto lg:px-0">

            <section id="heroSection" className="flex flex-col justify-center items-center w-full gap-12 min-h-[500px] py-16">
                <h1 className="block font-bold leading-tight text-center text-black tracking-tightr lg:leading-none lg:text-8xl text-7xl">
                    Software Development <br /> Done Right
                </h1>

                <div className="flex flex-col gap-4 text-center">
                    <strong className="text-xl">Crafted with precision, delivered with speed</strong>
                    <p className="text-lg font-normal text-gray-800">
                        We're committed to turning your ideas into reality. Our streamlined process ensures that every project is executed with precision and delivered on time. From initial planning to final deployment, we're dedicated to providing exceptional results.
                    </p>
                </div>

                <div className="relative flex flex-col items-center w-full group">
                    <Button variant="solid" color="default" radius="lg" size="lg" className="absolute z-30 w-full text-white scale-150 bg-black lg:w-fit" as={Link} href="/get-in-touch">Get In Touch</Button>

                    <VelocityScroll text="DO IT, DO IT NOW!" className="text-gray-400 opacity-0 group-hover:opacity-100" />
                </div>
            </section>


        </div>
    )
}