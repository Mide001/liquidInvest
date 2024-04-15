import React, { useState, useEffect } from "react";

const CountDown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div className="flex items-center justify-center">
      <div className="p-4 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl border border-[#9945FF] rounded-md">
        <div className="text-3xl font-bold">
          <span className="text-gray-300">{timeLeft.days}</span>
          <span className="text-[#9945FF]">D</span>
          <span className="text-gray-300 ml-2">
            {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
          </span>
          <span className="text-[#9945FF]">H</span>
          <span className="text-gray-300 ml-2">
            {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
          </span>
          <span className="text-[#9945FF]">M</span>
          <span className="text-gray-300 ml-2">
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          </span>
          <span className="text-[#9945FF]">S</span>
        </div>
        <span className="text-gray-300 text-sm block text-center mt-2">
          until the end of the Presale
        </span>
      </div>
    </div>
  );
};

export default CountDown;
