import React from 'react';
import { CTAButtonSmall } from './CTAButton';

export const Navbar = () => {
  return (
    <header className="flex flex-col justify-center items-center sticky top-0 w-full z-[1000] bg-white px-4 py-3 rounded-bl-[1.25rem] rounded-br-[1.25rem] shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      <nav className="flex flex-row justify-between items-center w-full max-w-[1440px] md:flex-row flex-col gap-4 md:gap-0">
        <div className="flex items-center">
          <div className="flex items-center">
            <img src="/typid-logo.svg" alt="Typid Logo" className="h-7 w-auto" />
          </div>
        </div>
        
        <div className="flex flex-row items-center gap-8 w-full md:w-auto justify-center">
          <a className="flex flex-row items-center gap-1 cursor-pointer transition-colors duration-200 hover:text-[#0a7a94]">
            <span className="text-base font-['DM_Sans'] leading-6 text-black">Events</span>
          </a>
          <a className="flex flex-row items-center gap-1 cursor-pointer transition-colors duration-200 hover:text-[#0a7a94]">
            <span className="text-base font-['DM_Sans'] leading-6 text-black">Pricing</span>
          </a>
          <a className="flex flex-row items-center gap-1 cursor-pointer transition-colors duration-200 hover:text-[#0a7a94]">
            <span className="text-base font-['DM_Sans'] leading-6 text-black">Products</span>
            <div className="flex items-center justify-center ml-1">
              <img src="/chevron-down.svg" alt="Dropdown" className="h-4 w-4" />
            </div>
          </a>
        </div>
        
        <div className="flex flex-row items-center gap-3 w-full md:w-auto justify-center">
          <button className="rounded-lg px-5 py-2.5 bg-white border border-gray-200 text-base font-['DM_Sans'] font-medium text-black cursor-pointer transition-all duration-200 hover:bg-[#f8f9fb]">
            Login
          </button>
          <CTAButtonSmall label="Sign up" hideIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

