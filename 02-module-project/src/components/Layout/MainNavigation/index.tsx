import * as S from "./styles";

export function MainNavigation() {
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
            <S.MenuLink to="/favorites">My Favorites</S.MenuLink>
          </S.MenuItem>
        </S.Menu>
      </S.Navigation>
    </S.Container>
  );
}
