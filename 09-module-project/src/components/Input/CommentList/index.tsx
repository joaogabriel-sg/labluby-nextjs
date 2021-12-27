import * as S from "./styles";

type CommentType = {
  id: string;
  name: string;
  text: string;
};

type Props = {
  comments: CommentType[];
};

export function CommentList({ comments }: Props) {
  return (
    <S.Container>
      {comments.map((comment) => (
        <S.Comment key={comment.id}>
          <S.Message>{comment.text}</S.Message>
          <S.User>
            By <S.UserName>{comment.name}</S.UserName>
          </S.User>
        </S.Comment>
      ))}
    </S.Container>
  );
}
