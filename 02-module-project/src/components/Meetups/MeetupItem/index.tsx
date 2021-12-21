import { Card } from "../..";

import * as S from "./styles";

type Props = {
  title: string;
  address: string;
  imageUrl: string;
  description: string;
};

export function MeetupItem({ title, address, description, imageUrl }: Props) {
  return (
    <S.Container>
      <Card>
        <S.ThumbnailWrapper>
          <S.Thumbnail src={imageUrl} alt={title} title={title} />
        </S.ThumbnailWrapper>

        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Address>{address}</S.Address>
          <S.Description>{description}</S.Description>
        </S.Content>

        <S.Footer>
          <S.Button>To Favorites</S.Button>
        </S.Footer>
      </Card>
    </S.Container>
  );
}
