import React from 'react';

interface CTAButtonProps {
  label: string;
  href?: string;
  icon?: string | React.ReactNode;
  hideIcon?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  href = '#',
  icon = '/arrow-right.svg',
  hideIcon = false,
}) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="rounded-xl flex flex-row justify-between items-center px-5 py-3 bg-brand-gradient text-black font-['DM_Sans'] text-base font-semibold no-underline transition-all duration-250 shadow-[0_6px_20px_rgba(28,221,244,0.3)] hover:translate-y-[-3px] hover:shadow-[0_10px_30px_rgba(28,221,244,0.45)] active:translate-y-0 active:shadow-[0_4px_15px_rgba(28,221,244,0.25)]"
    >
      <div className="flex flex-row justify-start items-end p-2">
        <span className="text-left align-middle text-base font-['DM_Sans'] leading-6 text-black font-semibold">
          {label}
        </span>
      </div>

      {!hideIcon && (
        <div className="flex justify-end items-center gap-2.5">
          {typeof icon === 'string' ? (
            <img src={icon} alt="Icon" className="h-6 w-6" />
          ) : (
            icon
          )}
        </div>
      )}
    </a>
  );
};

export const CTAButtonSmall: React.FC<CTAButtonProps> = ({
  label,
  href = '#',
  icon = '/arrow-right.svg',
  hideIcon = false,
}) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="h-[46px] rounded-xl flex flex-row justify-between items-center px-4 bg-brand-gradient text-black font-['DM_Sans'] text-base font-semibold no-underline transition-all duration-250 shadow-[0_6px_20px_rgba(28,221,244,0.3)] hover:translate-y-[-3px] hover:shadow-[0_10px_30px_rgba(28,221,244,0.45)] active:translate-y-0 active:shadow-[0_4px_15px_rgba(28,221,244,0.25)]"
    >
      <div className="flex flex-row justify-start items-end py-1">
        <span className="text-left align-middle text-base font-['DM_Sans'] leading-6 text-black font-semibold">
          {label}
        </span>
      </div>

      {!hideIcon && (
        <div className="flex justify-end items-center gap-2.5">
          {typeof icon === 'string' ? (
            <img src={icon} alt="Icon" className="h-5 w-5" />
          ) : (
            icon
          )}
        </div>
      )}
    </a>
  );
};

