import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export const PostFeatured = () => {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          src: '/images/bryen_9.png',
          alt: 'Alt da imagem',
          width: 1200,
          height: 720,
          priority: true,
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2025-05-20"
        >
          20-05-2025 10:00
        </time>
        <PostHeading url={postLink}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          facilis deserunt, nulla beatae quibusdam perspiciatis excepturi modi
          voluptatibus voluptatem reiciendis magnam est totam rem perferendis
          hic pariatur corrupti magni. Non!
        </p>
      </div>
    </section>
  );
};
