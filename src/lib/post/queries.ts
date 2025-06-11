import { cache } from 'react';
import { postRepository } from '@/repositories/post';

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic()
);

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findBySlug(id)
);

export const findPostBySlugCached = cache(
  async (slug: string) => await postRepository.findBySlug(slug)
);
