import { Metadata } from 'next';
import { Suspense } from 'react';
import { SinglePost } from '@/components/SinglePost';
import SpinLoader from '@/components/SpinLoader';
import {
  findAllPublicPostsCached,
  findPostBySlugCached,
} from '@/lib/post/queries';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: PostSlugPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
};

export const generateStaticParams = async () => {
  const posts = await findAllPublicPostsCached();
  const params = posts.map((post) => ({ slug: post.slug }));

  console.log(params);

  return params;
};

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
};

export default PostSlugPage;
