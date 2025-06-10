import { formatDistanceToNow, getFormattedDate } from '@/utils/format-datetime';
import { PostHeading } from '@/components/PostHeading';

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
      <time
        className="text-slate-600 block text-sm/tight"
        dateTime={createdAt}
        title={formatDistanceToNow(createdAt)}
      >
        {getFormattedDate(createdAt)}
      </time>
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
};
