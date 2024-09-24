"use client"
import Image from "next/image"
import Section from "./section"
export default function Footer() {
    return (
        <Section className="bg-black text-white">
            <div className="w-full flex flex-row gap-4 items-center justify-start bg-transparent">
                <div className="flex flex-col gap-0 w-[300px] items-center">
                    <Image
                        src="/logo-white.png" alt="Image 1"
                        className="w-[120px] h-auto"
                        width={120}
                        height={100}
                    />
                </div>
                <div className="flex flex-col gap-0 justify-between w-full text-left font-pathwayExtreme text-sm">
                    <p className="font-bold"> CÔNG TY TNHH Thai F&B </p>
                    <p className="">Mã số thuế: 0317544425</p>
                    <p className="">
                        Số 16/16 Tân Thới Nhất 8, Phường Tân Thới Nhất, Quận 12, Thành phố Hồ Chí Minh, Việt Nam
                    </p>
                    <p className=""> © 2024 Carabao</p>
                </div>
            </div>
        </Section>

    )
}