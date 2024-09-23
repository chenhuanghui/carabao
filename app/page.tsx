import React from 'react';
import Image from 'next/image';
import Hero from '@/components/hero';

const NewLandingPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-black text-white flex flex-col items-center">
			{/* Header */}
			<header className="w-full flex justify-between items-center p-4 bg-black">
				<div className="flex items-center space-x-2">
					{/* <Image src="/tiktok-logo.png" alt="TikTok Logo" width={32} height={32} /> */}
					<span className="text-xl font-bold">Carabao</span>
				</div>
				<div className="flex items-center space-x-4">
					{/* <span>English</span>
					<span>U</span> */}
					<button className="bg-pink-600 text-white px-4 py-2 rounded-full">Go to Business Center</button>
				</div>
			</header>

			{/* Main Content */}
			<main className="w-full max-w-4xl mx-auto mt-10 lg:space-x-8 p-8 md:p-0">
				<Hero />
			</main>
		</div>
	);
};

export default NewLandingPage;
