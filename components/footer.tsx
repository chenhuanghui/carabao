"use client"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="w-full flex flex-col gap-4 items-center justify-end bg-gradient-to-t from-[#BBF517] via-[#BBF517] to-[transparent] p-8 text-[#36842F]">
            <img
                src="./logo-white.png" alt="Image 1"
                className="w-[180px] h-auto"
            />
            <div className="flex flex-col gap-0">
                <p className=" text-sm font-pathwayExtreme max-w-[280px] text-center">
                    CÔNG TY TNHH Thai F&B <br /> Mã số thuế: 0317544425 <br /> Số 16/16
                    Tân Thới Nhất 8, Phường Tân Thới Nhất, Quận 12, Thành phố Hồ Chí Minh,
                    Việt Nam
                </p>
                <p className=" text-2xl uppercase font-bold font-leagueGothic max-w-[280px] text-center">
                    © 2024 Carabao
                </p>
            </div>
        </div>
    )
}