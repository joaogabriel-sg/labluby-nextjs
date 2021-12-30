import * as S from "./styles";

type Props = {
  title: string;
  image: string;
  address: string;
  description: string;
};

export function MeetupDetail({ title, image, address, description }: Props) {
  return (
    <S.Container>
      <S.Image src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Address>{address}</S.Address>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
