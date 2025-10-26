import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer className="flex flex-col justify-start items-center gap-12 bg-brand-950 pt-[40px] md:pt[80px] lg:pt-[120px]">
      <div className="flex flex-col justify-start items-center gap-20 md:gap-20 gap-12 w-full">
        <div className="flex flex-col justify-start items-center gap-8">
          <div className="flex flex-row justify-start items-start">
            <div className="h-auto w-full flex items-center justify-center rounded">
              <img 
                src="/Logo/GradientLogo.svg" 
                alt="Typid Logo" 
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
          <nav className="flex flex-row md:flex-row flex-wrap justify-center items-start gap-8 md:gap-8 gap-6">
            <Link 
              to="/about"
              className="text-left align-top text-sm font-['DM_Sans'] leading-5 text-white no-underline cursor-pointer transition-colors duration-200 hover:text-[#0a7a94]"
            >
              About Us
            </Link>
            <a className="text-left align-top text-sm font-['DM_Sans'] leading-5 text-white no-underline cursor-pointer transition-colors duration-200 hover:text-[#0a7a94]">
              Contact Us
            </a>
            <a className="text-left align-top text-sm font-['DM_Sans'] leading-5 text-white no-underline cursor-pointer transition-colors duration-200 hover:text-[#0a7a94]">
              Blogs
            </a>
            <a className="text-left align-top text-sm font-['DM_Sans'] leading-5 text-white no-underline cursor-pointer transition-colors duration-200 hover:text-[#0a7a94]">
              Careers
            </a>
            <a className="text-left align-top text-sm font-['DM_Sans'] leading-5 text-white no-underline cursor-pointer transition-colors duration-200 hover:text-[#0a7a94]">
              Help
            </a>
          </nav>
        </div>
        <div className="flex flex-col justify-start items-center gap-8 w-full">
          <div className="h-0 w-full border-t border-brand-900" />
          <div className="flex flex-row md:flex-row flex-col justify-between items-start md:items-start items-center w-full gap-4 md:gap-0 px-4 md:px-8 lg:px-24 pb-8">
            <span className="text-left align-top text-sm font-['DM_Sans'] leading-5 text-white">
              © 2025 Typid Events by Night Latte.
            </span>
            <div className="flex flex-row justify-start items-start gap-6 md:gap-6 gap-4">
              <Link 
                to="/privacy"
                className="text-left align-top text-sm font-['DM_Sans'] leading-5 underline text-white cursor-pointer transition-colors duration-200 hover:text-[#0a7a94]"
              >
                Privacy policy
              </Link>
              <Link 
                to="/terms"
                className="text-left align-top text-sm font-['DM_Sans'] leading-5 underline text-white cursor-pointer transition-colors duration-200 hover:text-[#0a7a94]"
              >
                Terms of service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

