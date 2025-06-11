import { Suspense } from 'react';
import { PostList } from '@/components/PostList';
import SpinLoader from '@/components/SpinLoader';
import { PostFeatured } from '@/components/PostFeatured';

const HomePage = async () => {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <PostFeatured />
        <PostList />
      </Suspense>
    </>
  );
};

export default HomePage;
