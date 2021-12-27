import { GetStaticPaths, GetStaticProps } from "next";

import {
  ErrorAlert,
  EventContent,
  EventLogistics,
  EventSummary,
} from "@components";

import { getEventById, getFeaturedEvents } from "@shared/utils";
import { EventType } from "@shared/types";

import * as S from "@styles/pages/EventDetail";

type Params = {
  eventId: string;
};

type Props = {
  event: EventType;
};

function EventDetailPage({ event }: Props) {
  if (!event) {
    return (
      <S.CenteredContainer>
        <S.Message>Loading...</S.Message>
      </S.CenteredContainer>
    );
  }

  return (
    <S.Container>
      <EventSummary title={event.title} />
      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <S.Description>{event.description}</S.Description>
      </EventContent>
    </S.Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    fallback: "blocking",
    paths,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { eventId } = context.params as Params;

  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
};

export default EventDetailPage;
