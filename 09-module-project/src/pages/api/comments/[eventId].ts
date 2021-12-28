import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "@shared/utils";

type QueryRequestType = {
  eventId: string;
};

type RequestBodyType = {
  email: string;
  name: string;
  text: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { eventId } = req.query as QueryRequestType;

  let client: MongoClient = {} as MongoClient;

  try {
    client = await connectDatabase(process.env.MONGODB_EVENTS_URL);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Connecting to the database failed." });
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body as RequestBodyType;

    if (!email || !email.includes("@")) {
      client.close();
      return res.status(422).json({ error: "Invalid e-mail address." });
    }

    if (name.trim() === "" || text.trim() === "") {
      client.close();
      return res.status(422).json({ error: "Invalid input." });
    }

    const newComment = { email, name, text, eventId };

    try {
      const result = await insertDocument(client, "comments", newComment);
      const newCommentMongoDB = {
        ...newComment,
        insertedId: result.insertedId,
      };

      res.status(201).json({ comment: newCommentMongoDB });
    } catch (error) {
      res.status(500).json({ error: "Inserting data failed." });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        { eventId }
      );

      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ error: "Getting comments failed." });
    }
  }

  client.close();
}

export default handler;
