import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";

import { Button, ErrorAlert, EventList, ResultsTitle } from "@components";

import { EventType } from "@shared/types";

import * as S from "@styles/pages/FilteredEvents";
import { useEffect, useState } from "react";

function FilteredEventsPage() {
  const [loadedEvents, setLoadedEvents] = useState<EventType[]>([]);

  const router = useRouter();

  const filterData = router.query.slug as string[];

  const { data, error } = useSWR(
    "https://nextjs-course-9a41c-default-rtdb.firebaseio.com/events.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const events: EventType[] = [];

      for (const key in data) {
        events.push({ id: key, ...data[key] });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content="A list of filtered events" />
    </Head>
  );

  if (!data) {
    return (
      <>
        {pageHeadData}
        <S.Message>Loading...</S.Message>
      </>
    );
  }

  const [filteredYear, filteredMonth] = filterData;
  const [year, month] = [+filteredYear, +filteredMonth];

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content={`All events for ${month}/${year}`} />
    </Head>
  );

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12 ||
    error
  ) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <S.Message>Invalid filters. Please adjust your values!</S.Message>
        </ErrorAlert>
        <S.ButtonContainer>
          <Button link="/events">Show All Events</Button>
        </S.ButtonContainer>
      </>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <S.Message>No events found for the chosen filter!</S.Message>
        </ErrorAlert>
        <S.ButtonContainer>
          <Button link="/events">Show All Events</Button>
        </S.ButtonContainer>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <S.Container>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </S.Container>
  );
}

export default FilteredEventsPage;
