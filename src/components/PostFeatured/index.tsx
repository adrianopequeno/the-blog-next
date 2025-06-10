import { PostCoverImage } from '@/components/PostCoverImage';
import { PostSummary } from '@/components/PostSummary';

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
      <PostSummary
        postHeading="h2"
        createdAt={'2025-06-09T20:26:54.116Z'}
        excerpt={
          'O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.'
        }
        postLink={postLink}
        title={'Rotina matinal de pessoas altamente eficazes'}
      />
    </section>
  );
};
