import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

import { connectToDatabase, hashPassword, verifyPassword } from "@lib";

type RequestBodyType = {
  newPassword: string;
  oldPassword: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PATCH") return;

  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Not authenticated." });
  }

  const email = session.user?.email;
  const { newPassword, oldPassword } = req.body as RequestBodyType;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");

  const user = await usersCollection.findOne({ email });

  if (!user) {
    client.close();
    return res.status(404).json({ error: "User not found." });
  }

  const currentPassword = user.password;
  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    client.close();
    return res.status(403).json({ error: "Invalid password." });
  }

  const hashedPassword = await hashPassword(newPassword);

  const result = await usersCollection.updateOne(
    { email },
    { $set: { password: hashedPassword } }
  );

  client.close();
  return res.status(200).json({ message: "Password updated." });
}

export default handler;
