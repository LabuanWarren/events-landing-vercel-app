export const HowItWorks = () => {
  const steps = [
    {
      image: <img src="../illustrations/create-event.svg" alt="calendar" className=" right-0 top-0 px-6 py-16 pointer-events-none w-[230px]" />,
      step: "Step 1",
      title: "Create Your Event",
      description: "Set up your event in minutes — name, date, venue, and ticket types.\nNo complicated forms, no stress."
    },
    {
      image: <img src="../illustrations/customize-and-publish.svg" alt="booth" className=" right-0 top-0 px-6 py-16 pointer-events-none w-[250px]" />,
      step: "Step 2",
      title: "Customize & Publish",
      description: "Add your branding, upload media, and preview before going live.\nYour event, your vibe."
    },
    
    {
      image: <img src="../illustrations/tyckets.svg" alt="tickets" className=" right-0 top-0 px-6 py-16 pointer-events-none w-[280px]" />,
      step: "Step 3",
      title: "Share & Sell Tickets",
      description: "Share your event link on any platform to start ticketing right away with Typid Pay.\nFast setup. Instant sales."
    },
    {
      image: <img src="../illustrations/dashboard.svg" alt="dashboard" className=" right-0 top-0 px-6 py-16 pointer-events-none w-[240px]" />,
      step: "Step 4",
      title: "Track & Manage",
      description: "Track every ticket sale, attendee detail, and event insight from one powerful dashboard.\nStay informed. Stay in control."
    },
    {
      image: <img src="../illustrations/qr-checkin.svg" alt="qr-code" className=" right-0 top-0 px-6 py-16 pointer-events-none w-[250px]" />,
      step: "Step 5",
      title: "QR Attendance Check-In",
      description: "Every attendee gets a unique QR code. Scan, verify, and track entries in real time.\nNo paper lists. No hassle."
    }
  ];

  return (
    <section className="rounded-3xl flex flex-col relative bg-gradient-to-br from-[#F0F2FB] via-[#E9EAFF] to-[#E5E5EE] w-full px-6 py-10 md:px-10 md:py-16 lg:px-20 lg:py-24 overflow-hidden">
      {/* Gradient Circle - positioned below cards but above background */}
      <img 
        src="/gradient-circle.svg" 
        alt="gradient circle" 
        className="absolute right-0 bottom-0 pointer-events-none z-0"
      />
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 md:items-start relative z-10">
        {/* Badge Container - takes same space as first card on desktop */}
        <div className="flex flex-col md:flex-1 md:min-w-[320px] md:max-w-[500px]">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 rounded-full pl-3 pr-4 py-2 w-fit">
            <div className="h-3 w-3 bg-brand-500 rounded-full" />
            <span className="text-sm-medium text-gray-cool-950">
              How Typid Events Works
            </span>
          </div>
        </div>

        {/* Heading - aligned with second card on desktop */}
        <h2 className="display-sm-semibold md:display-md-semibold lg:display-lg-semibold text-left text-gray-cool-950 md:flex-1 md:min-w-[320px] md:max-w-[800px]">
          Simplify event organizing from idea to ticket sales.
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap gap-6 relative z-10">
        {/* Intro Card - No background */}
        <div className="flex flex-col gap-4 flex-1 min-w-[280px] md:min-w-[320px] basis-full md:basis-[calc(33.333%-16px)]">
          <h3 className="display-xs-semibold text-gray-cool-950">
            Less work. More moments that matter.
          </h3>
          <p className="text-md-regular text-gray-cool-700">
            From planning to the final QR scan, every step flows seamlessly with Typid.
          </p>
        </div>

        {/* Step Cards */}
        {steps.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-lg/80 flex-1 min-w-[280px] md:min-w-[320px] basis-full md:basis-[calc(33.333%-16px)] overflow-hidden"
          >
            {/* Image placeholder */}
            <div className="h-[244px] w-full bg-white" >
            {card.image}
            </div>
            
            {/* Card content */}
            <div className="flex flex-col gap-4 px-6 py-6">
              {/* Step indicator */}
              <div className="flex items-center gap-4 w-full">
                <span className="text-xs leading-[18px] font-normal tracking-[0.4em] text-gray-cool-700 uppercase">
                  {card.step}
                </span>
                <div className="flex items-center gap-4 flex-1">
                  <div className="h-[1px] flex-1 max-w-[180px] bg-gray-cool-400" />
                  <div className="h-3 w-3 rounded-full border-2 border-gray-cool-400" />
                </div>
              </div>

              {/* Title */}
              <h3 className="display-xs-semibold text-gray-cool-950">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-md-regular text-gray-cool-700 whitespace-pre-line">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
