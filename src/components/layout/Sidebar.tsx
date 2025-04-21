// src/components/layout/Sidebar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type SidebarLinkGroup = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

const sidebarLinks: SidebarLinkGroup[] = [
  {
    title: 'Introduction',
    links: [
      { title: 'Overview', href: '/docs' },
      { title: 'Getting Started', href: '/docs/getting-started' },
    ],
  },
  {
    title: 'User Guide',
    links: [
      { title: 'Basic Usage', href: '/docs/user-guide' },
      // { title: 'Creating Snapshots', href: '/docs/user-guide/creating-snapshots' },
      // { title: 'Navigating History', href: '/docs/user-guide/navigating-history' },
      // { title: 'Snapshot Explorer', href: '/docs/user-guide/snapshot-explorer' },
      // { title: 'Filtering', href: '/docs/user-guide/filtering' },
      // { title: 'Comparing & Restoring', href: '/docs/user-guide/comparing-restoring' },
      // { title: 'Selective Snapshots', href: '/docs/user-guide/selective-snapshots' },
      // { title: 'Auto Snapshots', href: '/docs/user-guide/auto-snapshots' },
      // { title: 'Settings', href: '/docs/user-guide/settings' },
    ],
  },
  {
    title: 'Git Integration',
    links: [
      { title: 'Git Companion', href: '/docs/git-companion' },
      // { title: 'Workflows', href: '/docs/git-companion/workflows' },
      // { title: 'Auto Safety Net', href: '/docs/git-companion/auto-safety-net' },
      // { title: 'Commit from Snapshot', href: '/docs/git-companion/commit-from-snapshot' },
    ],
  },
  {
    title: 'Advanced',
    links: [
      { title: 'Developer Guide', href: '/docs/developer-guide' },
      // { title: 'Architecture', href: '/docs/developer-guide/architecture' },
      // { title: 'Contributing', href: '/docs/developer-guide/contributing' },
      { title: 'Roadmap', href: '/docs/roadmap' },
    ],
  },
  {
    title: 'Help',
    links: [
      { title: 'Troubleshooting', href: '/docs/troubleshooting' },
      { title: 'FAQs', href: '/docs/faqs' },
    ],
  },
];

export default function Sidebar({ className = '' }: { className?: string }) {
  const pathname = usePathname();
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  
  // Initialize expanded state based on current path
  useEffect(() => {
    const initialExpandedGroups: Record<string, boolean> = {};
    
    sidebarLinks.forEach((group) => {
      // Expand the group if the current path matches any of its links
      const shouldExpand = group.links.some((link) => 
        pathname === link.href || 
        (pathname.startsWith(link.href) && link.href !== '/docs')
      );
      
      initialExpandedGroups[group.title] = shouldExpand;
    });
    
    setExpandedGroups(initialExpandedGroups);
  }, [pathname]);
  
  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupTitle]: !prev[groupTitle],
    }));
  };
  
  return (
    <nav className={`py-4 ${className}`}>
      <div className="mb-8">
        <Link 
          href="/docs" 
          className="text-lg font-semibold text-gray-900 dark:text-white"
        >
          Documentation
        </Link>
      </div>
      
      <div className="space-y-6">
        {sidebarLinks.map((group) => (
          <div key={group.title} className="space-y-2">
            <button
              className="flex w-full items-center justify-between text-sm font-medium text-gray-900 dark:text-white"
              onClick={() => toggleGroup(group.title)}
            >
              <span>{group.title}</span>
              <ChevronDownIcon 
                className={`h-4 w-4 transition-transform ${
                  expandedGroups[group.title] ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {expandedGroups[group.title] && (
              <ul className="ml-2 space-y-1 border-l border-gray-200 pl-4 dark:border-gray-700">
                {group.links.map((link) => {
                  const isActive = pathname === link.href;
                  const isInActivePath = pathname.startsWith(link.href) && link.href !== '/docs';
                  
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block rounded-md py-1 text-sm ${
                          isActive
                            ? 'font-medium text-indigo-600 dark:text-indigo-400'
                            : isInActivePath
                            ? 'font-medium text-gray-700 dark:text-gray-300'
                            : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                        }`}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}