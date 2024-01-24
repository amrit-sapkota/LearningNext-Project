import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="green_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        You can find latest AI prompts that will help to ease yourwork. You can
        create and find creative AI Prompts here.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
