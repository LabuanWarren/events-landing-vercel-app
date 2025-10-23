import React, { useEffect, useRef, useState } from 'react';
import { FeatureCard } from './FeatureCard';

export const Features = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardOffsetsRef = useRef<number[]>([]);
  const tickingRef = useRef(false);
  
  const featureCards = [
    {
      badge: 'DASHBOARD',
      title: 'See everything that matters at a glance.',
      features: [
        'Attendee insights and analytics',
        'Track ticket sales and entry in real time',
        'Visual performance dashboard'
      ],
      image: '/FeatureDashboard.webp'
    },
    {
      badge: 'EVENTS',
      title: 'Create, manage, and publish events effortlessly.',
      features: [
        'Create events with custom details',
        'Add participant limits and auto-close registration',
        'Manage event listings and visibility'
      ],
      image: '/FeatureEvents.webp'
    },
    {
      badge: 'TYCKETS',
      title: 'Sell your event Tyckets with precision.',
      features: [
        'Multiple Tycket tiers and pricing',
        'QR-code ready for check-ins',
        'Real-time redemption tracking'
      ],
      image: '/FeatureTyckets.webp'
    },
    {
      badge: 'VOUCHER',
      title: 'Add instant value to your events.',
      features: [
        'Fixed or percentage-based vouchers',
        'Expiration and usage tracking'
      ],
      image: '/FeatureVoucher.webp'
    },
    {
      badge: 'AFFILIATE CODE',
      title: 'Turn your supporters into sellers.',
      features: [
        'Unique code per affiliate',
        'Adjustable commission rates',
        'Transparent sales dashboard'
      ],
      image: '/FeatureAffiliateCodes.webp'
    }
  ];

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      cardOffsetsRef.current = cardRefs.current.map(el => (el ? el.offsetTop : 0));
    };
    requestAnimationFrame(measure);

    const stickyOffset = 100;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        tickingRef.current = false;
        if (!containerRef.current) return;

        const containerStart = containerRef.current.getBoundingClientRect().top + window.scrollY;
        const relativeScroll = window.scrollY + stickyOffset - containerStart;

        const offsets = cardOffsetsRef.current;
        let found = -1;
        for (let i = 0; i < offsets.length; i++) {
          if (relativeScroll >= offsets[i]) found = i; else break;
        }
        if (found !== activeCardIndex) setActiveCardIndex(found);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeCardIndex]);

  return (
    <section className="rounded-[2rem] md:rounded-[2rem] rounded-[2rem] flex flex-col justify-start items-center py-28 px-16 md:py-28 md:px-16 py-16 px-8 gap-20 bg-gradient-to-b from-[#011C25] to-[#00C1DB]">
      <div ref={containerRef} className="flex flex-col justify-start items-center max-w-[1200px] w-full">
        <div className="flex flex-col justify-start items-center gap-4 mb-16">
          <div className="flex flex-row justify-start items-center gap-2">
            <div className="h-3 w-3 bg-[#00C1DB] rounded-full" />
            <span className="text-left align-top text-sm font-['DM_Sans'] leading-5 text-white font-medium">
              Features
            </span>
          </div>
          <div className="flex flex-col justify-start items-center gap-6">
            <h2 className="text-center align-top text-5xl md:text-5xl text-4xl font-['DM_Sans'] leading-[60px] md:leading-[60px] leading-[44px] text-white">
              Powerful event management
            </h2>
            <p className="text-center align-top text-lg font-['DM_Sans'] leading-7 text-white max-w-[600px]">
              Streamline your event workflow with integrated tools
            </p>
          </div>
        </div>
        
        <div className="relative w-full min-h-[300vh]">
          {featureCards.map((card, index) => {
            const isActive = activeCardIndex === index;
            const isStacked = activeCardIndex > index;
            const isNext = activeCardIndex + 1 === index;
            const stackLevel = isStacked ? (activeCardIndex - index) : 0;
            
            let transform = 'none';
            if (isActive) transform = 'scale(1)';
            else if (isStacked) {
              const step = 2;
              transform = `translateY(${-stackLevel * step}px) scale(0.95)`;
            } else if (isNext) transform = 'translateY(10px)';
            
            return (
              <div 
                key={index} 
                ref={el => cardRefs.current[index] = el}
                className="flex flex-col justify-start items-center w-full sticky md:top-[2px] top-[10px] transition-transform duration-300 ease-in-out origin-top-center will-change-transform"
                style={{
                  paddingTop: `${7.5 + index * 1.25}rem`,
                  zIndex: 100 + index,
                  transform,
                }}
              >
                <FeatureCard 
                  badge={card.badge}
                  title={card.title}
                  features={card.features}
                  image={card.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

