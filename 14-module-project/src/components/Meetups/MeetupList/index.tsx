import { MeetupItem } from "@components";

import { MeetupType } from "@shared/types";

import * as S from "./styles";

type Props = {
  meetups: MeetupType[];
};

export function MeetupList({ meetups }: Props) {
  return (
    <S.Container>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </S.Container>
  );
}
