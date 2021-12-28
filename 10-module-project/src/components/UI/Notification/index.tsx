import { useNotification } from "@shared/hooks";

import * as S from "./styles";

type Props = {
  title: string;
  message: string;
  status: "success" | "error" | "pending";
};

export function Notification({ title, message, status }: Props) {
  const { hideNotification } = useNotification();

  return (
    <S.Container status={status} onClick={hideNotification}>
      <S.Title>{title}</S.Title>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
