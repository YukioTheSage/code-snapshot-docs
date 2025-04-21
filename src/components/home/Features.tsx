// src/components/home/Features.tsx
import Image from 'next/image';
import Link from 'next/link';

type FeatureProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  link?: string;
};

function Feature({ title, description, icon, imageSrc, imageAlt, link }: FeatureProps) {
  const content = (
    <div className="group h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
      {imageSrc && (
        <div className="mt-4 overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={400}
            height={225}
            className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      )}
      {link && (
        <Link
          href={link}
          className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Learn more
          <svg
            className="ml-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      )}
    </div>
  );

  if (link) {
    return <Link href={link} className="block h-full">{content}</Link>;
  }

  return content;
}

export default function Features() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl text-center md:mx-auto">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Simple, Seamless Snapshots
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Code Snapshots provides a frictionless way to create point-in-time backups while you code, without the overhead of Git commits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="One-Key Snapshots"
            description="Create instant backups with a single keystroke. No staging, no commit messages, no branches to manage."
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            }
            imageSrc="/images/one-key-snapshot.png"
            link="/docs/user-guide/creating-snapshots"
          />

          <Feature
            title="Time Travel Navigation"
            description="Easily jump between snapshots to revisit any point in your development process."
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            imageSrc="/images/time-travel.png"
            link="/docs/user-guide/navigating-history"
          />

          <Feature
            title="Git Companion"
            description="Works alongside Git without replacing it. Get the best of both version control worlds."
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            imageSrc="/images/git-companion.png"
            link="/docs/git-companion"
          />

          <Feature
            title="Rich Context"
            description="Add tags, notes, and references to your snapshots for better organization and searchability."
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            }
            imageSrc="/images/enhanced-context.png"
            link="/docs/user-guide/enhanced-snapshot-context"
          />

          <Feature
            title="Powerful Filtering"
            description="Find exactly what you need with filtering by date, tags, favorites, and file paths."
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            }
            imageSrc="/images/filtering.png"
            link="/docs/user-guide/filtering"
          />

          <Feature
            title="Selective Snapshots"
            description="Choose specific files to include in your snapshot for more focused version control."
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            }
            imageSrc="/images/selective-snapshots.png"
            link="/docs/user-guide/selective-snapshots"
          />
        </div>
      </div>
    </section>
  );
}