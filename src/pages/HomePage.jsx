import React from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { CardRotation } from "../components/ui/card-rotation";

const HomePage = () => {
  return (
    <>
      <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <BackgroundBeamsWithCollision className="absolute top-0 left-0 w-full h-full z-0" />
        <div className="relative z-10 max-w-2xl mx-auto p-4 flex flex-col items-center justify-center">
          <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Welcome to My Site
          </h1>
          <TextGenerateEffect words="This is a cool website built with Aceternity UI." className="text-center text-sm md:text-lg text-neutral-400 mt-4" />
        </div>
      </div>

      <div className="h-screen w-full bg-neutral-900 flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold text-white mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardRotation className="w-64 h-40 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-center justify-center h-full text-white text-xl font-bold">
              Service One
            </div>
            <div className="flex items-center justify-center h-full text-white text-lg p-4">
              Detailed description for service one.
            </div>
          </CardRotation>
          <CardRotation className="w-64 h-40 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-center justify-center h-full text-white text-xl font-bold">
              Service Two
            </div>
            <div className="flex items-center justify-center h-full text-white text-lg p-4">
              Detailed description for service two.
            </div>
          </CardRotation>
          <CardRotation className="w-64 h-40 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-center justify-center h-full text-white text-xl font-bold">
              Service Three
            </div>
            <div className="flex items-center justify-center h-full text-white text-lg p-4">
              Detailed description for service three.
            </div>
          </CardRotation>
        </div>
      </div>
    </>
  );
};

export default HomePage;