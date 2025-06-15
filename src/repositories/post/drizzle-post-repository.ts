import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log('\n', 'D findAllPublic', '\n');

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log('\n', 'D findBySlugPublic', '\n');

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) {
      throw new Error('Post not found for slug');
    }

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    console.log('\n', 'D findAll', '\n');

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    console.log('\n', 'D findById', '\n');

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) {
      throw new Error('Post not found for ID');
    }

    return post;
  }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   // const posts = await repo.findAllPublic();

//   // posts.forEach((post) => console.log(post.slug, post.published));

//   // await repo.findBySlugPublic('post-1');

//   // const posts = await repo.findAll();
//   // posts.forEach((post) => console.log(post.id, post.published));

//   const post = await repo.findById('6b204dab-2312-4525-820a-a0463560835f');
//   console.log(post);
// })();
