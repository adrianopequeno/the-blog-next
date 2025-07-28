'use client';

import clsx from 'clsx';
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClasses = clsx(
    'bg-slate-900 text-slate-100 rounded-lg',
    'flex flex-col mb-8',
    'sm:flex-row sm:flex-wrap',
    !isOpen && 'h-10 transition',
    !isOpen && 'overflow-hidden',
    'sm:overflow-visible sm:h-auto',
    'dark:bg-slate-300 dark:text-slate-900'
  );
  const linkClasses = clsx(
    'text-lg',
    '[&>svg]:w-[16px] [&>svg]:h-[16px] px-4',
    'flex items-center justify-start gap-2',
    'transition hover:bg-slate-800 rounded-lg',
    'dark:hover:bg-slate-500 dark:hover:text-slate-100',
    'h-10',
    'shrink-0',
    'cursor-pointer'
  );

  const openCloseBtnClasses = clsx(
    linkClasses,
    ' text-blue-200 italic',
    'sm:hidden',
    'dark:text-slate-800'
  );

  return (
    <nav className={navClasses}>
      <button
        className={openCloseBtnClasses}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        title={isOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsOpen((s) => !s)}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}

        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>
      <Link
        className={linkClasses}
        href="/"
        target="_blak"
        rel="noopener noreferrer"
      >
        <HouseIcon />
        Home
      </Link>
      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon />
        Posts
      </Link>
      <Link className={linkClasses} href="/admin/post/new">
        <PlusIcon />
        Criar Post
      </Link>
    </nav>
  );
}
