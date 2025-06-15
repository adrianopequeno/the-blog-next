import { findPostBySlugCached } from '@/lib/post/queries';
import Image from 'next/image';
import { PostHeading } from '@/components/PostHeading';
import { PostDate } from '@/components/PostDate/inde';
import { SafeMarkdown } from '@/components/SafeMarkdown';

type SinglePostProps = {
  slug: string;
};

export const SinglePost = async ({ slug }: SinglePostProps) => {
  const post = await findPostBySlugCached(slug);
  return (
    <article className="mb-16">
      <header className="group flex flex-col gap-4 mb-4">
        <Image
          className="rounded-xl"
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
          priority={true}
        />
        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>
        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>
      <p className="text-xl mb-4 text-slate-600">{post.excerpt}</p>

      <SafeMarkdown markdown={post.content} />
    </article>
  );
};
