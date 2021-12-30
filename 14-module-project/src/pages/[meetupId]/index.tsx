import { GetStaticPaths, GetStaticProps } from "next";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

import { MeetupDetail } from "@components";

import { MeetupType } from "@shared/types";

type Params = {
  meetupId: string;
};

type Props = {
  meetup: MeetupType;
};

function MeetupDetailPage({ meetup }: Props) {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      <MeetupDetail
        title={meetup.title}
        image={meetup.image}
        address={meetup.address}
        description={meetup.description}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL);

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  const paths = meetups.map((meetup) => ({
    params: { meetupId: meetup._id.toString() },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const { meetupId } = ctx.params as Params;

  const client = await MongoClient.connect(process.env.MONGO_URL);

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const queryId = new ObjectId(meetupId);
  const meetup = await meetupsCollection.findOne({ _id: queryId });

  if (!meetup) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  client.close();

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
};

export default MeetupDetailPage;
