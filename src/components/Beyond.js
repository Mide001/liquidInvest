import React from "react";
import FomoBanner from "../assets/FomoBanner.png";

const Beyond = () => {
  return (
    <div className="bg-[#171717]">
      <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white text-center mt-8">
        Beyond the Hype, Into the Horizon
      </h2>
      <div className="mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col-reverse lg:flex-row justify-center items-center mt-10 lg:mt-20">
        <div className="w-full lg:w-1/2 p-4">
          <video width="100%" height="auto" controls poster={FomoBanner}>
            <source
              src="https://player.vimeo.com/video/881057694"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full lg:w-1/2 p-4 text-white">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">Liquid Invest</h2>
          <p className="text-sm lg:text-base">
            Embark on a transformative journey with Liquid Invest, where the era
            of fleeting trends and unfulfilled promises in the crypto space
            takes a back seat. Step away from the rollercoaster ride of shiba,
            pepe, and moon coins, where the specter of FOMO looms large and too
            often culminates in the disappointment of rug pulls and dashed
            investor hopes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beyond;
