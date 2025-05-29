import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The blog - este é um blog com Next.js',
  description: 'Descrição da página',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
