import { PostType } from "@shared/types";
import { PostItem } from "..";

import * as S from "./styles";

type Props = {
  posts: PostType[];
};

export function PostsGrid({ posts }: Props) {
  return (
    <S.Container>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </S.Container>
  );
}
