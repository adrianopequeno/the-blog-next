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

      <div
        className={clsx(
          'fixed z-50 inset-0 bg-black/50 backdrop-blur-xs',
          'flex items-center justify-center'
        )}
      >
        <div
          className={clsx(
            'bg-slate-100 p-6 rounded-lg max-w-2xl mx-6',
            'flex flex-col gap-6',
            'shadow-lg shadow-black/40 text-center'
          )}
        >
          <h3 className="text-xl font-extrabold">Título do diálogo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            eveniet. Ipsum, commodi ipsam, dignissimos, deleniti ipsa nemo
            corrupti molestias libero rerum aliquid ratione repudiandae! Sed
            sequi itaque culpa dolore iusto.
          </p>
          <div className="flex items-center justify-around">
            <button
              className={clsx(
                'bg-slate-300 hover:bg-slate-400 transition text-slate-950 rounded-lg',
                'flex items-center justify-center',
                'py-2 px-4 cursor-pointer'
              )}
              autoFocus
            >
              Cancelar
            </button>
            <button
              className={clsx(
                'bg-blue-500 hover:bg-blue-600 transition text-blue-50 rounded-lg',
                'flex items-center justify-center',
                'py-2 px-4 cursor-pointer'
              )}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
