type ConstinerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ConstinerProps) => {
  return (
    <div className="text-slate-900 bg-slate-300 min-h-screen dark:bg-slate-900 dark:text-slate-100">
      <div className="max-w-screen-lg mx-auto px-8">{children}</div>
    </div>
  );
};
