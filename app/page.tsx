import React from 'react';
import Header from '@/components/header';
import { HomeClient } from './_components/home-client';
const NewLandingPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-black text-white flex flex-col items-center">
			<Header />
			<main className="mt-20 flex flex-col space-y-8">
				<HomeClient />
			</main>
		</div>
	);
};

export default NewLandingPage;
