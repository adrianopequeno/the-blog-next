import { PostHeading } from '@/components/PostHeading';
import { PostDate } from '@/components/PostDate/inde';

type PostSummaryProps = {
  postHeading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export const PostSummary = ({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) => {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate createdAt={createdAt} />
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
};
