// src/app/docs/layout.tsx
import Sidebar from '@/components/layout/Sidebar';
import TableOfContents from '@/app/docs/TableOfContents';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-12">
        <Sidebar className="hidden lg:block lg:w-64 shrink-0" />
        
        <div className="min-w-0 flex-1">
          <div className="prose prose-indigo dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
        
        <TableOfContents className="hidden xl:block xl:w-64 shrink-0" />
      </div>
    </div>
  );
}