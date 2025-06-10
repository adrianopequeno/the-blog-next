import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostSummary } from '@/components/PostSummary';

export const PostList = async () => {
  const posts = await postRepository.fintAll();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className="flex flex-col group gap-4" key={post.id}>
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
              postHeading="h3"
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              postLink={postLink}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
};
