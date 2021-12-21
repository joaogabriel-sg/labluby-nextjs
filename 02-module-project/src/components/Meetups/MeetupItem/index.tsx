import { Card } from "../..";

import { MeetupType } from "../../../shared/types";
import { useFavorites } from "../../../shared/hooks";

import * as S from "./styles";

type Props = {
  meetup: MeetupType;
};

export function MeetupItem({ meetup }: Props) {
  const { handleAddToFavorites, handleRemoveFromFavorites, isItemFavorite } =
    useFavorites();

  const isFavorite = isItemFavorite(meetup.id);

  function handleToggleFavoriteStatus() {
    if (isFavorite) {
      handleRemoveFromFavorites(meetup.id);
      return;
    }

    handleAddToFavorites(meetup);
  }

  return (
    <S.Container>
      <Card>
        <S.ThumbnailWrapper>
          <S.Thumbnail
            src={meetup.image}
            alt={meetup.title}
            title={meetup.title}
          />
        </S.ThumbnailWrapper>

        <S.Content>
          <S.Title>{meetup.title}</S.Title>
          <S.Address>{meetup.address}</S.Address>
          <S.Description>{meetup.description}</S.Description>
        </S.Content>

        <S.Footer>
          <S.Button onClick={handleToggleFavoriteStatus}>
            {isFavorite ? "Remove from Favorites" : "To Favorites"}
          </S.Button>
        </S.Footer>
      </Card>
    </S.Container>
  );
}
