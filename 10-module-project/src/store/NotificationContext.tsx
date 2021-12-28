import { createContext, ReactNode, useEffect, useState } from "react";

type Notification = {
  title: string;
  message: string;
  status: "success" | "error" | "pending";
};

type NotificationContextProps = {
  notification: Notification | null;
  hideNotification: () => void;
  showNotification: (notificationData: Notification) => void;
};

type NotificationProviderProps = {
  children: ReactNode | ReactNode[];
};

export const NotificationContext = createContext<NotificationContextProps>(
  {} as NotificationContextProps
);

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [notification, setNotification] = useState<Notification | null>(null);

  function showNotification(notificationData: Notification) {
    setNotification(notificationData);
  }

  function hideNotification() {
    setNotification(null);
  }

  useEffect(() => {
    if (
      notification &&
      (notification.status === "success" || notification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  return (
    <NotificationContext.Provider
      value={{ notification, hideNotification, showNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
