import { GetStaticProps } from "next";
import Head from "next/head";

import { EventList, NewsletterRegistration } from "@components";

import { getFeaturedEvents } from "@shared/utils";
import { EventType } from "@shared/types";

import * as S from "@styles/pages/Home";

type Props = {
  featuredEvents: EventType[];
};

function HomePage({ featuredEvents }: Props) {
  return (
    <S.Container>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
      <EventList events={featuredEvents} />
    </S.Container>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
};

export default HomePage;
