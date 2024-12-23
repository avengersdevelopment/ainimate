"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const NowLoading: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Increment progress every 100ms for 25 steps
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 25) {
          return prev + 1;
        } else {
          // Reset progress after completing the bar
          return 0;
        }
      });
    }, 100);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Create progress bar segments dynamically based on `progress` state
  const progressBars = Array.from({ length: progress }, (_, index) => (
    <div
      key={`progress-bar-${index}`} // Ensure each key is unique
      className="w-[1rem] h-full bg-[#FA8BFF]"
    />
  ));

  return (
    <div className="fixed w-full h-screen bg-[#141414] z-[99]">
      {/* Background Image */}
      <Image
        src={"/assets/home/loadingframe.png"}
        alt="Now Loading"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen p-8 object-fill"
        width={500}
        height={500}
      />
      {/* Glowing Effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FE35FE] size-[12rem] rounded-full blur-[8rem]"
      />
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Loading Text */}
        <div className="text-[54px] font-normal text-[#FA8BFF] uppercase mb-5 font-monumenExtended">
          Now Loading...
        </div>

        {/* Boxed Progress Bar */}
        <div className="w-[32rem] h-9 border border-[#FA8BFF] flex flex-nowrap gap-1 rounded-lg overflow-hidden p-1">
          {progressBars}
        </div>
      </div>
    </div>
  );
};

export default NowLoading;
