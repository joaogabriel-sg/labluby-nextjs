import { NextApiRequest, NextApiResponse } from "next";

type RequestBodyType = {
  email: string;
};

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body as RequestBodyType;

    if (!email || !email.includes("@")) {
      return res.status(422).json({ error: "Invalid e-mail address." });
    }

    console.log(email);
    return res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
