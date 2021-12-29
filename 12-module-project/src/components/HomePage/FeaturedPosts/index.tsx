import { PostsGrid } from "@components";

import { PostType } from "@shared/types";

import * as S from "./styles";

type Props = {
  posts: PostType[];
};

export function FeaturedPosts({ posts }: Props) {
  return (
    <S.Container>
      <S.Title>Featured Posts</S.Title>
      <PostsGrid posts={posts} />
    </S.Container>
  );
}
