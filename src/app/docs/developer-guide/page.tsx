// src/app/docs/developer-guide/page.tsx
import { getMdxBySlug } from '@/lib/mdx';
import PrevNextButtons from '../PrevNextButtons';
import { Suspense } from 'react';

export const metadata = {
  title: 'Developer Guide',
  description: 'Technical details, architecture information, and contribution guidelines for the Code Snapshots VS Code extension',
};

export default async function DeveloperGuidePage() {
  let content;
  let error: string | null = null;

  try {
    const mdxResult = await getMdxBySlug('docs', 'developer-guide');
    content = mdxResult.content;
  } catch (err) {
    console.error('Error loading MDX content:', err);
    error = err instanceof Error ? err.message : 'Unknown error occurred';
  }
  
  return (
    <article className="flex flex-col gap-6">      
      <div className="prose prose-indigo dark:prose-invert max-w-none">
        {error ? (
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/30">
            <h2 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">
              Error Loading Content
            </h2>
            <p className="text-red-700 dark:text-red-200">
              {error}
            </p>
            <p className="mt-2 text-red-600 dark:text-red-400">
              Please try refreshing the page or contact support if the issue persists.
            </p>
          </div>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            {content}
          </Suspense>
        )}
      </div>
      
      <PrevNextButtons />
    </article>
  );
}