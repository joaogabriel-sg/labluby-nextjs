import { useRouter } from "next/router";
import Head from "next/head";

import { NewMeetupForm } from "@components";

import { MeetupType } from "@shared/types";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler({
    address,
    description,
    image,
    title,
  }: Omit<MeetupType, "id">) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, description, image, title }),
    });

    const data = await response.json();

    console.log(data);
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add you own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
