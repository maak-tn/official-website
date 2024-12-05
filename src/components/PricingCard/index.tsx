import { Button, Link } from "@nextui-org/react"
import { PricingTabProps } from "../../common/types"

export default function PricingTab(props: PricingTabProps) {
    return (
        <div className="relative flex flex-col h-full gap-8 p-6 bg-white border shadow rounded-2xl border-slate-200 shadow-slate-950/5">

            <div className="flex flex-col gap-4">

                <h1 className="text-2xl font-normal uppercase text-slate-900">{props.planName}</h1>

                <span className="text-3xl font-bold text-slate-900">{props.price}</span>

                <p className="text-sm text-slate-500">{props.planDescription}</p>

                <Button variant="solid" color="default" radius="lg" size="lg" className="w-full text-white bg-black" as={Link} href="/get-in-touch">Explore</Button>
            </div>

            <div className="font-medium text-slate-900">Examples:</div>


            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 grow">
                {props.features.map((feature, index) => {
                    return (
                        <li key={index} className="flex items-center gap-2">
                            <span>👉</span>
                            <span>{feature}</span>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}