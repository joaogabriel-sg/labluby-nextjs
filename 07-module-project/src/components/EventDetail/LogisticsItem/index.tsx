import { ComponentType, ReactNode } from "react";

import * as S from "./styles";

type Props = {
  icon: ComponentType;
  children: ReactNode | ReactNode[];
};

export function LogisticsItem({ icon: Icon, children }: Props) {
  return (
    <S.Container>
      <S.IconWrapper>
        <Icon />
      </S.IconWrapper>
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
    </S.Container>
  );
}
