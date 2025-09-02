
import React, { useState } from 'react';
import { FAQ } from '../types';

interface FaqItemProps {
  faq: FAQ;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-colors"
      >
        <div className="flex-1">
          <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide">{faq.category}</p>
          <h3 className="mt-1 font-semibold text-gray-800">{faq.question}</h3>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-600 bg-gray-50">
          <p className="whitespace-pre-wrap">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
