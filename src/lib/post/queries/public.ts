import { cache } from 'react';
import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { unstable_cache } from 'next/cache';

export const findAllPublicPostsCached = unstable_cache(
  cache(async () => {
    return await postRepository.findAllPublic();
  }),
  ['posts'],
  {
    tags: ['posts'],
  }
);

export const findPublicPostBySlugCached = (slug: string) =>
  unstable_cache(
    cache(async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);

      if (!post) notFound();

      return post;
    }),
    ['posts'],
    {
      tags: [`post-${slug}`],
    }
  )(slug);
