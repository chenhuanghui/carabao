import React from 'react';
import Image from 'next/image';
import Hero from '@/components/hero';
import Header from '@/components/header';
import Introduce from '@/components/introduce';

const NewLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="mt-20 lg:space-x-8 flex flex-col space-y-8">
        <Hero />
        {/* Section 2: Opportunities */}
		<Introduce />
      </main>
    </div>
  );
};

export default NewLandingPage;
