import { FormEvent, useEffect, useState } from "react";

import { Notification, NotificationType } from "@components";

import * as S from "./styles";

type RequestStatusType = "success" | "error" | "pending";

type ContactType = {
  email: string;
  message: string;
  name: string;
};

async function sendContactData(contactDetails: ContactType) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactDetails),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong!");
  }
}

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState<RequestStatusType | null>(
    null
  );
  const [requestError, setRequestError] = useState("");

  async function handleSendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({ email, message, name });
      setRequestStatus("success");
      setEmail("");
      setName("");
      setMessage("");
    } catch (error: any) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError("");
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  let notification: NotificationType | null = null;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message send successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <S.Container>
      <S.Title>How can I help you?</S.Title>

      <S.Form onSubmit={handleSendMessage}>
        <S.FormControls>
          <S.FormControl>
            <S.Label htmlFor="email">Your Email</S.Label>
            <S.Input
              type="email"
              id="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
          </S.FormControl>

          <S.FormControl>
            <S.Label htmlFor="name">Your Name</S.Label>
            <S.Input
              type="text"
              id="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
              required
            />
          </S.FormControl>
        </S.FormControls>

        <S.FormControl>
          <S.Label htmlFor="message">Your Message</S.Label>
          <S.TextArea
            id="message"
            rows={5}
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          ></S.TextArea>
        </S.FormControl>

        <S.Actions>
          <S.SubmitButton type="submit">Send Message</S.SubmitButton>
        </S.Actions>
      </S.Form>

      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </S.Container>
  );
}
