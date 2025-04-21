import Image from 'next/image';
import Link from 'next/link';
import CodeBlock from '../CodeBlock';
import PrevNextButtons from '../PrevNextButtons';

export const metadata = {
  title: 'Getting Started',
  description: 'Learn how to install and start using Code Snapshots',
};

export default function GettingStartedPage() {
  return (
    <article className="flex flex-col gap-6">
      <h1 id="getting-started" className="text-4xl font-bold">Getting Started</h1>
      
      <p className="text-xl text-gray-700 dark:text-gray-300">
        Getting started with Code Snapshots is quick and straightforward. Follow these simple steps to install the extension and begin taking snapshots.
      </p>
      
      <div className="my-8 flex justify-center">
        <Image
          src="/images/code-snapshots-demo.png"
          alt="Code Snapshots Demo"
          width={800}
          height={450}
          className="rounded-lg shadow-lg"
        />
      </div>
      
      <h2 id="installation" className="mt-8 text-2xl font-semibold">Installation</h2>
      
      <p>
        You can install Code Snapshots directly from the VS Code marketplace:
      </p>
      
      <ol className="ml-6 list-decimal space-y-4 text-gray-700 dark:text-gray-300">
        <li>
          Open VS Code and select the Extensions view (or press <kbd className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">Ctrl+Shift+X</kbd>).
        </li>
        <li>
          Search for <strong>"Code Snapshots"</strong>.
        </li>
        <li>
          Click the Install button next to the Code Snapshots extension.
        </li>
        <li>
          Reload VS Code when prompted.
        </li>
        <li>
          The extension activates automatically - look for the snapshot indicator in the status bar.
        </li>
      </ol>
      
      <p className="mt-4">
        Alternatively, you can install the extension directly from the command line:
      </p>
      
      <CodeBlock language="bash" title="Command Line Installation">
        code --install-extension yourname.code-snapshots
      </CodeBlock>
      
      <h2 id="no-setup-required" className="mt-8 text-2xl font-semibold">No Setup Required</h2>
      
      <p>
        One of the core design principles of Code Snapshots is simplicity. There's no setup, initialization, or configuration required. The extension works out-of-the-box with sensible defaults.
      </p>
      
      <div className="my-8 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/30">
        <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300">
          Zero Configuration
        </h3>
        <p className="mt-2 text-blue-700 dark:text-blue-200">
          Unlike Git, you don't need to initialize any repositories, create branches, or configure remote servers. Just install and start taking snapshots.
        </p>
      </div>
      
      <h2 id="basic-usage" className="mt-8 text-2xl font-semibold">Basic Usage</h2>
      
      <p>
        Here are the essential keyboard shortcuts to get you started:
      </p>
      
      <div className="my-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                Action
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                Windows/Linux
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                macOS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                Take a snapshot
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                <kbd className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">Ctrl+Alt+S</kbd>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                <kbd className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">Cmd+Alt+S</kbd>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                Go to previous snapshot
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                <kbd className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">Ctrl+Alt+B</kbd>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                <kbd className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">Cmd+Alt+B</kbd>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                Go to next snapshot
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                <kbd className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">Ctrl+Alt+N</kbd>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                <kbd className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">Cmd+Alt+N</kbd>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                View snapshot history
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                <kbd className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">Ctrl+Alt+V</kbd>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                <kbd className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">Cmd+Alt+V</kbd>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                Run diagnostics
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                <kbd className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">Ctrl+Alt+D</kbd>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                <kbd className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">Cmd+Alt+D</kbd>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 id="your-first-snapshot" className="mt-8 text-2xl font-semibold">Your First Snapshot</h2>
      
      <ol className="ml-6 list-decimal space-y-4 text-gray-700 dark:text-gray-300">
        <li>Open a project in VS Code.</li>
        <li>Make some changes to your code.</li>
        <li>Press <kbd className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">Ctrl+Alt+S</kbd> (or <kbd className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">Cmd+Alt+S</kbd> on Mac) to take a snapshot.</li>
        <li>
          Choose between:
          <ul className="ml-6 mt-2 list-disc space-y-2">
            <li><strong>Quick Snapshot</strong>: Just a description</li>
            <li><strong>Detailed Snapshot</strong>: Add tags, notes, and more</li>
            <li><strong>Selective Snapshot</strong>: Choose specific files to include</li>
          </ul>
        </li>
        <li>For a Quick Snapshot, simply enter a description (e.g., "Initial setup").</li>
        <li>The status bar will update to show your current snapshot position.</li>
      </ol>
      
      <div className="my-8 rounded-lg bg-green-50 p-4 dark:bg-green-900/30">
        <h3 className="text-lg font-medium text-green-800 dark:text-green-300">
          Pro Tip
        </h3>
        <p className="mt-2 text-green-700 dark:text-green-200">
          Create snapshots before making significant changes or trying experimental approaches. This gives you a safety net to return to if things don't work out.
        </p>
      </div>
      
      <h2 id="next-steps" className="mt-8 text-2xl font-semibold">Next Steps</h2>
      
      <p>
        Now that you've installed Code Snapshots and taken your first snapshot, here are some next steps to explore:
      </p>
      
      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <Link 
          href="/docs/user-guide/creating-snapshots"
          className="block rounded-lg border border-gray-200 bg-white p-6 hover:border-indigo-200 hover:bg-indigo-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-900/30"
        >
          <h3 className="mb-2 text-lg font-medium text-indigo-600 dark:text-indigo-400">Creating Snapshots</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Learn more about Quick, Detailed, and Selective snapshots.
          </p>
        </Link>
        
        <Link 
          href="/docs/user-guide/navigating-history"
          className="block rounded-lg border border-gray-200 bg-white p-6 hover:border-indigo-200 hover:bg-indigo-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-900/30"
        >
          <h3 className="mb-2 text-lg font-medium text-indigo-600 dark:text-indigo-400">Navigating History</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Discover how to move between snapshots and compare changes.
          </p>
        </Link>
      </div>

      <PrevNextButtons />
    </article>
  );
}