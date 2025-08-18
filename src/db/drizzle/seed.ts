import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonPostsRepository = new JsonPostRepository();
  const posts = await jsonPostsRepository.findAll();

  console.log();
  console.log(`${posts.length} foram salvos na base de dados`);
  console.log();

  try {
    await drizzleDb.delete(postsTable);
    await drizzleDb.insert(postsTable).values(posts);
  } catch (error) {
    console.log();
    console.log('Ocorreu um erro...');
    console.log();
    console.log(error);
    console.log();
  }
})();
