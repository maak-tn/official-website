import PricingTab from "../../components/PricingCard";

export default function PricingPage() {
    return (
        <section className="w-full lg:max-w-[var(--max-content-width)] lg:mx-auto p-4 lg:p-0 flex flex-col gap-24">
            <div className="flex flex-col gap-4 mt-16">
                <h1 className="block text-6xl font-bold leading-tight tracking-tighter text-left text-black lg:leading-none lg:text-8xl">
                    How much will your project cost?
                </h1>

                <p className="text-lg font-normal text-left text-gray-800">Our pricing plans are designed to fit your business needs, no matter the size</p>
            </div>

            <div>

                <div className="grid grid-cols-1 gap-4 mx-auto lg:grid-cols-3 md:grid-cols-2">

                    <PricingTab
                        planName="Starter Projects"
                        price="10K - 15K"
                        planDescription="Perfect for small businesses and startups looking to establish their digital presence"
                        features={[
                            "Appointment Booking Systems",
                            "Business Websites with Admin Panel",
                            "Basic E-commerce Stores",
                            "Restaurant Management Systems",
                        ]} />

                    <PricingTab
                        popular={true}
                        planName="Professional Solutions"
                        price="20K - 50K"
                        planDescription="Ideal for growing businesses requiring comprehensive software solutions"
                        features={[
                            "Custom CRM Systems",
                            "Real Estate Management Platforms",
                            "Learning Management Systems",
                            "Healthcare Practice Management",
                        ]} />

                    <PricingTab
                        planName="Enterprise Grade"
                        price="50K+"
                        planDescription="Comprehensive solutions for established businesses with complex requirements"
                        features={[
                            "Enterprise Resource Planning (ERP)",
                            "Supply Chain Management Systems",
                            "Multi-branch Retail Management",
                            "Custom Financial Software",
                        ]} />
                </div>

            </div>
        </section>
    )
}

