import { ReactNode } from "react";

import { MainHeader } from "..";

import * as S from "./styles";

type Props = {
  children: ReactNode | ReactNode[];
};

export function Layout({ children }: Props) {
  return (
    <>
      <MainHeader />
      <S.Container>{children}</S.Container>
    </>
  );
}
