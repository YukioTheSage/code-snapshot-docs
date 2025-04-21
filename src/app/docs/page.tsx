// src/app/docs/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import DocSearch from './DocSearch';

export const metadata = {
  title: 'Documentation',
  description: 'Code Snapshots documentation - Learn how to use the VS Code extension',
};

export default function DocsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="mb-6 flex justify-between">
        <h1 className="text-4xl font-bold">Code Snapshots Documentation</h1>
        <div className="hidden md:block">
          <DocSearch />
        </div>
      </div>
      
      <p className="text-xl text-gray-700 dark:text-gray-300">
        Code Snapshots is a lightweight companion to Git that focuses on your personal development workflow. This extension allows you to take point-in-time snapshots of your code and easily navigate between them with a single keystroke.
      </p>
      
      <div className="my-6">
        <Image
          src="/images/snapshot-explorer-view.png"
          alt="Code Snapshots Explorer View"
          width={800}
          height={500}
          className="rounded-lg border border-gray-200 shadow-md dark:border-gray-700"
        />
      </div>
      
      <h2 className="text-2xl font-semibold mt-8">Documentation Sections</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        <DocCard
          title="Getting Started"
          description="Install the extension and learn the basics of taking snapshots."
          href="/docs/getting-started"
          icon="📥"
        />
        <DocCard
          title="User Guide"
          description="Comprehensive guide to using all features of Code Snapshots."
          href="/docs/user-guide"
          icon="📖"
        />
        <DocCard
          title="Git Companion Guide"
          description="Learn how to use Code Snapshots alongside Git for optimal workflow."
          href="/docs/git-companion"
          icon="🔄"
        />
        <DocCard
          title="Developer Guide"
          description="Technical details for contributing to Code Snapshots."
          href="/docs/developer-guide"
          icon="👩‍💻"
        />
        <DocCard
          title="Roadmap"
          description="Planned features and future enhancements."
          href="/docs/roadmap"
          icon="🛣️"
        />
        <DocCard
          title="Troubleshooting"
          description="Solutions for common issues and questions."
          href="/docs/troubleshooting"
          icon="🔧"
        />
      </div>
    </div>
  );
}

function DocCard({ title, description, href, icon }: { 
  title: string; 
  description: string; 
  href: string; 
  icon: string;
}) {
  return (
    <Link 
      href={href}
      className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-2xl dark:bg-indigo-900">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}