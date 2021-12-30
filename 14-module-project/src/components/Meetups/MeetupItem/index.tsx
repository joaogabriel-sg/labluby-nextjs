import { useRouter } from "next/router";

import { Card } from "@components";

import * as S from "./styles";

type Props = {
  id: string;
  image: string;
  title: string;
  address: string;
};

export function MeetupItem({ id, address, image, title }: Props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push(`/${id}`);
  }

  return (
    <S.Container>
      <Card>
        <S.ImageWrapper>
          <S.Image src={image} alt={title} />
        </S.ImageWrapper>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Address>{address}</S.Address>
        </S.Content>
        <S.Actions>
          <S.ShowDetailsButton onClick={showDetailsHandler}>
            Show Details
          </S.ShowDetailsButton>
        </S.Actions>
      </Card>
    </S.Container>
  );
}
