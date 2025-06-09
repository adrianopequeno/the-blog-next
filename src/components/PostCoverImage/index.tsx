import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export const PostCoverImage = ({
  imageProps,
  linkProps,
}: PostCoverImageProps) => {
  return (
    <Link
      {...linkProps}
      className={clsx(
        'w-full',
        'h-full',
        'overflow-hidden',
        'rounded-xl',
        linkProps.className
      )}
    >
      <Image
        {...imageProps}
        alt={imageProps.alt}
        className={clsx(
          'group-hover:scale-105',
          'transition',
          'duration-300',
          'h-[inherit]',
          'object-cover',
          'object-center',
          imageProps.className
        )}
      />
    </Link>
  );
};
