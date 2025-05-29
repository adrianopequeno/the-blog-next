import clsx from 'clsx';

const HomePage = () => {
  return (
    <div>
      <h1
        className={clsx(
          'text-xl',
          'font-bold',
          'text-blue-500',
          'hover:text-white',
          'hover:bg-blue-500',
          'transition',
          'duration-300'
        )}
      >
        Texto H1
      </h1>
    </div>
  );
};

export default HomePage;
