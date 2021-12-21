import { useNavigate } from "react-router-dom";

import { NewMeetupForm } from "../../components";

import { NewMeetupType } from "../../shared/types";

import * as S from "./styles";

export function NewMeetup() {
  const navigate = useNavigate();

  function handleAddNewMeetup(newMeetup: NewMeetupType) {
    fetch(`${process.env.REACT_APP_FIREBASE_API_URL}/meetups.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeetup),
    }).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <S.Container>
      <S.PageTitle>Add New Meetup</S.PageTitle>
      <NewMeetupForm onAddNewMeetup={handleAddNewMeetup} />
    </S.Container>
  );
}
