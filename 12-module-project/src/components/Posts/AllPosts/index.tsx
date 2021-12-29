import { PostsGrid } from "@components";

import { PostType } from "@shared/types";

import * as S from "./styles";

type Props = {
  posts: PostType[];
};

export function AllPosts({ posts }: Props) {
  return (
    <S.Container>
      <S.Title>All Posts</S.Title>
      <PostsGrid posts={posts} />
    </S.Container>
  );
}
