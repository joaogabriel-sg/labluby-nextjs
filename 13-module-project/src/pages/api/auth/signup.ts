import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase, hashPassword } from "@lib";

type RequestBodyType = {
  email: string;
  password: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;

  const { email, password } = req.body as RequestBodyType;

  if (!email || email.trim() === "" || !email.includes("@")) {
    return res.status(422).json({ error: "Invalid email address." });
  }

  if (!password || password.trim() === "" || password.trim().length < 7) {
    return res.status(422).json({
      error: "Invalid password - should also be at least 7 characters long.",
    });
  }

  const client = await connectToDatabase();
  const db = client.db();

  const userAlreadyExists = await db.collection("users").findOne({ email });

  if (userAlreadyExists) {
    client.close();
    return res.status(422).json({ error: "Email is already in use." });
  }

  const hashedPassword = await hashPassword(password);

  const result = await db
    .collection("users")
    .insertOne({ email, password: hashedPassword });

  client.close();
  return res.status(201).json({ message: "Created user." });
}

export default handler;
