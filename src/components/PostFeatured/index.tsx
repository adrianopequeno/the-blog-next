import { PostCoverImage } from '@/components/PostCoverImage';
import { PostSummary } from '@/components/PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries/public';
import ErrorMessage from '../ErrorMessage';

export const PostFeatured = async () => {
  const posts = await findAllPublicPostsCached();

  if (posts.length <= 0) {
    return (
      <ErrorMessage
        contentTitle="Ops! 😅"
        content="Ainda não criamos nenhum post"
      />
    );
  }

  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          src: post.coverImageUrl,
          alt: post.title,
          width: 1200,
          height: 720,
          priority: true,
        }}
      />
      <PostSummary
        postHeading="h2"
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        postLink={postLink}
        title={post.title}
      />
    </section>
  );
};
