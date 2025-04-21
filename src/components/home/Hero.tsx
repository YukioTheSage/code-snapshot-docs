// src/components/home/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-16 dark:from-gray-900 dark:to-gray-800 sm:py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 text-center md:gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="text-indigo-600 dark:text-indigo-400">Code Snapshots</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl">
                A dead-simple snapshot system for VS Code
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Take instant point-in-time backups with a single keystroke and navigate between them without any complexity.
              The perfect companion to Git for your personal development workflow.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs/getting-started"
              className="rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Get Started
            </Link>
            <Link
              href="https://marketplace.visualstudio.com/items?itemName=yourname.code-snapshots"
              className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Marketplace
            </Link>
          </div>
          
          <div className="relative mt-8 w-full max-w-5xl overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/screenshot-main.png"
              alt="Code Snapshots in action"
              width={1200}
              height={675}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}