import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
    children: ReactNode
    className?: string
}

export default function Section({ children, className }: SectionProps) {
    return (
        <section className={cn(
            "md:max-w-svw w-full pb-5 md:py-10", 
            className ? className : ""
        )}>
            <div className='w-full md:max-w-4xl mx-auto p-8 md:p-0'>
                {children}
            </div>
        </section>
    )
}
