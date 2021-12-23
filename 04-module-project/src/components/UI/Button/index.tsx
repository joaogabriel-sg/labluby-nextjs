import { ReactNode } from "react";

import * as S from "./styles";

type Props = {
  link?: string;
  children: ReactNode | ReactNode[];
  onClick?: () => void;
};

export function Button({ link, children, onClick }: Props) {
  if (link) {
    return (
      <S.Container href={link}>
        <S.LinkButton>{children}</S.LinkButton>
      </S.Container>
    );
  }

  return <S.NormalButton onClick={onClick}>{children}</S.NormalButton>;
}
