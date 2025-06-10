import type { Metadata } from 'next';
import './globals.css';
import { ThemeButton } from '@/components/ThemeButton';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'The blog - este é um blog com Next.js',
    template: '%s | The blog',
  },
  description: 'Descrição da página',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR" className="light">
      <body>
        <ThemeButton />
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
