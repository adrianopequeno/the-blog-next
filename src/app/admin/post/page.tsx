import { findAllPostAdmin } from '@/lib/post/queries/admin';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {
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
