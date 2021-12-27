import { Button } from "@components";

import * as S from "./styles";

type Props = {
  date: Date;
};

export function ResultsTitle({ date }: Props) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <S.Container>
      <S.Title>Events in {humanReadableDate}</S.Title>
      <Button link="/events">Show all events</Button>
    </S.Container>
  );
}
