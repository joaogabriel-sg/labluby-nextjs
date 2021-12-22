import { ReactNode } from "react";

import * as S from "./styles";

type Props = {
  link: string;
  children: ReactNode | ReactNode[];
};

export function Button({ link, children }: Props) {
  return (
    <S.Container href={link}>
      <S.LinkButton>{children}</S.LinkButton>
    </S.Container>
  );
}
