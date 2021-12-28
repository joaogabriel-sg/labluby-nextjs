import { GetStaticProps } from "next";

import { FeaturedPosts, Hero } from "@components";

import { getFeaturedPosts } from "@shared/utils";
import { PostType } from "@shared/types";

type Props = {
  posts: PostType[];
};

function HomePage({ posts }: Props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
