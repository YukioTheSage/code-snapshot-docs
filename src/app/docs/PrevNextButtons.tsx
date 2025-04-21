// src/components/docs/PrevNextButtons.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type DocPage = {
  title: string;
  href: string;
};

// Define the navigation structure for prev/next buttons
const docNavigation: DocPage[] = [
  { title: 'Documentation', href: '/docs' },
  { title: 'Getting Started', href: '/docs/getting-started' },
  { title: 'User Guide', href: '/docs/user-guide' },
  { title: 'Creating Snapshots', href: '/docs/user-guide/creating-snapshots' },
  { title: 'Navigating History', href: '/docs/user-guide/navigating-history' },
  { title: 'Snapshot Explorer', href: '/docs/user-guide/snapshot-explorer' },
  { title: 'Filtering', href: '/docs/user-guide/filtering' },
  { title: 'Comparing & Restoring', href: '/docs/user-guide/comparing-restoring' },
  { title: 'Selective Snapshots', href: '/docs/user-guide/selective-snapshots' },
  { title: 'Auto Snapshots', href: '/docs/user-guide/auto-snapshots' },
  { title: 'Settings', href: '/docs/user-guide/settings' },
  { title: 'Git Companion', href: '/docs/git-companion' },
  { title: 'Using with Git', href: '/docs/git-companion/workflows' },
  { title: 'Auto Safety Net', href: '/docs/git-companion/auto-safety-net' },
  { title: 'Commit from Snapshot', href: '/docs/git-companion/commit-from-snapshot' },
  { title: 'Developer Guide', href: '/docs/developer-guide' },
  { title: 'Architecture', href: '/docs/developer-guide/architecture' },
  { title: 'Contributing', href: '/docs/developer-guide/contributing' },
  { title: 'Roadmap', href: '/docs/roadmap' },
  { title: 'Troubleshooting', href: '/docs/troubleshooting' },
  { title: 'FAQs', href: '/docs/faqs' },
];

export default function PrevNextButtons() {
  const pathname = usePathname();
  
  // Find the current page in the navigation
  const currentIndex = docNavigation.findIndex((page) => page.href === pathname);
  
  // If current page is not in the navigation, don't render buttons
  if (currentIndex === -1) {
    return null;
  }
  
  const prevPage = currentIndex > 0 ? docNavigation[currentIndex - 1] : null;
  const nextPage = currentIndex < docNavigation.length - 1 ? docNavigation[currentIndex + 1] : null;
  
  return (
    <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6 dark:border-gray-700">
      <div>
        {prevPage ? (
          <Link
            href={prevPage.href}
            className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            <ChevronLeftIcon className="mr-1 h-5 w-5" aria-hidden="true" />
            <span>{prevPage.title}</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
      
      <div>
        {nextPage ? (
          <Link
            href={nextPage.href}
            className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            <span>{nextPage.title}</span>
            <ChevronRightIcon className="ml-1 h-5 w-5" aria-hidden="true" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}