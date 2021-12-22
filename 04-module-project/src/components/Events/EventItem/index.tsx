import { AddressIcon, ArrowRightIcon, Button, DateIcon } from "@components";

import { EventType } from "@shared/types";

import * as S from "./styles";

type Props = {
  event: EventType;
};

export function EventItem({ event }: Props) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = event.location.replace(", ", "\n");

  const exploreLink = `/events/${event.id}`;

  return (
    <S.Container>
      <S.Image src={`/${event.image}`} alt={event.title} />

      <S.Content>
        <S.Header>
          <S.Title>{event.title}</S.Title>

          <S.DateWrapper>
            <DateIcon />
            <S.Date>{formattedDate}</S.Date>
          </S.DateWrapper>

          <S.AddressWrapper>
            <AddressIcon />
            <S.Address>{formattedAddress}</S.Address>
          </S.AddressWrapper>
        </S.Header>

        <S.Actions>
          <Button link={exploreLink}>
            <S.ButtonTitle>Explore Event</S.ButtonTitle>
            <S.IconWrapper>
              <ArrowRightIcon />
            </S.IconWrapper>
          </Button>
        </S.Actions>
      </S.Content>
    </S.Container>
  );
}
