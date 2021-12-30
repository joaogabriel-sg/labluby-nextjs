import { FormEvent, useRef } from "react";

import { Card } from "@components";

import { MeetupType } from "@shared/types";

import * as S from "./styles";

type Props = {
  onAddMeetup: (data: Omit<MeetupType, "id">) => Promise<void>;
};

export function NewMeetupForm({ onAddMeetup }: Props) {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current!.value;
    const enteredImage = imageInputRef.current!.value;
    const enteredAddress = addressInputRef.current!.value;
    const enteredDescription = descriptionInputRef.current!.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  }

  return (
    <Card>
      <S.Container onSubmit={submitHandler}>
        <S.FormControl>
          <S.Label htmlFor="title">Meetup Title</S.Label>
          <S.Input type="text" required id="title" ref={titleInputRef} />
        </S.FormControl>
        <S.FormControl>
          <S.Label htmlFor="image">Meetup Image</S.Label>
          <S.Input type="url" required id="image" ref={imageInputRef} />
        </S.FormControl>
        <S.FormControl>
          <S.Label htmlFor="address">Address</S.Label>
          <S.Input type="text" required id="address" ref={addressInputRef} />
        </S.FormControl>
        <S.FormControl>
          <S.Label htmlFor="description">Description</S.Label>
          <S.TextArea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></S.TextArea>
        </S.FormControl>
        <S.Actions>
          <S.AddMeetupButton>Add Meetup</S.AddMeetupButton>
        </S.Actions>
      </S.Container>
    </Card>
  );
}
