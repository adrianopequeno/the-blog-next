'use client';

import { useEffect, useId, useState } from 'react';
import dynamic from 'next/dynamic';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview';
import rehypeSanitize from 'rehype-sanitize'; // sanitiza o conteudo renderizado evitando XSS
import remarkGfm from 'remark-gfm';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

type MarkdownEditorProps = {
  labelText?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  textAreaName: string;
  disabled?: boolean;
};

export function MarkdownEditor({
  labelText = '',
  value,
  setValue,
  textAreaName,
  disabled = false,
}: MarkdownEditorProps) {
  const id = useId();

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme); // Se o tema estiver no localStorage, usamos ele
      document.documentElement.setAttribute('data-color-mode', savedTheme); // Atualiza o atributo 'data-color-mode'
    }
  }, []);

  useEffect(() => {
    // Atualiza o tema no localStorage e no elemento html sempre que mudar
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-color-mode', theme);
  }, [theme]); // Executa toda vez que o tema mudar

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label htmlFor={id} className="text-sm font-medium text-gray-900">
          {labelText}
        </label>
      )}

      <MDEditor
        className="whitespace-pre-wrap"
        value={value}
        onChange={(value) => {
          if (value === undefined) return;
          setValue(value);
        }}
        height={400}
        extraCommands={[]}
        preview="live"
        hideToolbar={disabled}
        textareaProps={{
          id,
          name: textAreaName,
          disabled,
        }}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
          remarkPlugins: [[remarkGfm]],
        }}
      />
    </div>
  );
}
