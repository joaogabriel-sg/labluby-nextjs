import { AddressIcon, DateIcon } from "../../Icons";

import { LogisticsItem } from "../LogisticsItem";

import * as S from "./styles";

type Props = {
  address: string;
  date: string;
  image: string;
  imageAlt: string;
};

export function EventLogistics({ address, date, image, imageAlt }: Props) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <S.Container>
      <S.ImageWrapper>
        <S.Thumbnail
          src={`/${image}`}
          alt={imageAlt}
          width={330}
          height={330}
        />
      </S.ImageWrapper>

      <S.List>
        <LogisticsItem icon={DateIcon}>
          <S.Date>{humanReadableDate}</S.Date>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <S.Address>{addressText}</S.Address>
        </LogisticsItem>
      </S.List>
    </S.Container>
  );
}
