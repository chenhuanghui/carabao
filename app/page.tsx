import React from 'react';
import Image from 'next/image';
import Hero from '@/components/hero';
import Header from '@/components/header';

const NewLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="w-full max-w-4xl mx-auto mt-20 lg:space-x-8 p-8 md:p-0">
        <Hero />
      </main>
    </div>
  );
};

export default NewLandingPage;
