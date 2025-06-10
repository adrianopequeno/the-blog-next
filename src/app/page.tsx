import { Suspense } from 'react';
import { PostList } from '@/components/PostList';
import SpinLoader from '@/components/SpinLoader';
import { PostFeatured } from '@/components/PostFeatured';

const HomePage = async () => {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </>
  );
};

export default HomePage;
