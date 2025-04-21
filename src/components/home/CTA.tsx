// src/components/home/CTA.tsx
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-indigo-700 dark:bg-indigo-900">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to simplify your coding workflow?
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Get started with Code Snapshots today and experience the perfect companion to Git.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/docs/getting-started"
              className="rounded-md bg-white px-5 py-3 text-base font-medium text-indigo-700 shadow hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
            >
              Get Started
            </Link>
            <Link
              href="https://marketplace.visualstudio.com/items?itemName=yourname.code-snapshots"
              className="rounded-md border border-white bg-transparent px-5 py-3 text-base font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the Extension
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}