"use client"

import React from 'react';
import { Button } from './ui/button';
import Section from './section';

const Hero: React.FC = () => {
    return (
        <Section className='bg-black text-white'>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 justify-center">
                <div className="lg:w-1/2 mb-8 lg:mb-0 text-left">
                    <h1 className="text-5xl font-bold mb-4 font-phudu">
                        Cơ hội nhận ngay 5 cặp vé du lịch thái lan <span className="text-green-600"> 3 ngày 2 đêm</span> hoàn toàn miễn phí
                    </h1>
                    <p className="text-lg mb-8 font-pathwayExtreme">
                        <span className="text-green-600">Chỉ cần sáng tạo nội dung cùng Carabao </span> bạn sẽ có cơ hội trúng 5 cặp vé du lịch Thái Lan 3 ngày 2 đêm miễn phí! Đừng bỏ lỡ dịp khám phá xứ chùa Vàng và trải nghiệm văn hóa Thái Lan độc đáo!
                    </p>
                    <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-phudu"> Tham gia ngay 🔥 </Button>
                </div>
                <div className="lg:w-1/2 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 justify-self-center">
                    {/* <Image src="/image1.jpg" alt="Image 1" width={300} height={200} className="rounded-lg" />
          <Image src="/image2.jpg" alt="Image 2" width={300} height={200} className="rounded-lg" />
          <Image src="/image3.jpg" alt="Image 3" width={300} height={200} className="rounded-lg" /> */}
                    <video controls className="w-full rounded-2xl shadow-lg">
                        <source src="https://hcm03.vstorage.vngcloud.vn/v1/AUTH_003ad868e39941579ae6ca95335a7486/reelflow/444956bf-c4d8-49f2-b370-d19b5f0d2bfe.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </Section>

    )
}

export default Hero
