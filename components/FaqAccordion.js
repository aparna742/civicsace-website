'use client';

import { useRef, useState } from 'react';

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef({});

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.q}
            className={`overflow-hidden rounded-md border bg-surface-2 transition-all duration-normal ease-brand ${
              isOpen ? 'border-brand/30' : 'border-line'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-sans text-base font-semibold text-ink hover:bg-hover-bg"
            >
              <span>{faq.q}</span>
              <svg
                className={`shrink-0 text-ink-3 transition-transform duration-normal ease-brand ${
                  isOpen ? '-rotate-180 !text-brand' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              ref={(el) => {
                answerRefs.current[idx] = el;
              }}
              style={{ maxHeight: isOpen ? `${answerRefs.current[idx]?.scrollHeight ?? 1000}px` : '0px' }}
              className="overflow-hidden text-[0.95rem] text-ink-2 transition-[max-height] duration-normal ease-out"
            >
              <div
                className="px-6 pb-6"
                dangerouslySetInnerHTML={{ __html: faq.a }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
