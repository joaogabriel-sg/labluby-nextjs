import { PostType } from "@shared/types";

import * as S from "./styles";

type Props = {
  post: PostType;
};

export function PostItem({ post }: Props) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <S.Container>
      <S.PostLink href={`/posts/${post.slug}`}>
        <S.PostWrapper>
          <S.ThumbnailWrapper>
            <S.Thumbnail
              src={`/images/posts/${post.slug}/${post.image}`}
              alt={post.title}
              width={300}
              height={200}
              layout="responsive"
            />
          </S.ThumbnailWrapper>

          <S.Content>
            <S.Title>{post.title}</S.Title>
            <S.Date>{formattedDate}</S.Date>
            <S.Excerpt>{post.excerpt}</S.Excerpt>
          </S.Content>
        </S.PostWrapper>
      </S.PostLink>
    </S.Container>
  );
}
