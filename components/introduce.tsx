"use client"

import React from 'react';
import Image from 'next/image';
import Section from './section';
const Introduce: React.FC = () => {
	return (
		<Section className='bg-green-800 text-white' >
			<div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
				<div className="lg:w-1/2 mb-8 lg:mb-0">
					<Image src="/carabao-can.png" alt="Business opportunity" width={400} height={400} className="rounded-xl" />
				</div>
				<div className="lg:w-1/2 font-phudu">
					<h2 className="text-4xl font-bold mb-4">Bật nắp Carabao, trúng ngàn giải thưởng hấp dẫn!</h2>
					<p className="text-lg mb-4 text-green-600 font-semibold ">Cơ hội nhận ngay hàng loạt phần quà giá trị</p>
					<p className="text-lg">Chỉ cần thưởng thức Carabao, bật nắp hoặc sáng tạo nội dung, bạn có cơ hội trúng ngay những giải thưởng siêu hấp dẫn như Honda SH 125i, hàng triệu lon miễn phí, 10 vé đi du lịch Thái Lan 3 ngày 2 đêm hoàn toàn miễn phí!</p>
					<div className="flex mt-4">
						<div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
						<div className="w-3 h-3 bg-green-300 rounded-full mr-2"></div>
						<div className="w-3 h-3 bg-green-300 rounded-full"></div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Introduce;   