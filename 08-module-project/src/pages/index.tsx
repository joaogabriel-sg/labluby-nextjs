import { FormEvent, useRef, useState } from "react";

type FeedbackType = {
  id: string;
  email: string;
  text: string;
};

function Home() {
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([]);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const feedbackInputRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmitNewFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredFeedback = feedbackInputRef.current!.value;
    const newFeedback = { email: enteredEmail, text: enteredFeedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(newFeedback),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function handleLoadFeedbacks() {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data.feedbacks);
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>

      <form onSubmit={handleSubmitNewFeedback}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>

        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows={5} ref={feedbackInputRef}></textarea>
        </div>

        <button type="submit">Send Feedback</button>
      </form>

      <hr />

      <button type="button" onClick={handleLoadFeedbacks}>
        Load Feedbacks
      </button>

      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>{feedback.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
