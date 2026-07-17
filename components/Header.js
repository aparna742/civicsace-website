'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 -top-px z-[100] h-[calc(72px+1px)] border-b border-line bg-surface-2 pt-px transition-colors duration-normal ease-brand">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-8 max-[768px]:px-6 max-[480px]:px-4">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-3 font-display text-2xl font-extrabold tracking-[-0.02em]"
        >
          <Image
            src="/logo.png"
            alt="CivicsAce"
            width={56}
            height={56}
            className="h-14 w-14"
            priority
          />
        </Link>

        <nav className="flex items-center gap-6 max-[480px]:gap-2">
          <div className="flex items-center gap-6 max-[768px]:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-sm px-4 py-2 text-[0.95rem] font-medium transition-all duration-fast ease-brand hover:bg-surface-3 hover:text-ink max-[480px]:px-[0.6rem] max-[480px]:py-[0.4rem] max-[480px]:text-[0.85rem] ${
                  pathname === link.href
                    ? 'bg-active-bg font-semibold text-brand'
                    : 'text-ink-2'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
