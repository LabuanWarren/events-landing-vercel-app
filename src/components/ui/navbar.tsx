import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CTAButtonSmall } from './CTAButton';
export const Navbar = () => {
  const [isInFeaturesSection, setIsInFeaturesSection] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the Features section by looking for the section with gradient background
      const featuresSection = document.querySelector('section.bg-gradient-to-b');
      if (!featuresSection) return;

      const rect = featuresSection.getBoundingClientRect();
      // Check if we've scrolled to the features section (within viewport)
      const threshold = window.innerHeight * 0.1; // Trigger when 10% into viewport
      setIsInFeaturesSection(rect.top <= threshold && rect.bottom >= 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed p-4 top-0 left-0 flex w-full z-[1000] px-6 py-6">
        <header className={`flex-col justify-between items-center w-full pl-4 pr-2 py-2 rounded-[1.25rem] shadow-[0_2px_10px_rgba(0,0,0,0.05)] backdrop-blur-lg transition-all duration-300 ${
          isInFeaturesSection ? 'bg-brand-950/20' : 'bg-white/40'
        }`}>
          <nav className="flex flex-row justify-between items-center w-[full]">
            {/* Logo */}
            <Link to="/" className="flex items-center w-[182px] cursor-pointer">
              <img 
                src={isInFeaturesSection ? "/typid-logo-white.svg" : "/typid-logo.svg"} 
                alt="Typid Logo" 
                className="h-7 w-auto transition-opacity duration-300" 
              />
            </Link>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex flex-row items-center gap-8">
              <a className={`flex flex-row items-center gap-1 cursor-pointer transition-colors duration-300 ${
                isInFeaturesSection ? 'hover:text-[#00C1DB]' : 'hover:text-[#0a7a94]'
              }`}>
                <span className={`text-base font-['DM_Sans'] leading-6 transition-colors duration-300 ${
                  isInFeaturesSection ? 'text-white' : 'text-black'
                }`}>Events</span>
              </a>
              <a className={`flex flex-row items-center gap-1 cursor-pointer transition-colors duration-300 ${
                isInFeaturesSection ? 'hover:text-[#00C1DB]' : 'hover:text-[#0a7a94]'
              }`}>
                <span className={`text-base font-['DM_Sans'] leading-6 transition-colors duration-300 ${
                  isInFeaturesSection ? 'text-white' : 'text-black'
                }`}>Pricing</span>
              </a>
              <a className={`flex flex-row items-center gap-1 cursor-pointer transition-colors duration-300 ${
                isInFeaturesSection ? 'hover:text-[#00C1DB]' : 'hover:text-[#0a7a94]'
              }`}>
                <span className={`text-base font-['DM_Sans'] leading-6 transition-colors duration-300 ${
                  isInFeaturesSection ? 'text-white' : 'text-black'
                }`}>Products</span>
                <div className="flex items-center justify-center ml-1">
                  <img 
                    src="/chevron-down.svg" 
                    alt="Dropdown" 
                    className={`h-4 w-4 transition-all duration-300 ${
                      isInFeaturesSection ? 'filter brightness-0 invert' : ''
                    }`} 
                  />
                </div>
              </a>
            </div>
            
            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex flex-row items-center gap-3">
              <button className={`rounded-lg px-5 py-2.5 border text-base font-['DM_Sans'] font-medium cursor-pointer transition-all duration-300 ${
                isInFeaturesSection 
                  ? 'bg-transparent border-white text-white hover:bg-white/10' 
                  : 'bg-white border-gray-cool-200 text-black hover:bg-[#f8f9fb]'
              }`}>
                Login
              </button>
              <CTAButtonSmall label="Sign up" hideIcon />
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button 
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              } ${isInFeaturesSection ? 'bg-white' : 'bg-black'}`} />
              <span className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              } ${isInFeaturesSection ? 'bg-white' : 'bg-black'}`} />
              <span className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              } ${isInFeaturesSection ? 'bg-white' : 'bg-black'}`} />
            </button>
          </nav>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[999] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-out */}
      <div className={`fixed top-0 right-0 h-full w-[280px] z-[1001] lg:hidden transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } ${isInFeaturesSection ? 'bg-brand-950' : 'bg-white'} shadow-2xl`}>
        <div className="flex flex-col h-full p-8 pt-24">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-6 mb-8">
            <a className={`text-lg font-['DM_Sans'] cursor-pointer transition-colors duration-200 ${
              isInFeaturesSection ? 'text-white hover:text-brand-600' : 'text-black hover:text-brand-600'
            }`}>
              Events
            </a>
            <a className={`text-lg font-['DM_Sans'] cursor-pointer transition-colors duration-200 ${
              isInFeaturesSection ? 'text-white hover:text-brand-600' : 'text-black hover:text-brand-600'
            }`}>
              Pricing
            </a>
            <a className={`text-lg font-['DM_Sans'] cursor-pointer transition-colors duration-200 ${
              isInFeaturesSection ? 'text-white hover:text-brand-600' : 'text-black hover:text-brand-600'
            }`}>
              Products
            </a>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-3 mt-auto">
            <button className={`rounded-lg px-5 py-3 border text-base font-['DM_Sans'] font-medium cursor-pointer transition-all duration-200 ${
              isInFeaturesSection 
                ? 'bg-transparent border-white text-white hover:bg-white/10' 
                : 'bg-transparent border-black text-black hover:bg-[#f8f9fb]'
            }`}>
              Login
            </button>
            <CTAButtonSmall label="Sign up" hideIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

