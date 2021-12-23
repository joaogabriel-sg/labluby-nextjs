import { useRouter } from "next/router";

import { EventList, EventsSearch } from "@components";

import { getAllEvents, getFilteredEvents } from "@shared/data";

import * as S from "@styles/pages/AllEvents";

function AllEventsPage() {
  const router = useRouter();

  const events = getAllEvents();

  function handleFindEventsByYearAndMonth(year: string, month: string) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <S.Container>
      <EventsSearch onSearch={handleFindEventsByYearAndMonth} />
      <EventList events={events} />
    </S.Container>
  );
}

export default AllEventsPage;
