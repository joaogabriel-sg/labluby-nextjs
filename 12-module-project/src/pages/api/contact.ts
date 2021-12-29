import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type RequestBodyType = {
  email: string;
  message: string;
  name: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, message, name } = req.body as RequestBodyType;

    if (!email || email.trim() === "" || !email.includes("@"))
      return res.status(422).json({ error: "Invalid email address." });

    if (!name || name.trim() === "")
      return res.status(422).json({ error: "Invalid name." });

    if (!message || message.trim() === "")
      return res.status(422).json({ error: "Invalid message." });

    const newMessage = { email, message, name };

    let client: MongoClient = {} as MongoClient;

    try {
      client = await MongoClient.connect(process.env.MONGODB_CONTACT_URL);
    } catch {
      return res.status(500).json({ error: "Could not connect to database." });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      const succeededMessage = { ...newMessage, id: result.insertedId };

      client.close();
      return res.status(201).json({ message: succeededMessage });
    } catch {
      client.close();
      return res.status(500).json({ error: "Storing message failed." });
    }
  }
}

export default handler;
