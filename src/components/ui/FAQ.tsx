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
      className="bg-white rounded-xl p-6 cursor-pointer shadow-sm transition-all duration-200 hover:shadow-md"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg-semibold text-gray-cool-950 m-0">
          {question}
        </h3>
        <span className="text-[36px] text-brand-600 font-regular">
          {isOpen ? '×' : '+'}
        </span>
      </div>
      {isOpen && (
        <p className="text-md-medium text-gray-cool-700 mt-4 mb-0 pt-4 border-t border-gray-cool-100">
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
    <section className="py-20 px-16 md:py-20 md:px-16 py-12 px-8 bg-white">
      <div className="max-w-[800px] mx-auto">
        <h2 className="display-xs-semibold md:display-sm-semibold lg:display-lg-semibold text-center text-gray-cool-950 mb-10">
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