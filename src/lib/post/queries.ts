import { cache } from 'react';
import { postRepository } from '@/repositories/post';

export const findAllPublicPosts = cache(
  async () => await postRepository.findAllPublic()
);
