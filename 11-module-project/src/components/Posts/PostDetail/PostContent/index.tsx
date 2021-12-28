import ReactMarkdown from "react-markdown";

import { PostHeader } from "@components";

import { PostType } from "@shared/types";

import * as S from "./styles";

type Props = {
  post: PostType;
};

export function PostContent({ post }: Props) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <S.Container>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </S.Container>
  );
}
