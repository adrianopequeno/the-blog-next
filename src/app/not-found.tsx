import clsx from 'clsx';

const NotFount = () => {
  return (
    <>
      <title>Página não encontrada</title>
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
          <h1 className="text-7xl/tight mb-4 font-extrabold">404 😱</h1>
          <p>
            Erro 404 - A página que você está tentando acessar não existe neste
            site.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFount;
