import { useContext } from "react";

import { NotificationContext } from "@store/NotificationContext";

export function useNotification() {
  const context = useContext(NotificationContext);
  return context;
}
