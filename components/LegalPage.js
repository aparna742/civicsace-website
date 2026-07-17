'use client';

import { useEffect, useRef, useState } from 'react';

export default function LegalPage({ data }) {
  const [activeId, setActiveId] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    data.sections.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [data.sections]);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const target = sectionRefs.current[id];
    if (!target) return;
    const offset = 88;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-1 translate-y-3 gap-12 px-8 py-12 opacity-0 animate-pageFadeIn max-[1024px]:gap-8 max-[768px]:flex-col max-[768px]:px-6 max-[768px]:py-8">
      <div className="max-w-[820px] flex-1">
        <div className="mb-10 border-b border-line pb-8">
          <h1 className="mb-2 bg-[linear-gradient(135deg,var(--text-primary)_0%,var(--text-secondary)_100%)] bg-clip-text font-display text-[2.75rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-transparent max-[768px]:text-[2.25rem]">
            {data.title}
          </h1>
          <div className="text-[0.9rem] font-medium text-ink-3">Last Updated: {data.lastUpdated}</div>
        </div>

        <p className="mb-8 text-[1.125rem] text-ink-2">{data.introduction}</p>

        <div>
          {data.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
              className="mb-7 scroll-mt-[100px] rounded-md border border-line bg-surface-2 p-8 shadow-sm transition-transform duration-normal ease-brand hover:border-brand/20"
            >
              <h2 className="mb-5 flex items-baseline gap-3 font-display text-[1.35rem] font-bold tracking-[-0.01em] text-ink">
                <span className="text-[1.2rem] font-extrabold text-brand">{section.number}.</span>
                {section.title}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </section>
          ))}
        </div>
      </div>

      <aside className="sticky top-[104px] flex h-[calc(100vh-140px)] w-[280px] flex-col gap-6 max-[1024px]:w-[240px] max-[768px]:static max-[768px]:h-auto max-[768px]:w-full">
        <div className="max-h-full overflow-y-auto rounded-md border border-line bg-surface-2 p-6 shadow-sm max-[768px]:max-h-[200px]">
          <h3 className="mb-4 font-display text-[1.1rem] font-bold tracking-[-0.01em] text-ink">Table of Contents</h3>
          <ul className="list-none pl-0">
            {data.sections.map((section) => (
              <li key={section.id} className="mb-1">
                <a
                  href={`#${section.id}`}
                  onClick={(e) => handleTocClick(e, section.id)}
                  className={`block overflow-hidden text-ellipsis whitespace-nowrap rounded-sm border-l-2 px-3 py-[0.4rem] text-[0.875rem] transition-all duration-fast ease-brand hover:bg-surface-3 hover:text-ink ${
                    activeId === section.id
                      ? 'border-brand bg-active-bg font-medium text-active-text'
                      : 'border-transparent text-ink-2'
                  }`}
                >
                  {section.number}. {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
