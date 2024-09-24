"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import Section from "./section"

const steps = [
    {
        title: "Bước 1. Bùng nổ sáng tạo cùng Carabao",
        description: "Tạo ngay một video hoặc hình ảnh độc đáo cùng Carabao để thể hiện cá tính của bạn!",
        image: "/assets/steps/1.svg"
    },
    {
        title: "Bước 2. Chia sẻ để lan tỏa niềm vui",
        description: "Đăng tải lên TikTok hoặc Facebook cá nhân và đừng quên thêm hashtag #CarabaoVietNam #DiThaiLanKhongKho để có cơ hội trúng thưởng.",
        image: "/assets/steps/2.svg"
    },
    {
        title: "Bước 3. Đăng ký để không bỏ lỡ cơ hội",
        description: "Nhanh tay tạo tài khoản trên carabao.vn để bước gần hơn đến giải thưởng cực chất!",
        image: "/assets/steps/3.svg"
    },
    {
        title: "Bước 4. Gửi bài dự thi và chờ đợi may mắn",
        description: "Dán link bài đăng của bạn vào bộ sưu tập trên carabao.vn và chờ đón tin vui! Tham gia càng nhiều, nội dung càng chất, thì xác suất trúng thưởng của bạn sẽ càng cao!",
        image: "/assets/steps/4.svg"
    }
]

export default function HowToJoin() {
    const [hoveredItem, setHoveredItem] = useState<number | null>(0)    

    useEffect(() => {
        const interval = setInterval(() => {
            setHoveredItem(prev => (prev === null || prev >= steps.length - 1 ? 0 : prev + 1))
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <Section className="bg-green-100 text-black md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 justify-center">
                <div className="font-phudu">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Cách thức tham gia</h2>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 justify-center">
                        <div className="font-phudu">
                            <ol className="list-none p-0 flex flex-col gap-3">
                                {steps.map((step, index) => (
                                    <li
                                        key={index}
                                        className={cn("p-3 rounded-lg hover:cursor-pointer border-t-2 border-t-green-500", hoveredItem === index ? "opacity-100" : " opacity-50")}
                                        onMouseEnter={() => setHoveredItem(index)}
                                        onMouseLeave={() => setHoveredItem(index)}
                                    >
                                        <h3 className={cn("text-xl text-green-500 font-semibold", hoveredItem === index ? " opacity-100" : " opacity-50")}>{step.title}</h3>
                                        <p className={cn(" text-foreground", hoveredItem === index ? " opacity-100" : " opacity-50")}>{step.description}</p>
                                    </li>
                                ))}
                            </ol>
                            <Button className="mt-5 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Get started</Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#e0f290] p-6 rounded-lg">
                    <div className="relative h-[300px] w-full flex justify-center">
                        {steps.map((step, index) => (
                            <div className="absolute top-0 left-0 w-11/12 rounded-xl flex justify-center">
                                <Image
                                    key={index}
                                    src={step.image}
                                    alt="Business opportunity"
                                    width={600}
                                    height={600}
                                    className={`transition-opacity duration-300 ${hoveredItem === index ? 'opacity-100' : 'opacity-0'}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}