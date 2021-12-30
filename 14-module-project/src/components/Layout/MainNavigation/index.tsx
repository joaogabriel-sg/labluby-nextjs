import Link from "next/link";

import * as S from "./styles";

export function MainNavigation() {
  return (
    <S.Container>
      <S.Logo>React Meetups</S.Logo>
      <S.NavMenu>
        <S.NavList>
          <S.NavItem>
            <Link href="/">All Meetups</Link>
          </S.NavItem>
          <S.NavItem>
            <Link href="/new-meetup">Add New Meetup</Link>
          </S.NavItem>
        </S.NavList>
      </S.NavMenu>
    </S.Container>
  );
}
