'use client';

import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import 'highlight.js/styles/github-dark.css';

export default function MarkdownRenderer({ content }) {
  return (
    <article className="max-w-none text-gray-900">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          p: ({ children }) => (
            <p className="mb-5 leading-relaxed">
              {children}
            </p>
          ),
          h2: ({ children }) => (
            <h2 className="mt-10 mb-4 text-2xl font-bold">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 mb-3 text-xl font-semibold">
              {children}
            </h3>
          ),
          pre: ({ children }) => (
            <pre className="mb-6 mt-4 rounded-lg overflow-x-auto">
              {children}
            </pre>
          ),
          ul: ({ children }) => (
            <ul className="mb-5 list-disc pl-6">
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className="mb-2">
              {children}
            </li>
          ),
          table: ({ children }) => (
            <table className="my-6 w-full border-collapse border border-gray-300">
              {children}
            </table>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 px-4 py-2">
              {children}
            </td>
          ),
          img: ({ src, ...props }) => {
            const fullSrc = src.startsWith('http')
              ? src
              : `${process.env.NEXT_PUBLIC_BACKEND_URL}${src}`;

            return (
              <img
                src={fullSrc}
                className="my-6 rounded-lg"
                {...props}
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
