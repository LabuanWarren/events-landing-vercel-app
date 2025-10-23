import React from 'react';

interface FeatureCardProps {
  badge: string;
  title: string;
  features: string[];
  image: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ badge, title, features, image }) => {
  return (
    <div className="rounded-3xl border border-[#dcdfe9] flex flex-row md:flex-row flex-col justify-start items-center bg-white shadow-[0_12px_16px_-4px_rgba(26,77,164,0.08),0_4px_6px_-2px_rgba(3,31,81,0.03),0_2px_2px_-1px_rgba(0,34,93,0.04)] overflow-hidden max-w-[1280px] w-full">
      <div className="flex flex-col justify-start items-start px-[4.5rem] md:px-[4.5rem] p-8 gap-6 flex-1 min-w-0">
        <div className="flex flex-col justify-start items-start gap-8">
          <div className="flex flex-row justify-center items-center pr-[4.5rem] gap-6">
            <div className="text-left align-top text-xs font-['DM_Sans'] tracking-[4.8px] leading-[18px] text-black">
              {badge}
            </div>
            <div className="flex flex-row justify-start items-center gap-2.5">
              <div className="h-px w-[212px] md:w-[212px] w-[100px] bg-[#7d89af]" />
              <div className="h-3 w-3 border border-[#7d89af] rounded-full" />
            </div>
          </div>
          <div className="text-left align-top text-4xl md:text-4xl text-3xl font-['DM_Sans'] tracking-[-0.72px] leading-[44px] md:leading-[44px] leading-9 text-black font-bold">
            {title}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-row justify-start items-start gap-3">
              <div className="flex flex-row justify-start items-center p-1">
                <img src="/bullet-asterisk.svg" alt="Feature bullet" className="w-[22px] h-[22px]" />
              </div>
              <div className="text-left align-top text-base font-['DM_Sans'] leading-6 text-black">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex hidden flex-col justify-start items-start gap-3">
        {Array(22).fill(0).map((_, i) => (
          <div key={i} className="h-[17px] w-px bg-[#dcdfe9]" />
        ))}
      </div>
      <img 
        src={image} 
        alt={`${badge} feature`} 
        className="w-[696px] md:w-[696px] w-full h-auto max-h-[640px] md:max-h-[640px] max-h-[400px] object-contain block flex-[0_0_696px] md:flex-[0_0_696px] flex-[0_0_auto]"
      />
    </div>
  );
};

