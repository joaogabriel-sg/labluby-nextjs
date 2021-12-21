import { useFavorites } from "../../../shared/hooks";

import * as S from "./styles";

export function MainNavigation() {
  const { totalFavorites } = useFavorites();

  return (
    <S.Container>
      <S.Logo>React Meetups</S.Logo>

      <S.Navigation>
        <S.Menu>
          <S.MenuItem>
            <S.MenuLink to="/">All Meetups</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/new-meetup">Add New Meetup</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/favorites">
              My Favorites <S.TotalFavorites>{totalFavorites}</S.TotalFavorites>
            </S.MenuLink>
          </S.MenuItem>
        </S.Menu>
      </S.Navigation>
    </S.Container>
  );
}
