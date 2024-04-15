import React from "react";

const ProgressBar = ({ softCap, hardCap, currentAmount }) => {
  // Calculate the percentage of the current amount relative to the hard cap
  const percentage = (currentAmount / hardCap) * 100;

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-1/2">
        {/* Progress bar */}
        <div className="bg-gray-200 h-6 rounded-full overflow-hidden">
          <div
            className="bg-[#9945FF] h-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>{currentAmount} SOL (Raised)</span>
          <span>{hardCap} SOL (HardCap)</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
