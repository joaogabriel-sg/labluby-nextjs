import { useEffect, useState } from "react";

import { MeetupList } from "../../components";

import { MeetupType } from "../../shared/types";

import * as S from "./styles";

export function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState<MeetupType[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_FIREBASE_API_URL}/meetups.json`)
      .then((response) => response.json())
      .then((data) => {
        const meetupsData: MeetupType[] = [];

        for (const key in data) {
          meetupsData.push({ id: key, ...data[key] });
        }

        setMeetups(meetupsData);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <S.Container>
        <S.PageTitle>Loading...</S.PageTitle>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.PageTitle>All Meetups</S.PageTitle>

      <MeetupList meetups={meetups} />
    </S.Container>
  );
}
