'use client';

import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  function hanldeClick() {
    alert('Botão clicado: ' + id);
  }
  return (
    <button
      className={clsx(
        'text-red-500 cursor-pointer transition',
        '[&_svg]:w-4 [&_svg]:h-4',
        'hover:scale-120 hover:text-red-600'
      )}
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={hanldeClick}
    >
      <Trash2Icon />
    </button>
  );
}
