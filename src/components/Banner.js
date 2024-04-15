import React from "react";
import "../assets/styles/Banner.scss";
import Img from "../assets/Crypto_Photo_4-1.webp";
import TitleColor from "./TitleColor";

const Banner = () => {
  return (
    <>
      <section className="banner" id="home">
        <div className="container">
          <div className="banner-content">
            <TitleColor title={"Liquid Invest"} />
            <h1 className="banner-content-title">
              The Next Generation Of Crypto Investing
            </h1>

            <h1 className="banner-content-title moving1">
              <div className="stage">
                <div className="cubespinner">
                  <div className="face1">Real Opportunity</div>
                  <div className="face2">Elevate Your Portfolio</div>
                </div>
              </div>
            </h1>

            <button className="border border-[#9945FF] text-gray-200 px-4 py-2 rounded-md md:mt-10 mx-auto block mt-10 startInvest">
              Start Investing Now
            </button>

            <div className="mt-10">
              <img src={Img} alt="lion" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
