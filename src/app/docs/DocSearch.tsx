// src/components/docs/DocSearch.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon as SearchIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

export default function DocSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Open search modal with keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // CMD+K or CTRL+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      
      // ESC to close
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Mock search for now (replace with real search later)
  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }
    
    setLoading(true);
    
    try {
      // In a real implementation, this would call your search API
      // For now, we'll just simulate some results
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      const mockResults = [
        {
          title: 'Creating Snapshots',
          href: '/docs/user-guide/creating-snapshots',
          excerpt: '...learn how to create snapshots with a single keystroke...',
        },
        {
          title: 'Snapshot Explorer',
          href: '/docs/user-guide/snapshot-explorer',
          excerpt: '...browse your snapshot history in the dedicated sidebar panel...',
        },
        {
          title: 'Git Integration',
          href: '/docs/git-companion',
          excerpt: '...use Code Snapshots alongside Git for an optimal workflow...',
        },
      ].filter((item) => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setResults(mockResults);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleResultClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-500 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
      >
        <SearchIcon className="mr-2 h-4 w-4" />
        <span>Search docs...</span>
        <span className="ml-2 flex items-center text-xs text-gray-400">
          <kbd className="rounded border border-gray-300 px-1 py-0.5 dark:border-gray-600">⌘</kbd>
          <span className="mx-0.5">+</span>
          <kbd className="rounded border border-gray-300 px-1 py-0.5 dark:border-gray-600">K</kbd>
        </span>
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-25 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          ></div>
          
          <div className="mx-auto max-w-2xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all dark:bg-gray-900 dark:ring-gray-700">
            <div className="relative">
              <div className="flex items-center border-b border-gray-200 dark:border-gray-700">
                <SearchIcon className="mx-3 h-5 w-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  className="h-12 w-full border-0 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0 dark:text-gray-200"
                  placeholder="Search documentation..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    handleSearch(e.target.value);
                  }}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="mr-3 rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <XIcon className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              
              {query.trim() !== '' && (
                <div className="max-h-80 overflow-y-auto p-2">
                  {loading ? (
                    <div className="p-4 text-center text-sm text-gray-500">
                      Searching...
                    </div>
                  ) : results.length > 0 ? (
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                      {results.map((result, index) => (
                        <li key={index}>
                          <button
                            className="w-full rounded-md px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => handleResultClick(result.href)}
                          >
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                              {result.title}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {result.excerpt}
                            </p>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-4 text-center text-sm text-gray-500">
                      No results found for &quot;{query}&quot;
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}