import { MeetupList } from "../../components";

import { useFavorites } from "../../shared/hooks";

import * as S from "./styles";

export function Favorites() {
  const { favorites, totalFavorites } = useFavorites();

  return (
    <S.Container>
      <S.PageTitle>My Favorites</S.PageTitle>

      {totalFavorites === 0 && (
        <S.EmptyMessage>
          You got no favorites yet. Start adding some?
        </S.EmptyMessage>
      )}

      {totalFavorites > 0 && <MeetupList meetups={favorites} />}
    </S.Container>
  );
}
