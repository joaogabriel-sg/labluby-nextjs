import { GetStaticProps } from "next";
import Head from "next/head";
import { MongoClient } from "mongodb";

import { MeetupList } from "@components";

import { MeetupType } from "@shared/types";

type Props = {
  meetups: MeetupType[];
};

function HomePage({ meetups }: Props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL);

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
