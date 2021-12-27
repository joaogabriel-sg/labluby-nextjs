import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import { EventList, EventsSearch } from "@components";

import { getAllEvents } from "@shared/utils";
import { EventType } from "@shared/types";

import * as S from "@styles/pages/AllEvents";

type Props = {
  events: EventType[];
};

function AllEventsPage({ events }: Props) {
  const router = useRouter();

  function handleFindEventsByYearAndMonth(year: string, month: string) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <S.Container>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>

      <EventsSearch onSearch={handleFindEventsByYearAndMonth} />
      <EventList events={events} />
    </S.Container>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};

export default AllEventsPage;
