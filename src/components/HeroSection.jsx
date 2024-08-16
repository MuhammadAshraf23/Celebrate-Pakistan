import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-background h-screen flex flex-col justify-center items-center text-center text-white">
      <video
        className="absolute top-0 right-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        loop
      >
        <source src="/image/pakistan.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Celebrate Pakistan: A Land of Heritage, Unity, and Heroes
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Explore the rich culture, diverse regions, and the legacy of our great founders and heroes.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Pakistan" target="_blank"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Explore More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
