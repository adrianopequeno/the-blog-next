import clsx from 'clsx';
import Markdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkdownProps = {
  markdown: string;
};

export const SafeMarkdown = ({ markdown }: SafeMarkdownProps) => {
  return (
    <div
      className={clsx(
        'prose prose-slate',
        'w-full max-w-none',
        'overflow-hidden',
        'prose-a:transition',
        'prose-a:no-underline',
        'prose-a:text-blue-500',
        'prose-a:hover:text-blue-700',
        'prose-a:hover:underline',
        'prose-img:mx-auto',
        'dark:prose-p:text-slate-100',
        'dark:prose-h1:text-slate-100',
        'dark:prose-h2:text-slate-100',
        'dark:prose-h3:text-slate-100',
        'dark:prose-strong:text-slate-100',
        'dark:prose-li:text-slate-100',
        'dark:prose-th:text-slate-100',
        'dark:prose-tr:text-slate-100',
        'dark:prose-td:text-slate-500',
        'dark:prose-code:text-slate-500',
        'md:prose-lg'
      )}
    >
      <Markdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return '';

            return (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]" {...props} />
              </div>
            );
          },
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
};
