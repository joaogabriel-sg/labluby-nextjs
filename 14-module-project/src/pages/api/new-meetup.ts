import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type RequestBodyType = {
  title: string;
  image: string;
  address: string;
  description: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;

  const { address, description, image, title } = req.body as RequestBodyType;

  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const result = await meetupsCollection.insertOne({
    address,
    description,
    image,
    title,
  });

  client.close();
  return res.status(201).json({ message: "Meetup inserted." });
}

export default handler;
