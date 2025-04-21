// src/app/docs/CodeBlock.tsx
import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  language = 'text', 
  title 
}) => {
  return (
    <div className="relative my-4 rounded-lg">
      {title && (
        <div className="code-block-header">
          <span>{title}</span>
        </div>
      )}
      <pre className={`language-${language} rounded-lg bg-gray-800 p-4 text-gray-200 overflow-x-auto`}>
        <code className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;