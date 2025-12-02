import React from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
// Import the new card components
import { CardContainer, CardBody, CardItem } from "../components/ui/3dCard"; // **Adjust the path accordingly**

// You might still have CardRotation, but we're replacing its usage below.
// import { CardRotation } from "../components/ui/card-rotation"; 

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

      {/* **Replaced the CardRotation section with CardContainer, CardBody, and CardItem** */}
      <div className="h-screen w-full bg-neutral-950 flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold text-white mb-12">Our Services</h2>
        {/* Added mx-auto to center the grid itself and increased the gap/padding for better spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 w-full max-w-7xl px-4">
          
          {/* Card 1 */}
          {/* Centered the container within the grid cell */}
          <CardContainer className="inter-var flex justify-center w-full"> 
            {/* Set width to full relative to the container, with a max-width for better control */}
            <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full md:max-w-md h-auto rounded-xl p-6 border ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
              >
                Service One
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Detailed description for service one.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="w-full h-20 bg-gray-700 rounded-lg flex items-center justify-center text-xs text-neutral-400">
                  Click for More
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Card 2 */}
          <CardContainer className="inter-var flex justify-center w-full">
            <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full md:max-w-md h-auto rounded-xl p-6 border ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
              >
                Service Two
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Detailed description for service two.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="w-full h-20 bg-gray-700 rounded-lg flex items-center justify-center text-xs text-neutral-400">
                  Click for More
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Card 3 */}
          <CardContainer className="inter-var flex justify-center w-full">
            <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full md:max-w-md h-auto rounded-xl p-6 border ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
              >
                Service Three
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Detailed description for service three.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="w-full h-20 bg-gray-700 rounded-lg flex items-center justify-center text-xs text-neutral-400">
                  Click for More
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </>
  );
};

export default HomePage;