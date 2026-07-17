import PlayStoreButton from '@/components/PlayStoreButton';

const FEATURES = [
  {
    title: 'Study',
    description: 'Review all the official USCIS citizenship questions with clear explanations to build a strong foundation.',
  },
  {
    title: 'Mock Interviews',
    description: 'Practice with realistic, voice-based mock interviews that mirror the real USCIS format.',
  },
  {
    title: 'Flashcards',
    description: 'Master the official citizenship questions with flashcards built for quick daily review.',
  },
  {
    title: 'Quizzes',
    description: 'Test your knowledge with quizzes that track your progress as you improve.',
  },
  {
    title: 'Reading & Writing Practice',
    description: 'Build confidence with the reading and writing exercises required for the interview.',
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-1 translate-y-3 flex-col items-center px-8 py-20 text-center opacity-0 animate-pageFadeIn max-[768px]:px-6 max-[768px]:py-12">
      <h1 className="mb-4 max-w-[720px] bg-[linear-gradient(135deg,var(--text-primary)_0%,var(--text-secondary)_100%)] bg-clip-text font-display text-[3rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-transparent max-[768px]:text-[2.25rem]">
        Ace Your U.S. Citizenship Test
      </h1>

      <p className="mb-10 max-w-[620px] text-[1.125rem] text-ink-2">
        CivicsAce is a study companion for the U.S. citizenship test and interview, covering all the official
        questions through mock interviews, flashcards, quizzes, and reading &amp; writing practice — so you can
        prepare with confidence, at your own pace.
      </p>

      <PlayStoreButton />

      <div className="mt-20 grid w-full max-w-[960px] grid-cols-3 gap-6 text-left max-[1024px]:grid-cols-2 max-[480px]:grid-cols-1">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="rounded-md border border-line bg-surface-2 p-6 shadow-sm">
            <h3 className="mb-2 font-display text-[1.05rem] font-bold text-ink">{feature.title}</h3>
            <p className="text-[0.9rem] text-ink-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
