import React from 'react';

interface FeatureCardProps {
  badge: string;
  title: string;
  features: string[];
  image: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ badge, title, features, image }) => {
  return (
    <div className="rounded-3xl border border-gray-cool-200 flex flex-col md:flex-row justify-start items-center bg-white shadow-lg overflow-hidden w-full max-w-[95vw] md:max-w-[1280px]">
      <div className="flex flex-col justify-start items-start px-8 md:px-[4.5rem] p-6 md:p-8 gap-4 md:gap-6 flex-1">
        <div className="flex flex-col justify-start items-start gap-4 md:gap-8">
          <div className="flex flex-row justify-start items-center pr-8 md:pr-[4.5rem] gap-3 md:gap-6">
            <div className="text-left text-xs font-['DM_Sans'] tracking-[3px] md:tracking-[4.8px] leading-[18px] text-gray-cool-700">
              {badge}
            </div>
            <div className="flex flex-row justify-start items-center gap-1.5 md:gap-2.5">
              <div className="h-px w-[100px] md:w-[212px] bg-[#7d89af]" />
              <div className="h-3 w-3 border border-[#7d89af] rounded-full" />
            </div>
          </div>
          <div className="display-md-semibold text-gray-cool-950 ">
            {title}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 md:gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-row justify-start items-start gap-2 md:gap-3">
              <div className="flex flex-row justify-start items-center p-[2px]">
                <img src="/bullet-asterisk.svg" alt="Feature bullet" className="w-5 h-5 md:w-[22px] md:h-[22px]" />
              </div>
              <div className="text-md-regular text-gray-cool-700">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex hidden flex-col justify-start items-start gap-2 md:gap-3">
        {Array(22).fill(0).map((_, i) => (
          <div key={i} className="h-[13px] md:h-[17px] w-px bg-white" />
        ))}
      </div>
      <img 
        src={image} 
        alt={`${badge} feature`} 
        className="w-full md:w-[696px] h-auto max-h-[300px] md:max-h-[640px] object-contain block flex-[0_0_auto] md:flex-[0_0_696px]"
      />
    </div>
  );
};

