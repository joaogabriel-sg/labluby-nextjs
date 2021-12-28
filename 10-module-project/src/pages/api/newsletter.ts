import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import { connectDatabase, insertDocument } from "@shared/utils";

type RequestBodyType = {
  email: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body as RequestBodyType;

    if (!email || !email.includes("@")) {
      return res.status(422).json({ error: "Invalid e-mail address." });
    }

    let client: MongoClient = {} as MongoClient;

    try {
      client = await connectDatabase(process.env.MONGODB_NEWSLETTER_URL);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Connecting to the database failed." });
    }

    try {
      await insertDocument(client, "emails", { email });
      client.close();
    } catch (error) {
      return res.status(500).json({ error: "Inserting data failed." });
    }

    return res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
