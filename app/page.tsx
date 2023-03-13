import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.scss';
import Stats from '@/components/Stats';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-300 p-8 dark:bg-slate-600">
      <h1 className="mb-4 font-sans text-5xl font-semibold uppercase tracking-wide text-cyan-800 dark:text-stone-300">
        Stats
      </h1>
      <Stats />

      <Stats />
    </div>
  );
}
