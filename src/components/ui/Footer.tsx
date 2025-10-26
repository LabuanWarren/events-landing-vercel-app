import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer className="flex flex-col justify-start items-center py-20 px-16 md:py-20 md:px-16 py-12 px-8 gap-20 md:gap-20 gap-12 bg-[#011b24]">
      <div className="flex flex-col justify-start items-center gap-20 md:gap-20 gap-12 max-w-[1280px] w-full">
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
              Contact
            </a>
            <a className="text-left align-top text-sm font-['DM_Sans'] leading-5 text-white no-underline cursor-pointer transition-colors duration-200 hover:text-[#0a7a94]">
              Blog
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
          <div className="h-0 w-full max-w-[1280px] border-t border-[#0a7a94]" />
          <div className="flex flex-row md:flex-row flex-col justify-between items-start md:items-start items-center w-full gap-4 md:gap-0">
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

