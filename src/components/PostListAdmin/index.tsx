import { findAllPostAdmin } from '@/lib/post/queries/admin';

export default async function PostListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className="py-2 text-3xl">
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </div>
  );
}
