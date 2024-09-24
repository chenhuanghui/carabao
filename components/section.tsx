import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
    children: ReactNode
    className?: string
}

export default function Section({ children, className }: SectionProps) {
    return (
        <section className={cn(
            "w-full pb-5 md:py-10 flex", 
            className ? className : ""
        )}>
            <div className='w-full md:max-w-4xl max-w-[100vw] mx-auto p-4 md:p-0'>
                {children}
            </div>
        </section>
    )
}
