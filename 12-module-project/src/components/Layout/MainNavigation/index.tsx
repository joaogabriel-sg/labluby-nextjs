import { Logo } from "..";

import * as S from "./styles";

export function MainNavigation() {
  return (
    <S.Container>
      <S.LogoLink href="/">
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
      </S.LogoLink>

      <S.NavBar>
        <S.NavList>
          <S.NavItem>
            <S.NavLink href="/posts">Posts</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="/contact">Contact</S.NavLink>
          </S.NavItem>
        </S.NavList>
      </S.NavBar>
    </S.Container>
  );
}
