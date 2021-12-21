import { MeetupItem } from "..";

import { MeetupType } from "../../../shared/types";

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
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          imageUrl={meetup.image}
        />
      ))}
    </S.Container>
  );
}
