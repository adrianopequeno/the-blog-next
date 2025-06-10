import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="pb-16 text-center">
      <p>
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link className="hover:underline decoration-dotted" href="/">
          The Blog
        </Link>
      </p>
    </footer>
  );
};
