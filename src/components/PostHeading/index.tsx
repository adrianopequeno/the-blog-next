import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const PostHeading = ({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingProps) => {
  const headingClassesMap = {
    h1: 'text-4xl/tight font-extrabold sm:text-5xl',
    h2: 'text-2xl/tight font-extrabold sm:text-4xl',
    h3: 'text-1xl/tight font-extrabold sm:text-2xl',
    h4: 'text-xl/tight font-extrabold sm:text-2xl',
    h5: 'text-lg/tight font-extrabold sm:text-xl',
    h6: 'text-base/tight font-extrabold sm:text-lg',
  };

  return (
    <Tag className={headingClassesMap[Tag]}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
};
