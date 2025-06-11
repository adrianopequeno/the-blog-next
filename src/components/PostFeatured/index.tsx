import { PostCoverImage } from '@/components/PostCoverImage';
import { PostSummary } from '@/components/PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export const PostFeatured = async () => {
  const posts = await findAllPublicPostsCached();
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
