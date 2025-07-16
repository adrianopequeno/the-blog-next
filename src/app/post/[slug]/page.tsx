import { Metadata } from 'next';
import { Suspense } from 'react';
import { SinglePost } from '@/components/SinglePost';
import SpinLoader from '@/components/SpinLoader';
import { findPostBySlugCached } from '@/lib/post/queries';

export const dynamic = 'force-static';

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

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
};

export default PostSlugPage;
