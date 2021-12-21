import { MeetupList } from "../../components";

import { DUMMY_MEETUPS } from "../../shared/data";

import * as S from "./styles";

export function AllMeetups() {
  return (
    <S.Container>
      <S.PageTitle>All Meetups</S.PageTitle>

      <MeetupList meetups={DUMMY_MEETUPS} />
    </S.Container>
  );
}
