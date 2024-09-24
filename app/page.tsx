import React from 'react';
import Image from 'next/image';
import Hero from '@/components/hero';
import Header from '@/components/header';
import Introduce from '@/components/introduce';
import HowToJoin from '@/components/how-to-join';
import FAQ from '@/components/faq';

const NewLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="mt-20 flex flex-col space-y-8">
        <Hero />
        {/* Section 2: Opportunities */}
		<HowToJoin />
		<Introduce />
		<FAQ />
      </main>
    </div>
  );
};

export default NewLandingPage;
