import Image from 'next/image';
import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface-2 py-12 transition-colors duration-normal ease-brand">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-8 max-[768px]:px-6 max-[480px]:px-4">
        <div className="flex items-start justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold">
            <Image
              src="/logo.png"
              alt="CivicsAce"
              width={40}
              height={40}
              className="h-10 w-10"
            />
          </Link>

          <ul className="flex flex-col items-start gap-2 list-none pl-0">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-ink-2 transition-colors duration-fast ease-brand hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-start gap-4 rounded-md border border-warn-line bg-warn-bg p-5">
          <svg
            className="mt-[0.15rem] shrink-0 text-[var(--danger-icon)]"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <div className="text-[0.875rem] font-medium leading-normal text-warn-text">
            <strong>USCIS Disclaimer:</strong> CivicsAce is an independent educational application and is not
            affiliated with, endorsed by, or sponsored by the U.S. Citizenship and Immigration Services (USCIS),
            the U.S. government, or any other government agency.
          </div>
        </div>

        <div className="text-center text-[0.85rem] text-ink-3">&copy; 2026 CivicsAce. All rights reserved.</div>
      </div>
    </footer>
  );
}
