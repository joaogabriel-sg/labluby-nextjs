import { EventItem } from "..";

import { EventType } from "@shared/types";

import * as S from "./styles";

type Props = {
  events: EventType[];
};

export function EventList({ events }: Props) {
  return (
    <S.Container>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </S.Container>
  );
}
