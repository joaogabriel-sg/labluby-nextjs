import { FormEvent, useRef } from "react";

import { useNotification } from "@shared/hooks";

import * as S from "./styles";

export function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);

  const { showNotification } = useNotification();

  function registrationHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = emailInputRef.current!.value;

    showNotification({
      title: "Signing up...",
      message: "Registering for newsletter.",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) return response.json();

        return response.json().then((data) => {
          throw new Error(data.error || data.message || "Something went wrong");
        });
      })
      .then(() => {
        showNotification({
          title: "Success!",
          message: "Successfully registered for newsletter!",
          status: "success",
        });
      })
      .catch((error) => {
        showNotification({
          title: "Error!",
          message: error.message || "Something went wrong!",
          status: "error",
        });
      });
  }

  return (
    <S.Container>
      <S.Title>Sign up to stay updated!</S.Title>
      <S.Form onSubmit={registrationHandler}>
        <S.FormControl>
          <S.InputField
            ref={emailInputRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <S.RegisterButton>Register</S.RegisterButton>
        </S.FormControl>
      </S.Form>
    </S.Container>
  );
}
