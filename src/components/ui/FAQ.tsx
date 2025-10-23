import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl p-6 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-['DM_Sans'] text-lg font-semibold text-black m-0">
          {question}
        </h3>
        <span className="text-2xl text-[#0a7a94] font-bold">
          {isOpen ? '×' : '+'}
        </span>
      </div>
      {isOpen && (
        <p className="font-['Roboto'] text-base leading-[1.6] text-gray-600 mt-4 mb-0 pt-4 border-t border-gray-100">
          {answer}
        </p>
      )}
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqItems = [
    {
      question: 'What is Typid Events?',
      answer: 'Typid Events is an all-in-one event management platform that lets you create, manage, and sell Tyckets for your events. You can track sales, manage attendees, create discount codes, and design your own Tycket Booth — all powered by Typid Pay.'
    },
    {
      question: 'What is Typid Pay?',
      answer: 'Typid Pay is our integrated payment processing system that ensures secure, fast, and transparent transactions for all your event ticket sales. It handles payment processing, refunds, and provides detailed financial reporting for your events.'
    },
    {
      question: 'How do I create an event?',
      answer: 'Creating an event is simple! Sign in to your Typid account, navigate to the Dashboard, click "Create Event," and follow the step-by-step process. You\'ll be able to add event details, create ticket tiers, customize your event page, and publish when you\'re ready.'
    },
    {
      question: 'Can I customize my Tycket Booth?',
      answer: 'Absolutely! Typid Events offers extensive customization options for your Tycket Booth. You can add your own branding, colors, and images that matches your brand identity.'
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="py-20 px-16 md:py-20 md:px-16 py-12 px-8 bg-[#f8f9fb]">
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-['DM_Sans'] text-4xl md:text-4xl text-3xl font-bold text-black mb-10 md:mb-10 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

