import { useRouter } from "next/router";

import {
  ErrorAlert,
  EventContent,
  EventLogistics,
  EventSummary,
} from "@components";

import { getEventById } from "@shared/data";

import * as S from "@styles/pages/EventDetail";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId as string;

  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <S.Message>No event found!</S.Message>
      </ErrorAlert>
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

export default EventDetailPage;
