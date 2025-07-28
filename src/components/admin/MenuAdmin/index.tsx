import Link from 'next/link';

export function MenuAdmin() {
  return (
    <nav>
      <Link href="/" target="_blak" rel="noopener noreferrer">
        Home
      </Link>
      <Link href="/admin/post">Posts</Link>
    </nav>
  );
}
