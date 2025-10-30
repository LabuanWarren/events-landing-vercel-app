import { CTAButton } from './CTAButton';

export const WhyTypid = () => {
  return (
    <section className="px-6 py-10 md:px-10 md:py-16 lg:px-20 lg:py-24 bg-white">
      <div className="flex flex-col md:flex-row justify-start items-start gap-0 md:gap-10 max-w-[1280px] mx-auto">
        <h2 className="display-sm-semibold md:display-md-semibold lg:display-lg-semibold text-gray-cool-950 mb-0 md:mb-0 lg:mb-0 mr-[120px] mr-0 md:max-w-[400px] lg:max-w-[600px]">
          Why launch your events with Typid?
        </h2>
        <div className="flex flex-col justify-start items-start gap-7 flex-1 mt-6 mb-[100px] md:mt-0 w-full">
          <p className="text-md-regular text-gray-cool-700 m-0">
            The smarter way to host, sell, and manage events — built for organizers 
            who want clarity, control, and creative freedom. Typid Events brings your 
            entire workflow together: from event creation and Tycket sales to analytics, 
            vouchers, and booth design — everything runs seamlessly in one connected system.
          </p>
          <CTAButton label="Launch Your Event Now" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 flex items-center justify-center mb-2">
            <img src="/connected-icon.svg" alt="Connected" className="w-full h-full object-contain" />
          </div>
          <h3 className="font-['DM_Sans'] text-xl md:text-2xl font-bold text-black m-0">
            Everything Connected
          </h3>
          <p className="font-['DM_Sans'] text-base leading-[150%] text-gray-cool-700 m-0">
            No more juggling between tools. Events, Tyckets, discounts, and analytics — all work seamlessly within one platform.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 flex items-center justify-center mb-2">
            <img src="/organizers-icon.svg" alt="Organizers" className="w-full h-full object-contain" />
          </div>
          <h3 className="font-['DM_Sans'] text-xl md:text-2xl font-bold text-black m-0">
            Designed for Organizers
          </h3>
          <p className="font-['DM_Sans'] text-base leading-[150%] text-gray-cool-700 m-0">
            Built for creators who value clarity and control. Every feature is made to simplify your workflow, not complicate it.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 flex items-center justify-center mb-2">
            <img src="/insights-icon.svg" alt="Insights" className="w-full h-full object-contain" />
          </div>
          <h3 className="font-['DM_Sans'] text-xl md:text-2xl font-bold text-black m-0">
            Real-Time Insights
          </h3>
          <p className="font-['DM_Sans'] text-base leading-[150%] text-gray-cool-700 m-0">
            Track every sale, attendee, and voucher redemption as it happens. Make decisions backed by live data.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 flex items-center justify-center mb-2">
            <img src="/Tycket-booth.svg" alt="Booth" className="w-full h-full object-contain" />
          </div>
          <h3 className="font-['DM_Sans'] text-xl md:text-2xl font-bold text-black m-0">
            Customizable Tycket Booth
          </h3>
          <p className="font-['DM_Sans'] text-base leading-[150%] text-gray-cool-700 m-0">
            Your brand deserves to stand out. Design your Tycket Booth the way you want — from colors to layout.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 flex items-center justify-center mb-2">
            <img src="/Sheild.svg" alt="Secure" className="w-full h-full object-contain" />
          </div>
          <h3 className="font-['DM_Sans'] text-xl md:text-2xl font-bold text-black m-0">
            Secure Payments with Typid Pay
          </h3>
          <p className="font-['DM_Sans'] text-base leading-[150%] text-gray-cool-700 m-0">
            Every transaction runs through Typid Pay, ensuring fast, safe, and transparent payment processing.
          </p>
        </div>
      </div>
    </section>
  );
};

