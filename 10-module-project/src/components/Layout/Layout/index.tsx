import { ReactNode } from "react";

import { MainHeader } from "..";
import { Notification } from "@components";

import { useNotification } from "@shared/hooks";

import * as S from "./styles";

type Props = {
  children: ReactNode | ReactNode[];
};

export function Layout({ children }: Props) {
  const { notification } = useNotification();

  return (
    <>
      <MainHeader />
      <S.Container>{children}</S.Container>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
}
