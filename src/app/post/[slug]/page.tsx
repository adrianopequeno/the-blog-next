type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params;
  return (
    <div>
      <h1 className="text-7xl font-extrabold py-16">Slug Page: {slug}</h1>
    </div>
  );
};

export default PostSlugPage;
