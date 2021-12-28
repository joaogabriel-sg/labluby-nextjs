import { GetStaticProps } from "next";

import { AllPosts } from "@components";

import { getAllPosts } from "@shared/utils";
import { PostType } from "@shared/types";

type Props = {
  posts: PostType[];
};

function AllPostsPage({ posts }: Props) {
  return <AllPosts posts={posts} />;
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
