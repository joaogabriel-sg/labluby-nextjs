import { GetStaticProps } from "next";
import Head from "next/head";

import { FeaturedPosts, Hero } from "@components";

import { getFeaturedPosts } from "@shared/utils";
import { PostType } from "@shared/types";

type Props = {
  posts: PostType[];
};

function HomePage({ posts }: Props) {
  return (
    <>
      <Head>
        <title>JG&apos;s Blog</title>
        <meta
          name="description"
          content="I blog about web and mobile development - especially React and React Native."
        />
      </Head>
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
