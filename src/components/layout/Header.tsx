// src/components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MoonIcon, SunIcon, Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Docs', href: '/docs' },
  { name: 'Blog', href: '/blog' },
  { name: 'GitHub', href: 'https://github.com/yourusername/vscode-snapshots' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();
  
  // Check for dark mode preference on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', (!darkMode).toString());
      document.documentElement.classList.toggle('dark');
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-900">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="sr-only">Code Snapshots</span>
            <div className="h-8 w-8 rounded-md bg-indigo-600 text-center text-xl font-bold text-white">CS</div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Code Snapshots</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4 md:hidden">
          <button
            type="button"
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            onClick={toggleDarkMode}
          >
            <span className="sr-only">Toggle dark mode</span>
            {darkMode ? (
              <SunIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MoonIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden md:flex md:items-center md:gap-6">
          {navigation.map((item) => {
            const isActive = 
              item.href === '/' 
                ? pathname === '/' 
                : pathname.startsWith(item.href);
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </Link>
            );
          })}
          
          <button
            type="button"
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            onClick={toggleDarkMode}
          >
            <span className="sr-only">Toggle dark mode</span>
            {darkMode ? (
              <SunIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MoonIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu, show/hide based on menu open state */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setMobileMenuOpen(false)} />
          
          <div className="fixed inset-y-0 right-0 flex max-w-xs w-full flex-col bg-white dark:bg-gray-900 py-6 px-6 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 flex items-center gap-2 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Code Snapshots</span>
                <div className="h-8 w-8 rounded-md bg-indigo-600 text-center text-xl font-bold text-white">CS</div>
                <span className="text-xl font-semibold text-gray-900 dark:text-white">Code Snapshots</span>
              </Link>
              <button
                type="button"
                className="rounded-md p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="flex flex-1 flex-col gap-6">
              {navigation.map((item) => {
                const isActive = 
                  item.href === '/' 
                    ? pathname === '/' 
                    : pathname.startsWith(item.href);
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-base font-medium ${
                      isActive
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}