import ErrorMessage from '@/components/ErrorMessage';

const NotFount = () => {
  return (
    <ErrorMessage
      pageTitle="Página não encontrada 😱"
      contentTitle="404"
      content={
        <p>
          Erro 404 - A página que você está tentando acessar não existe neste
          site.
        </p>
      }
    />
  );
};

export default NotFount;
