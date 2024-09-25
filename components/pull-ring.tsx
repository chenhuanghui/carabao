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
                        Bật nắp Carabao cơ hội trúng ngay <span className="text-red-500">SH 125i</span> và hàng loạt quà tặng giá trị khác khi bật nắp Carabao
                    </h1>
                    {/* <p className="md:text-lg text-base mb-8 font-pathwayExtreme">
                        <span className="text-green-400  ">Chỉ cần sáng tạo nội dung cùng Carabao </span> bạn sẽ có cơ hội trúng 5 cặp vé du lịch Thái Lan 3 ngày 2 đêm miễn phí! Đừng bỏ lỡ dịp khám phá xứ chùa Vàng và trải nghiệm văn hóa Thái Lan độc đáo!
                    </p> */}
                </div>
                <div className="lg:w-1/2 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 justify-self-center">
                    <Image src="/assets/steps/b1.png" alt="Image 1" width={300} height={200} className="rounded-lg" />
                </div>
            </div>
        </Section>

    )
}

export default PullRing
