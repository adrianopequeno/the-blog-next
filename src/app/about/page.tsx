import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About teste',
  description: 'About da página',
};

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  );
};

export default AboutPage;
