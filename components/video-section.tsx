"use client"
import React from 'react';
import { Button } from './ui/button';

const VideoSection: React.FC = () => {
    return (
        <section className="w-full h-full grid grid-cols-1 bg-dark rounded-lg shadow-lg relative items-center p-8 gap-8">
            <div className="flex flex-col items-center order-1">
                <video controls className="w-full rounded-2xl shadow-lg">
                    <source src="https://hcm03.vstorage.vngcloud.vn/v1/AUTH_003ad868e39941579ae6ca95335a7486/reelflow/444956bf-c4d8-49f2-b370-d19b5f0d2bfe.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>                
            </div>
            <div className="h-full text-white rounded-lg relative z-10 order-2 lg:order-1 ">
                <h2 className="text-2xl font-bold">Tham gia ngay để nhận quà từ Carabao!</h2>
                <p className="mt-4">
                    Bật nắp Carabao, nhập mã và cơ hội nhận ngay hàng ngàn phần quà giá trị. Đừng bỏ lỡ cơ hội nhận quà siêu hấp dẫn như điện thoại, tai nghe, và voucher mua sắm!
                </p>
                <Button variant="outline" className="mt-4">Khám phá ngay</Button>
                
                <div className="grid grid-cols-3 gap-4 mt-4 w-full">
                    <img src="./image.jpg" alt="Image 1" className="rounded-lg shadow-lg" />
                    <img src="./image.jpg" alt="Image 2" className="rounded-lg shadow-lg" />
                    <img src="./image.jpg" alt="Image 3" className="rounded-lg shadow-lg" />
                </div>
                {/* <div className="absolute inset-0 flex justify-center items-center">
                    <div className="relative w-full h-full">
                        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-green-400 opacity-20 rounded-full"></div>
                        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-green-400 opacity-60 rounded-full"></div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default VideoSection;