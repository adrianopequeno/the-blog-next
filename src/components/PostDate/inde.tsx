import { formatDistanceToNow, getFormattedDate } from '@/utils/format-datetime';

type PostDateProps = {
  dateTime: string;
};

export const PostDate = ({ dateTime }: PostDateProps) => {
  return (
    <time
      className="text-slate-600 text-sm/tight"
      dateTime={dateTime}
      title={formatDistanceToNow(dateTime)}
    >
      {getFormattedDate(dateTime)}
    </time>
  );
};
