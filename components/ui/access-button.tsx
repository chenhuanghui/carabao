"use client"

import { cn } from "@/lib/utils"
import { SignInButton} from '@cabin-id/nextjs';
import { User } from "lucide-react"
import Link from "next/link"
import React from "react"
import Image from "next/image"

const AccessButton = ({
    className,
    title,
    children
}: {
    className?: string;
    title?: string;
    children?: React.ReactNode
}) => {
    // const { signInUrl } = useCabinID()

    // if (children) return (
    //     <div className={cn("", className)}>
    //         <Link href={signInUrl} className="flex flex-row items-center justify-center gap-1 text-white text-sm font-bold">
    //             {children}
    //         </Link>
            
    //     </div>
    // )

    return (
        <div className={cn("", className)}>
            {/* <Link href={signInUrl} className="flex flex-row items-center justify-center gap-1 text-white text-sm font-bold">
                <div className='w-auto bg-blue-600 px-4 py-1 rounded-2xl'>
                    <div className='flex flex-row gap-1 items-center'>
                        <Image
                            src="https://reelflow.cabinid.dev/cabin.svg"
                            width={30}
                            height={30}
                            alt='cabinid-logo'
                        />
                        <p className='p-0 text-xs md:text-xs'>{title ? title : "Access by CabinID"}</p>
                    </div>
                </div>
            </Link> */}
            <SignInButton />
            
        </div>
    )
}
export default AccessButton