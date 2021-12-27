import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

type FeedbackType = {
  id: string;
  email: string;
  text: string;
};

type RequestBodyType = {
  email: string;
  text: string;
};

export function makeFilePath() {
  return path.join(process.cwd(), "src", "shared", "data", "feedback.json");
}

export function extractFeedback(filePath: string) {
  const stringifiedFeedbacks = fs.readFileSync(filePath) as unknown as string;
  const feedbacks: FeedbackType[] = JSON.parse(stringifiedFeedbacks);
  return feedbacks;
}

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const filePath = makeFilePath();
    const feedbacks = extractFeedback(filePath);

    return res.status(200).json({ feedbacks });
  }

  if (req.method === "POST") {
    const { email, text } = req.body as RequestBodyType;

    const newFeedback = { id: new Date().toISOString(), email, text };

    const filePath = makeFilePath();
    const feedbacks = extractFeedback(filePath);

    feedbacks.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(feedbacks));

    return res.status(201).json({ message: "Success!", feedback: newFeedback });
  }

  return res.status(200).json({ message: "Hello World" });
}

export default handler;
