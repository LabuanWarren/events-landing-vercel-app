import React from 'react';
import { CTAButton } from './CTAButton';

export const CTA = () => {
  return (
    <section className="flex flex-col justify-start items-center py-28 px-16 md:py-28 md:px-16 py-16 px-8 gap-20 md:gap-20 gap-12 bg-white">
      <div className="flex flex-col justify-start items-center gap-20 md:gap-20 gap-12 max-w-[1280px] w-full">
        <div className="flex flex-col justify-start items-center gap-8 bg-white">
          <div className="flex flex-col justify-start items-center gap-6 text-center">
            <h2 className="text-center align-top text-5xl md:text-5xl text-4xl font-['DM_Sans'] font-bold leading-[1.2] md:leading-[60%] text-black m-0">
              Bring your events to life
            </h2>
            <p className="text-center align-top text-lg md:text-lg text-base font-['Roboto'] leading-[150%] text-black m-0 max-w-[600px]">
              Everything you need to create, manage, and elevate your events.
            </p>
          </div>
          <CTAButton label="Get Started" />
        </div>
      </div>
    </section>
  );
};

