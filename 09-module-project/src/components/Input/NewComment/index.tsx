import { FormEvent, useRef, useState } from "react";

import * as S from "./styles";

type OnAddCommentProps = {
  email: string;
  name: string;
  text: string;
};

type Props = {
  onAddComment: (props: OnAddCommentProps) => void;
};

export function NewComment({ onAddComment }: Props) {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  function sendCommentHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredName = nameInputRef.current!.value;
    const enteredComment = commentInputRef.current!.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  }

  return (
    <S.Container onSubmit={sendCommentHandler}>
      <S.FormRow>
        <S.FormControl>
          <S.Label htmlFor="email">Your email</S.Label>
          <S.InputField type="email" id="email" ref={emailInputRef} />
        </S.FormControl>
        <S.FormControl>
          <S.Label htmlFor="name">Your name</S.Label>
          <S.InputField type="text" id="name" ref={nameInputRef} />
        </S.FormControl>
      </S.FormRow>
      <S.FormControl>
        <S.Label htmlFor="comment">Your comment</S.Label>
        <S.TextareaField
          id="comment"
          rows={5}
          ref={commentInputRef}
        ></S.TextareaField>
      </S.FormControl>
      {isInvalid && (
        <S.ErrorMessage>
          Please enter a valid email address and comment!
        </S.ErrorMessage>
      )}
      <S.SubmitButton>Submit</S.SubmitButton>
    </S.Container>
  );
}
