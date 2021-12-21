import { FormEvent, useRef } from "react";

import { Card } from "../..";

import { NewMeetupType } from "../../../shared/types";

import * as S from "./styles";

type Props = {
  onAddNewMeetup: (newMeetup: NewMeetupType) => void;
};

export function NewMeetupForm({ onAddNewMeetup }: Props) {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmitNewMeetupForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const meetupData = {
      title: titleInputRef.current!.value,
      image: imageInputRef.current!.value,
      address: addressInputRef.current!.value,
      description: descriptionInputRef.current!.value,
    };

    onAddNewMeetup(meetupData);
  }

  return (
    <Card>
      <S.Container onSubmit={handleSubmitNewMeetupForm}>
        <S.Control>
          <S.ControlLabel htmlFor="title">Meetup Title</S.ControlLabel>
          <S.ControlInput ref={titleInputRef} type="text" id="title" required />
        </S.Control>

        <S.Control>
          <S.ControlLabel htmlFor="image">Meetup Image</S.ControlLabel>
          <S.ControlInput ref={imageInputRef} type="url" id="image" required />
        </S.Control>

        <S.Control>
          <S.ControlLabel htmlFor="address">Address</S.ControlLabel>
          <S.ControlInput
            ref={addressInputRef}
            type="text"
            id="address"
            required
          />
        </S.Control>

        <S.Control>
          <S.ControlLabel htmlFor="description">Description</S.ControlLabel>
          <S.ControlTextarea
            ref={descriptionInputRef}
            id="description"
            required
            rows={5}
          ></S.ControlTextarea>
        </S.Control>

        <S.Actions>
          <S.ActionButton type="submit">Add Meetup</S.ActionButton>
        </S.Actions>
      </S.Container>
    </Card>
  );
}
