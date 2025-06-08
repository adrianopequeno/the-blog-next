import { Suspense } from 'react';
import { PostList } from '@/components/PostList';
import SpinLoader from '@/components/SpinLoader';

const HomePage = async () => {
  return (
    <div>
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
