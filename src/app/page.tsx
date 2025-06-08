import SpinLoader from '@/components/SpinLoader';
import clsx from 'clsx';

const HomePage = () => {
  return (
    <div>
      <SpinLoader containerClasses={clsx('min-h-[500px]', 'bg-amber-500')} />
    </div>
  );
};

export default HomePage;
