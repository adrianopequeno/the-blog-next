'use client';

import clsx from 'clsx';

type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export function Dialog({
  isVisible = false,
  title,
  content,
  onConfirm,
  onCancel,
  disabled = false,
}: DialogProps) {
  if (!isVisible) return null;

  function handleCancal() {
    if (disabled) return;

    onCancel();
  }

  return (
    <div
      className={clsx(
        'fixed z-50 inset-0 bg-black/50 backdrop-blur-xs',
        'flex items-center justify-center'
      )}
      onClick={handleCancal}
    >
      <div
        className={clsx(
          'bg-slate-100 p-6 rounded-lg max-w-2xl mx-6',
          'flex flex-col gap-6',
          'shadow-lg shadow-black/40 text-center',
          'dark:bg-slate-500'
        )}
        role="dialog"
        aria-modal={true}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="dialog-title" className="text-xl font-extrabold">
          {title}
        </h3>
        <div id="dialog-description">{content}</div>
        <div className="flex items-center justify-around">
          <button
            className={clsx(
              'bg-slate-300 hover:bg-slate-400 transition text-slate-950 rounded-lg',
              'flex items-center justify-center',
              'py-2 px-4 cursor-pointer',
              'disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed'
            )}
            onClick={handleCancal}
            autoFocus
            disabled={disabled}
          >
            Cancelar
          </button>
          <button
            className={clsx(
              'bg-blue-500 hover:bg-blue-600 transition text-blue-50 rounded-lg',
              'flex items-center justify-center',
              'py-2 px-4 cursor-pointer',
              'disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed'
            )}
            onClick={onConfirm}
            disabled={disabled}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
