const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.citizen.prep';

export default function PlayStoreButton() {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-md bg-[linear-gradient(135deg,var(--primary)_0%,var(--secondary)_100%)] px-6 py-4 font-sans font-semibold text-white shadow-[0_4px_15px_rgb(var(--primary-rgb)/0.3)] transition-all duration-fast ease-brand hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgb(var(--primary-rgb)/0.4)] active:translate-y-0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.6 2.4c-.3.3-.5.7-.5 1.2v16.8c0 .5.2.9.5 1.2l.1.1L13.3 12 3.7 2.3l-.1.1Z" />
        <path d="m16.5 15.3-2.9-2.9L3.7 21.7c.4.4 1 .4 1.6.1l11.2-6.5Z" />
        <path d="m16.5 8.7-11.2-6.5c-.6-.3-1.2-.3-1.6.1l9.9 9.9 2.9-3.5Z" />
        <path d="M20.7 10.9 17.4 9l-3.1 3 3.1 3 3.3-1.9c.9-.5.9-1.7 0-2.2Z" />
      </svg>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[0.7rem] font-normal opacity-90">GET IT ON</span>
        <span className="text-[1.1rem]">Google Play</span>
      </span>
    </a>
  );
}
