// src/lib/mdx.ts
import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import React from 'react';

// Import custom components for MDX
import CodeBlock from '@/app/docs/CodeBlock';
import Image from 'next/image';
import Link from 'next/link';

// Types
export type Frontmatter = {
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  author?: string;
};

export type DocContent = {
  frontmatter: Frontmatter;
  content: React.ReactNode;
  headings: { id: string; title: string; level: number }[];
};

// Directory paths
const contentDirectory = path.join(process.cwd(), 'src/content');

// Custom components for MDX rendering
const components = {
  CodeBlock,
  pre: (props: any) => props.children,
  code: (props: any) => {
    // If the code block is inside a pre tag, let it be handled by CodeBlock
    if (props.className) {
      return <code {...props} />;
    }
    // Otherwise, render as a code element
    return <code className="bg-gray-100 px-1 py-0.5 rounded text-sm dark:bg-gray-800" {...props} />;
  },
  Image: (props: any) => (
    <Image 
      {...props} 
      width={props.width || 800} 
      height={props.height || 450} 
      className={`rounded-lg ${props.className || ''}`}
      alt={props.alt || ''}
    />
  ),
  a: (props: any) => {
    const href = props.href;
    if (href?.startsWith('http')) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          {props.children}
        </a>
      );
    }
    return <Link href={href} className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">{props.children}</Link>;
  },
  // Add any other custom components used in MDX
  kbd: (props: any) => (
    <kbd className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">
      {props.children}
    </kbd>
  ),
  div: (props: any) => {
    // Handle className for custom divs
    return <div {...props} className={props.className}>{props.children}</div>;
  },
};

// Read MDX file and parse frontmatter
export async function getMdxBySlug(folder: string, slug: string): Promise<DocContent> {
  const filePath = path.join(contentDirectory, folder, `${slug}.mdx`);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');

  try {
    // Preprocess the content to escape potential parsing issues
    const processedContent = preprocessMDX(fileContent);

    // Compile the MDX content
    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: processedContent,
      components,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          ],
          format: 'mdx',
        },
      },
    });

    // Extract headings from content for table of contents
    const headings = extractHeadings(fileContent);

    return {
      content,
      frontmatter,
      headings,
    };
  } catch (error) {
    console.error('Error compiling MDX:', error);
    throw new Error(`Failed to compile MDX: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Preprocess MDX to handle complex content
function preprocessMDX(content: string): string {
  // Escape code blocks with JSON-like content
  return content.replace(/```(json)?([^`]+)```/g, (match, type, codeContent) => {
    // Escape curly braces and other potential parsing issues
    const escapedContent = codeContent
      .replace(/\{/g, '&#123;')
      .replace(/\}/g, '&#125;')
      .replace(/\[/g, '&#91;')
      .replace(/\]/g, '&#93;');
    
    return `\`\`\`${type || ''}\n${escapedContent}\n\`\`\``;
  });
}

// Get all docs in a folder (for generating static paths)
export async function getAllDocs(folder: string): Promise<{ slug: string; frontmatter: Frontmatter }[]> {
  const folderPath = path.join(contentDirectory, folder);
  
  // Check if folder exists
  if (!fs.existsSync(folderPath)) {
    return [];
  }
  
  const files = fs.readdirSync(folderPath);
  const docs: { slug: string; frontmatter: Frontmatter }[] = [];

  for (const file of files) {
    if (!file.endsWith('.mdx')) continue;
    
    const slug = file.replace(/\.mdx$/, '');
    const filePath = path.join(folderPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    try {
      // Preprocess the content
      const processedContent = preprocessMDX(fileContent);

      // Extract frontmatter
      const { frontmatter } = await compileMDX<Frontmatter>({
        source: processedContent,
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            format: 'mdx',
          },
        },
      });
      
      docs.push({
        slug,
        frontmatter,
      });
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  return docs;
}

// Helper function to extract headings from MDX content for table of contents
function extractHeadings(content: string): { id: string; title: string; level: number }[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: { id: string; title: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    
    // Generate slug from title (similar to rehype-slug)
    const id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({ id, title, level });
  }

  return headings;
}