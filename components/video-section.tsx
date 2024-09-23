"use client"
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row items-center gap-8 bg-dark p-8 rounded-lg shadow-lg relative">
      <div className="lg:w-1/2 text-white bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-lg shadow-lg relative z-10">
        <h2 className="text-2xl font-bold">Choose one great offer for your customers</h2>
        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo leo, tincidunt ac lectus vel, tincidunt Lorem ipsum dolor sit</p>
        <button className="bg-transparent border border-white text-white p-2 rounded mt-4 hover:bg-white hover:text-black transition">Call to Action</button>
        <div className="absolute inset-0 bg-pattern opacity-20 z-0"></div>
      </div>
      <div className="lg:w-1/2 flex flex-col items-center">
        <video controls className="w-full rounded-lg shadow-lg">
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex gap-4 mt-4">
          <img src="path/to/your/image1.jpg" alt="Image 1" className="w-1/3 rounded-lg shadow-lg" />
          <img src="path/to/your/image2.jpg" alt="Image 2" className="w-1/3 rounded-lg shadow-lg" />
          <img src="path/to/your/image3.jpg" alt="Image 3" className="w-1/3 rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;