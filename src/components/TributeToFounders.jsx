// src/components/TributeToFounders.jsx
import React from "react";

const TributeToFounders = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Visionaries Who Shaped Our Nation
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Founder 1 */}
          <div className="mb-8 md:mb-0 flex-1">
            <img
              src="/image/quaid-e-azam.jpg"
              alt="Muhammad Ali Jinnah"
              className="w-full h-64 object-cover rounded-lg mb-4"
              style={{ aspectRatio: "16/9" }}
            />
            <h3 className="text-xl font-semibold">Muhammad Ali Jinnah</h3>
            <p className="text-gray-700">
              "With faith, discipline, and selfless devotion to duty, there is
              nothing worthwhile that you cannot achieve."
            </p>
          </div>

          {/* Founder 2 */}
          <div className="mb-8 md:mb-0 flex-1">
            <img
              src="image/iqbal.jpg"
              alt="Allama Iqbal"
              className="w-full h-64 object-cover rounded-lg mb-4"
              style={{ aspectRatio: "16/9" }}
            />
            <h3 className="text-xl font-semibold">Allama Iqbal</h3>
            <p className="text-gray-700">
              "Nations are born in the hearts of poets; they prosper and die in
              the hands of politicians."
            </p>
          </div>

          {/* Founder 3 */}
          <div className="mb-8 md:mb-0 flex-1">
            <img
              src="image/fatima.jpg"
              alt="Fatima Jinnah"
              className="w-full h-64 object-cover rounded-lg mb-4"
              style={{ aspectRatio: "16/9" }}
            />
            <h3 className="text-xl font-semibold">Fatima Jinnah</h3>
            <p className="text-gray-700">
              "There is a magic in every girl that needs to be recognized."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TributeToFounders;
