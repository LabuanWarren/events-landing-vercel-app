import React from 'react';
import { CTAButton } from './CTAButton';

export const Hero = () => {
  return (
    <div className="flex flex-col justify-start items-center p-6 gap-20">
      <div className="rounded-3xl flex overflow-hidden flex-row md:flex-row flex-col justify-start items-center bg-[#f8f9fb]">
        <div className="flex flex-col justify-center items-start p-12 md:p-12 gap-8">
          <div className="flex max-w-[600px] flex-col justify-start items-start gap-6">
            <h1 className="text-left text-7xl md:text-7xl text-5xl font-medium font-['DM_Sans'] leading-[1.2] text-black">
              Run events that feel effortless
            </h1>
            <p className="text-left text-lg font-['DM_Sans'] leading-7 text-black max-w-[600px]">
              From setup to sales, Events by Typid gives you the power to create, manage, and customize every part of your event experience —  all in one dashboard.
            </p>
          </div>
          <div className="flex flex-row justify-start items-start gap-4">
            <CTAButton label="Sign up for Free" />
          </div>
        </div>
        <div className="flex relative h-[696px] w-[696px] md:h-[696px] md:w-[696px] h-[400px] w-full overflow-visible">
          <img 
            src="/Dashboard.webp" 
            alt="Dashboard overview" 
            className="absolute top-0 left-0 w-[723px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          />
          <img 
            src="/DashboardModal.webp" 
            alt="Modal overview" 
            className="absolute bottom-0 left-0 w-[297px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          />
        </div>
      </div>
    </div>
  );
};