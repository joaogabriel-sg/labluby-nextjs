import { useEffect, useState } from "react";

import { CommentList, NewComment } from "..";

import * as S from "./styles";

type CommentType = {
  id: string;
  name: string;
  text: string;
};

type AddCommentHandlerProps = {
  email: string;
  name: string;
  text: string;
};

type Props = {
  eventId: string;
};

export function Comments({ eventId }: Props) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<CommentType[]>([]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
        });
    }
  }, [eventId, showComments]);

  function addCommentHandler(commentData: AddCommentHandlerProps) {
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <S.Container>
      <S.CommentsButton onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </S.CommentsButton>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </S.Container>
  );
}
