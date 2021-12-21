import { NewMeetupForm } from "../../components";

import { NewMeetupType } from "../../shared/types";

import * as S from "./styles";

export function NewMeetup() {
  function handleAddNewMeetup(newMeetup: NewMeetupType) {}

  return (
    <S.Container>
      <S.PageTitle>Add New Meetup</S.PageTitle>
      <NewMeetupForm onAddNewMeetup={handleAddNewMeetup} />
    </S.Container>
  );
}
