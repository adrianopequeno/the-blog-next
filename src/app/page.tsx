import { Suspense } from 'react';
import { PostList } from '@/components/PostList';
import SpinLoader from '@/components/SpinLoader';

const HomePage = async () => {
  return (
    <div className="text-slate-900 bg-slate-300 min-h-screen dark:bg-slate-900 dark:text-slate-100">
      <h1>Título da página</h1>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default HomePage;
