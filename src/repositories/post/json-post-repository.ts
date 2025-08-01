import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { SIMULATE_WAIT_IN_MS } from '@/lib/constants';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json'
);

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise((resolve) => {
      setTimeout(resolve, SIMULATE_WAIT_IN_MS);
    });
  }

  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();

    console.log('\n', 'findAllPublic', '\n');

    const posts = await this.readFromDisk();
    return posts.filter((post: PostModel) => post.published);
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();

    console.log('\n', 'findAll', '\n');

    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post: PostModel) => post.id === id);
    if (!post) {
      throw new Error('Post not found for id');
    }
    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post: PostModel) => post.slug === slug);
    if (!post) {
      throw new Error('Post not found for slug');
    }
    return post;
  }
}
