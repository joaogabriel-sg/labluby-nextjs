import ReactDOM from "react-dom";

import * as S from "./styles";

export type NotificationType = {
  title: string;
  message: string;
  status: "success" | "error" | "pending";
};

export function Notification({ title, message, status }: NotificationType) {
  return ReactDOM.createPortal(
    <S.Container status={status}>
      <S.Title>{title}</S.Title>
      <S.Message>{message}</S.Message>
    </S.Container>,
    document.getElementById("root-notifications")!
  );
}
