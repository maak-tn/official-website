import { Button, Link } from "@nextui-org/react";
import BackgroundDots from "../../components/ui/Background";

export default function Home() {


    return (
        <div className="flex flex-col items-center justify-center px-4 h-4/5 lg:px-0">
            <BackgroundDots />
            <section className="dark max-w-[var(--max-content-width)] mx-auto flex flex-col gap-8">
                <h1 className="font-semibold leading-tight tracking-tight text-left text-black lg:leading-none lg:text-6xl text-7xl dark:text-white">
                    Plan. Develop. Ship.
                </h1>
                <h3>Crafted with precision, delivered with speed</h3>
                <p className="text-lg font-light text-left text-gray-300 max-w-[800px]">
                    We're committed to turning your ideas into reality. Our streamlined process ensures that every project is executed with precision and delivered on time. From initial planning to final deployment, we're dedicated to providing exceptional results.
                </p>

                <Button variant="solid" color="default" radius="lg" size="lg" className="w-full lg:w-fit" as={Link} href="/get-in-touch">Contact Us</Button>
            </section>
        </div>
    )
}