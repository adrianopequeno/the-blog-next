import { Suspense } from 'react';
import { PostList } from '@/components/PostList';
import SpinLoader from '@/components/SpinLoader';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostFeatured } from '@/components/PostFeatured';

const HomePage = async () => {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
};

export default HomePage;
