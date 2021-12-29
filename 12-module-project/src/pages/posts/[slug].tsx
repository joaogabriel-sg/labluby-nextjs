import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { PostContent } from "@components";

import { getPostData, getPostsFiles } from "@shared/utils";
import { PostType } from "@shared/types";

type Params = {
  slug: string;
};

type Props = {
  post: PostType;
};

function PostDetailPage({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsFilenames = getPostsFiles();
  const slugs = postsFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { slug } = context.params as Params;

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
};

export default PostDetailPage;
