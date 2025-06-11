import Markdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkdownProps = {
  markdown: string;
};

export const SafeMarkdown = ({ markdown }: SafeMarkdownProps) => {
  return (
    <div>
      <Markdown rehypePlugins={[rehypeSanitize]} remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    </div>
  );
};
