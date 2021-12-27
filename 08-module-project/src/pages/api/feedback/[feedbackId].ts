import { NextApiRequest, NextApiResponse } from "next";

import { extractFeedback, makeFilePath } from ".";

type QueryParamsRequestType = {
  feedbackId: string;
};

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { feedbackId } = req.query as QueryParamsRequestType;

    const filePath = makeFilePath();
    const feedbacks = extractFeedback(filePath);

    const feedback = feedbacks.find(({ id }) => id === feedbackId);

    if (!feedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }

    return res.status(200).json({ feedback });
  }

  return res.status(400).json({ error: "API only accept GET requests" });
}

export default handler;
