import { GetStaticProps } from "next";
import Head from "next/head";

import { AllPosts } from "@components";

import { getAllPosts } from "@shared/utils";
import { PostType } from "@shared/types";

type Props = {
  posts: PostType[];
};

function AllPostsPage({ posts }: Props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
