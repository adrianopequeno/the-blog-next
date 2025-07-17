import { findAllPostAdmin } from '@/lib/post/queries/admin';
import { DeletePostButton } from '@/components/admin/DeletePostButton';
import clsx from 'clsx';
import Link from 'next/link';

export default async function PostListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              'p-2',
              !post.published && 'bg-slate-400',
              'flex gap-2 items-center justify-between'
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className="text-xs text-slate-600 italic">
                (Não publicado)
              </span>
            )}

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
