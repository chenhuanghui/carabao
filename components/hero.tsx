"use client"

import React from 'react';
import { Button } from './ui/button';
import Section from './section';

interface HeroProps {
    onOpenSocialPostModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenSocialPostModal }: HeroProps) => {
    return (
        <Section className='bg-green-300 text-back md:pt-40 md:py-20 py-20'>
            <div className="flex flex-col lg:flex-col items-center lg:items-start gap-8 justify-center">
                <div className="mb-8 lg:mb-0 text-left order-2">
                    <h1 className="md:text-5xl text-3xl font-bold mb-4 font-phudu text-green-800">
                        Cơ hội nhận ngay 5 cặp vé du lịch thái lan <span className="text-red-500"> 3 ngày 2 đêm</span> hoàn toàn miễn phí
                    </h1>
                    <p className="md:text-lg text-base mb-8 font-pathwayExtreme text-black">
                        Chỉ cần sáng tạo nội dung cùng <span className="text-red-600 font-bold font-bungeeShade">khoen lon Carabao miễn phí</span>, bạn sẽ có cơ hội ghi tên mình vào danh sách những người may mắn có thể trúng 1 trong 10 cơ hội đi Thái Lan miễn phí 3 ngày 2 đêm! Đừng bỏ lỡ cơ hội khám phá xứ chùa Vàng và trải nghiệm văn hóa Thái Lan độc đáo!
                    </p>
                    <Button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-phudu"
                        onClick={onOpenSocialPostModal}
                    >
                        Tham gia ngay
                        <span className=" animate-bounce ml-1"> 🔥 </span>
                    </Button>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 justify-self-center order-1">
                    {/* <Image src="/image1.jpg" alt="Image 1" width={300} height={200} className="rounded-lg" />
          <Image src="/image2.jpg" alt="Image 2" width={300} height={200} className="rounded-lg" />
          <Image src="/image3.jpg" alt="Image 3" width={300} height={200} className="rounded-lg" /> */}
                    <video controls className="w-full rounded-2xl shadow-lg border-2 border-green-500" preload="metadata">
                        <source
                            src="https://hcm03.vstorage.vngcloud.vn/v1/AUTH_003ad868e39941579ae6ca95335a7486/reelflow/444956bf-c4d8-49f2-b370-d19b5f0d2bfe.mp4#t=0.001"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </Section>

    )
}

export default Hero
