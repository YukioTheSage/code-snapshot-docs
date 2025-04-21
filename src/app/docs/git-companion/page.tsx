// src/app/docs/git-companion/page.tsx
import { getMdxBySlug } from '@/lib/mdx';
import PrevNextButtons from '../PrevNextButtons';
import { Suspense } from 'react';

export const metadata = {
  title: 'Git Companion Guide',
  description: 'Learn how to effectively use Code Snapshots alongside Git for an optimal development workflow',
};

export default async function GitCompanionPage() {
  let content;
  try {
    const mdxResult = await getMdxBySlug('docs', 'git-companion');
    content = mdxResult.content;
  } catch (error) {
    console.error('Error loading MDX content:', error);
    content = <div>Error loading content. Please try again later.</div>;
  }
  
  return (
    <article className="flex flex-col gap-6">      
      <div className="prose prose-indigo dark:prose-invert max-w-none">
        <Suspense fallback={<div>Loading...</div>}>
          {content}
        </Suspense>
      </div>
      
      <PrevNextButtons />
    </article>
  );
}