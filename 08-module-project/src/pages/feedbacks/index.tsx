import { GetStaticProps } from "next";
import { useState } from "react";

import { extractFeedback, makeFilePath } from "../api/feedback";

type FeedbackType = {
  id: string;
  email: string;
  text: string;
};

type Props = {
  feedbacks: FeedbackType[];
};

function FeedbacksPage({ feedbacks }: Props) {
  const [feedback, setFeedback] = useState<FeedbackType | null>(null);

  function handleLoadFeedbackDetails(id: string) {
    fetch(`/api/feedback/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data.feedback);
      });
  }

  return (
    <>
      {feedback && <h1>{feedback.email}</h1>}
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            {feedback.text}{" "}
            <button
              type="button"
              onClick={handleLoadFeedbackDetails.bind(null, feedback.id)}
            >
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = makeFilePath();
  const feedbacks = extractFeedback(filePath);

  return {
    props: {
      feedbacks,
    },
  };
};

export default FeedbacksPage;
