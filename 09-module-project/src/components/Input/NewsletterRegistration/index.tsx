import { FormEvent, useRef } from "react";

import * as S from "./styles";

export function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);

  function registrationHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = emailInputRef.current!.value;

    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
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
