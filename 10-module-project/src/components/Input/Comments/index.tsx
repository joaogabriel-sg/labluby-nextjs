import { useEffect, useState } from "react";

import { CommentList, NewComment } from "..";

import { useNotification } from "@shared/hooks";
import { CommentType } from "@shared/types/commentType";

import * as S from "./styles";

type AddCommentHandlerProps = {
  email: string;
  name: string;
  text: string;
};

type Props = {
  eventId: string;
};

export function Comments({ eventId }: Props) {
  const [isFetchingComments, setIsFetchingComments] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<CommentType[]>([]);

  const { showNotification } = useNotification();

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  useEffect(() => {
    if (showComments) {
      setIsFetchingComments(true);
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
          setIsFetchingComments(false);
        });
    }
  }, [eventId, showComments]);

  function addCommentHandler(commentData: AddCommentHandlerProps) {
    showNotification({
      title: "Sending comment...",
      message: "Your comment is currently being stored into a database.",
      status: "pending",
    });

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => {
        if (response.ok) return response.json();

        return response.json().then((data) => {
          throw new Error(data.error || data.message || "Something went wrong");
        });
      })
      .then(() => {
        showNotification({
          title: "Success!",
          message: "Your comment was saved.",
          status: "success",
        });
      })
      .catch((error) => {
        showNotification({
          title: "Error!",
          message: error.message || "Something went wrong!",
          status: "error",
        });
      });
  }

  return (
    <S.Container>
      <S.CommentsButton onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </S.CommentsButton>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && (
        <CommentList comments={comments} />
      )}
      {showComments && isFetchingComments && (
        <S.LoadingMessage>Loading...</S.LoadingMessage>
      )}
    </S.Container>
  );
}
