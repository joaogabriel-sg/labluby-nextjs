import { NextApiRequest, NextApiResponse } from "next";

type QueryRequestType = {
  eventId: string;
};

type RequestBodyType = {
  email: string;
  name: string;
  text: string;
};

function handler(req: NextApiRequest, res: NextApiResponse) {
  const { eventId } = req.query as QueryRequestType;

  if (req.method === "POST") {
    const { email, name, text } = req.body as RequestBodyType;

    if (!email || !email.includes("@")) {
      return res.status(422).json({ error: "Invalid e-mail address." });
    }

    if (name.trim() === "" || text.trim() === "") {
      return res.status(422).json({ error: "Invalid input." });
    }

    const newComment = { id: new Date().toISOString(), email, name, text };

    return res.status(201).json({ comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Isabele", text: "A first comment!" },
      { id: "c2", name: "João Gabriel", text: "A second comment!" },
    ];

    return res.status(200).json({ comments: dummyList });
  }
}

export default handler;
