import FaqAccordion from '@/components/FaqAccordion';
import { faqs } from '@/lib/legal-content';

export const metadata = {
  title: 'Contact Support — CivicsAce',
};

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-1 translate-y-3 gap-12 px-8 py-12 opacity-0 animate-pageFadeIn max-[1024px]:gap-8 max-[768px]:flex-col max-[768px]:px-6 max-[768px]:py-8">
      <div className="mx-auto flex w-full max-w-[820px] flex-col gap-10">
        <div>
          <h1 className="mb-6 bg-[linear-gradient(135deg,var(--text-primary)_0%,var(--text-secondary)_100%)] bg-clip-text font-display text-[2.75rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-transparent max-[768px]:text-[2.25rem]">
            Contact Support
          </h1>
          <p className="mb-8 text-[1.125rem] text-ink-2">
            Have questions about CivicsAce? Check our FAQs below, or reach out to our support team directly.
          </p>
        </div>

        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-brand/15 bg-[linear-gradient(135deg,rgb(var(--primary-rgb)/0.1)_0%,rgb(var(--secondary-rgb)/0.1)_100%)] text-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div>
            <h3 className="mb-1 font-display text-[1.15rem] font-bold text-ink">Email Support</h3>
            <p className="mb-2 text-[0.95rem] text-ink-2">
              For general support queries, billing issues, account deletion requests, or feature requests:
            </p>
            <a href="mailto:support@civicsace.app" className="text-[1.05rem] font-semibold text-brand hover:underline">
              support@civicsace.app
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-display text-[1.6rem] font-extrabold tracking-[-0.02em] text-ink">
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </div>
  );
}
