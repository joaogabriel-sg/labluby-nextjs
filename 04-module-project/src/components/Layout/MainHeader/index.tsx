import * as S from "./styles";

export function MainHeader() {
  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo href="/">NextEvents</S.Logo>
      </S.LogoWrapper>

      <S.Nav>
        <S.NavLinks>
          <S.NavItem>
            <S.NavLink href="/events">Browse All Events</S.NavLink>
          </S.NavItem>
        </S.NavLinks>
      </S.Nav>
    </S.Container>
  );
}
