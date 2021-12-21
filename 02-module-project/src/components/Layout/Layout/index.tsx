import { ReactNode } from "react";

import { MainNavigation } from "..";

import * as S from "./styles";

type Props = {
  children: ReactNode | ReactNode[];
};

export function Layout({ children }: Props) {
  return (
    <S.Container>
      <MainNavigation />
      <S.Main>{children}</S.Main>
    </S.Container>
  );
}
