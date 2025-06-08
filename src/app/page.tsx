import { Suspense } from 'react';
import { PostList } from '@/components/PostList';
import SpinLoader from '@/components/SpinLoader';
import { Container } from '@/components/Container';

const HomePage = async () => {
  return (
    <Container>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">
          Título da página
        </h1>
      </header>
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
