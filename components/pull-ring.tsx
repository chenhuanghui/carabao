"use client"

import React from 'react';
import { Button } from './ui/button';
import Section from './section';
import Image from 'next/image';

interface PullRingProps {
    // onOpenSocialPostModal: () => void;
}

const PullRing: React.FC<PullRingProps> = ({ }: PullRingProps) => {
    return (
        <Section className='bg-green-800 text-white md:pt-40 md:py-20'>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 justify-center">
                <div className="lg:w-1/2 mb-8 lg:mb-0 text-left">
                    <h1 className="md:text-5xl text-4xl font-bold mb-4 font-phudu">
                        Bật nắp Carabao cơ hội trúng ngay <span className="text-red-500">60 xe SH 125i</span> và <span className="text-red-500">hàng triệu lon miễn phí</span>
                    </h1>
                    {/* <p className="md:text-lg text-base mb-8 font-pathwayExtreme">
                        <span className="text-green-400  ">Chỉ cần sáng tạo nội dung cùng Carabao </span> bạn sẽ có cơ hội trúng 5 cặp vé du lịch Thái Lan 3 ngày 2 đêm miễn phí! Đừng bỏ lỡ dịp khám phá xứ chùa Vàng và trải nghiệm văn hóa Thái Lan độc đáo!
                    </p> */}
                    <Button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-phudu animate-bounce"
                        onClick={() => window.location.href = '/exchange'}
                    >
                        Xem điểm đổi lon
                        <span className="ml-1"> 🔥 </span>
                    </Button>
                </div>
                <div className="lg:w-1/2 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 justify-self-center">
                    <Image 
                        src="/assets/kv.png" 
                        alt="Image 1" 
                        width={1920} 
                        height={1080} 
                        className="rounded-lg w-full h-auto object-cover max-w-full" 
                        priority
                    />
                </div>
            </div>
        </Section>

    )
}

export default PullRing
