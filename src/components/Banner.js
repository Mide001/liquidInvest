import React from "react";
import BgImage from "../assets/bg1.webp";
import "../assets/styles/Banner.css";
import Img from "../assets/Crypto_Photo_4-1.webp";
import FomoBanner from "../assets/FomoBanner.png";


const Banner = () => {
  return (
    <>
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img src={BgImage} alt="Background" fill />
      </div>
      <div className="container mx-auto absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h4 className="title">Liquid Invest</h4>
          <h1 className="text-4xl font-bold mb-4 bigHeader">
            The Next Generation Of Crypto Investing
          </h1>
          <div className="stage">
            <div className="cubespinner">
              <div className="face1">Real Opportunity</div>
              <div className="face2">Elevate Your Portfolio</div>
            </div>
          </div>

          <button className="border border-[#78dd8d] px-4 py-2 rounded-md mt-10">
            Start Investing Now
          </button>
          <div className="banner-content-img mt-8">
            <img
              src={Img}
              alt="lion"
              className="mx-auto w-40 md:w-64 lg:w-80 xl:w-96" 
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#171717] absolute">
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
    </>
  );
};

export default Banner;
