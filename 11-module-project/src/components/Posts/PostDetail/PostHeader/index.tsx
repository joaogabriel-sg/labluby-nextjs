import * as S from "./styles";

type Props = {
  title: string;
  image: string;
};

export function PostHeader({ title, image }: Props) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.HeaderImage src={image} alt={title} width={200} height={150} />
    </S.Container>
  );
}
