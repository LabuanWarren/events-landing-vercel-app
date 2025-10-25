import { CTAButton } from './CTAButton';

export const CTA = () => {
  return (
    <section className="flex flex-col justify-start items-center py-28 px-16 md:py-28 md:px-16 py-16 px-8 gap-20 md:gap-20 gap-12 bg-white">
      <div className="flex flex-col justify-start items-center gap-20 md:gap-20 gap-12 max-w-[1280px] w-full">
        <div className="flex flex-col justify-start items-center gap-8 bg-white">
          <div className="flex flex-col justify-start items-center gap-6 text-center">
            <h2 className="display-xs-semibold md:display-sm-semibold lg:display-lg-semibold text-left text-gray-cool-950">
              Bring your events to life
            </h2>
            <p className="text-center align-top text-lg-regular md:text-lg-regular m-0 max-w-[600px] text-gray-cool-700">
              Everything you need to create, manage, and elevate your events.
            </p>
          </div>
          <CTAButton label="Get Started" />
        </div>
      </div>
    </section>
  );
};

