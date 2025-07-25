import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findPostByIdAdmin = cache(async (id: string) => {
  return await postRepository.findBySlugPublic(id);
});

export const findAllPostAdmin = cache(async () => {
  return await postRepository.findAll();
});
