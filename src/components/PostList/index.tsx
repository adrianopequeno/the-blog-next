import { postRepository } from '@/repositories/post';

export const PostList = async () => {
  const posts = await postRepository.fintAll();

  return (
    <div>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};
