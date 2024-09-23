"use client"
import React from 'react';
import { Button } from '../ui/button';

const VideoSection: React.FC = () => {
    return (
        <section className="w-full h-full grid grid-cols-1 bg-dark rounded-lg shadow-lg relative items-center md:p-8 p-4 gap-8">
            <div className="flex flex-col items-center order-1">
                <video controls className="w-full rounded-2xl shadow-lg">
                    <source src="https://hcm03.vstorage.vngcloud.vn/v1/AUTH_003ad868e39941579ae6ca95335a7486/reelflow/444956bf-c4d8-49f2-b370-d19b5f0d2bfe.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="flex flex-col justify-center items-center order-2">
                <div className=" flex flex-row text-start p-3 gap-2 rounded-xl justify-center align-middle drop-shadow-2xl border-2 border-[#2f843a] uppercase bg-white text-neutarl-700 transition hover:-translate-y-1 duration-200 text-sm shadow-[1px_1px_rgba(54,132,47),2px_2px_rgba(54,132,47),3px_3px_rgba(54,132,47),4px_4px_rgba(54,132,47),5px_5px_0px_0px_rgba(54,132,47)] text-[#36842F] hover:cursor-pointer">
                    <p className="text-xl font-phudu ">
                        5 cặp vé đi Thái Lan <br /> 3 ngày 2 đêm đang chờ bạn
                    </p>
                    <div className="w-1 h-auto border border-y-0 border-l-0 border-dashed border-[#36842F]"></div>
                    <p className="uppercase text-xl font-phudu font-bold">
                        THAM GIA <br /> <span className="text-xl">NGAY</span>
                    </p>
                </div>
            </div>

            <div className="h-full text-white rounded-lg relative z-10 order-2">
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
            </div>
        </section>
    );
};

export default VideoSection;