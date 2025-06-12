import clsx from 'clsx';

type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

const ErrorMessage = ({
  pageTitle,
  contentTitle,
  content,
}: ErrorMessageProps) => {
  return (
    <>
      <title>{pageTitle}</title>
      <div
        className={clsx(
          'min-h-[320px] bg-slate-900 text-slate-100',
          'mb-16 p-8 rounded-xl',
          'flex items-center justify-center',
          'text-center',
          'dark:bg-slate-300 dark:text-slate-900'
        )}
      >
        <div>
          <h1 className="text-7xl/tight mb-4 font-extrabold">
            {contentTitle} 😱
          </h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
};

export default ErrorMessage;
