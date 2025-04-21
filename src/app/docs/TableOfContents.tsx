// src/components/docs/TableOfContents.tsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function TableOfContents({ className = '' }: { className?: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const pathname = usePathname();

  // Extract headings from the page
  useEffect(() => {
    const extractHeadings = () => {
      const headingElements = Array.from(
        document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      ).filter((element) => {
        // Only include headings that have IDs and are in the main content
        return element.id && !element.closest('nav');
      });

      const headings = headingElements.map((element) => ({
        id: element.id,
        text: element.textContent || '',
        level: parseInt(element.tagName.charAt(1)),
      }));

      setHeadings(headings);
    };

    // Initial extraction
    extractHeadings();

    // Re-extract on content changes
    const observer = new MutationObserver(extractHeadings);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Highlight active heading based on scroll position
  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const headingElements = headings.map(({ id }) => document.getElementById(id));
      
      // Find the heading that's currently in view
      const visibleHeadings = headingElements.filter((element) => {
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight * 0.5;
      });
      
      // Use the last visible heading (closest to top of viewport)
      const activeHeading = visibleHeadings[0];
      
      if (activeHeading) {
        setActiveId(activeHeading.id);
      } else if (headingElements[0]) {
        // Default to first heading if none are visible
        setActiveId(headingElements[0].id);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  if (headings.length < 2) {
    return null;
  }

  return (
    <div className={`py-4 ${className}`}>
      <div className="sticky top-24">
        <h2 className="mb-4 text-sm font-medium text-gray-900 dark:text-white">
          On this page
        </h2>
        <nav className="space-y-1">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block border-l-2 py-1 pl-3 text-sm ${
                activeId === heading.id
                  ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300'
              }`}
              style={{
                paddingLeft: `${heading.level * 0.5}rem`,
              }}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}