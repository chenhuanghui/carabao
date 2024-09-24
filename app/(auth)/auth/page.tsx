"use client"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import AccessButton from "@/components/ui/access-button"
import Section from "@/components/section"

export default function AuthPage() {
    return (
        <Section>
            <div className='flex flex-col gap-2 justify-center items-start w-2/3'>
                <div className=''>
                    <h1 className=' text-4xl font-bold'>ReelFlow</h1>
                    <p className=''>Discover new way to manage your videos</p>
                </div>
                <Separator />
                <div className='w-auto bg-blue-600 px-4 py-1 rounded-2xl'>
                    <AccessButton>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image
                                src="https://reelflow.cabinid.dev/cabin.svg"
                                width={30}
                                height={30}
                                alt='cabinid-logo'
                            />
                            <p className='p-0'>Access by CabinID</p>
                        </div>
                    </AccessButton>
                </div>
            </div>

        </Section>
    )
}