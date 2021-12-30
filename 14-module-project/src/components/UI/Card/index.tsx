import { ReactNode } from "react";

import * as S from "./styles";

type Props = {
  children: ReactNode | ReactNode[];
};

export function Card({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
