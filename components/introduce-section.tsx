import React from 'react';

const IntroduceSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center gap-16 bg-dark p-8 rounded-lg shadow-lg">
      <div className="text-center text-white bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-lg shadow-lg relative z-10">
        <h2 className="text-2xl font-bold">Reasons why people should buy from you</h2>
        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo leo, tincidunt ac lectus vel, tincidunt scelerisque sapien. Quisque commodo orci at odio aliquet pretium. Sed faucibus eget turpis tincidunt tincidunt. Maecenas vel lorem finibus.</p>
        <button className="bg-transparent border border-white text-white p-2 rounded mt-4 hover:bg-white hover:text-black transition">Call to Action</button>
        <div className="absolute inset-0 bg-pattern opacity-20 z-0"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="w-full lg:w-1/4 text-center text-white p-8 rounded-lg shadow-lg bg-gradient-to-r from-yellow-400 to-orange-500">
            <h3 className="text-4xl font-bold">{`0${i + 1}`}</h3>
            <h4 className="text-xl font-semibold mt-4">Here's your reasons</h4>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo leo, tincidunt ac lectus vel, tincidunt scelerisque sapien. Quisque commodo orci.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntroduceSection;
