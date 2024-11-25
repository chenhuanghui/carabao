import React from 'react';
import Header from '@/components/header';
import { HomeClient } from './_components/home-client';
const NewLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <Header />
      <main className="flex flex-col space-y-8 w-full">
        <HomeClient />
      </main>
    </div>
  );
};

export default NewLandingPage;
