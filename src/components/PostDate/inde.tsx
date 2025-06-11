import { formatDistanceToNow, getFormattedDate } from '@/utils/format-datetime';

type PostDateProps = {
  createdAt: string;
};

export const PostDate = ({ createdAt }: PostDateProps) => {
  return (
    <time
      className="text-slate-600 block text-sm/tight"
      dateTime={createdAt}
      title={formatDistanceToNow(createdAt)}
    >
      {getFormattedDate(createdAt)}
    </time>
  );
};
