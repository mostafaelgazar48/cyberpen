import getPostMetadata from "../components/markdown/getPostMetadata";
import PostPreview from "../components/markdown/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <section className="container text-white">
      <div className="text-center">
        <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-3 gap-4 justify-center -mx-4 ">
            {postPreviews}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
