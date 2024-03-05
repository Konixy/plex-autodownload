'use client';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { SessionProvider } from 'next-auth/react';

export default function Home() {
  return (
    <SessionProvider>
      <main className="flex">
        hey <ThemeToggle />
      </main>
    </SessionProvider>
  );
}
