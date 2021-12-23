import { useRouter } from "next/router";

import { Button, ErrorAlert, EventList, ResultsTitle } from "@components";

import { getFilteredEvents } from "@shared/data";

import * as S from "@styles/pages/FilteredEvents";

function FilteredEventsPage() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <S.Message>Loading...</S.Message>;
  }

  const [filteredYear, filteredMonth] = filteredData as string[];

  const year = +filteredYear;
  const month = +filteredMonth;

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <S.Message>Invalid filters. Please adjust your values!</S.Message>
        </ErrorAlert>
        <S.ButtonContainer>
          <Button link="/events">Show All Events</Button>
        </S.ButtonContainer>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
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
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </S.Container>
  );
}

export default FilteredEventsPage;
