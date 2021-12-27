import { Button } from "@components";
import { FormEvent, useRef } from "react";

import * as S from "./styles";

type Props = {
  onSearch: (year: string, month: string) => void;
};

export function EventsSearch({ onSearch }: Props) {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const selectedYear = yearInputRef.current!.value;
    const selectedMonth = monthInputRef.current!.value;

    onSearch(selectedYear, selectedMonth);
  }

  return (
    <S.Container onSubmit={submitHandler}>
      <S.Controls>
        <S.Control>
          <S.Label htmlFor="year">Year</S.Label>
          <S.Select id="year" ref={yearInputRef}>
            <S.SelectOption value="2021">2021</S.SelectOption>
            <S.SelectOption value="2022">2022</S.SelectOption>
          </S.Select>
        </S.Control>

        <S.Control>
          <S.Label htmlFor="month">Month</S.Label>
          <S.Select id="month" ref={monthInputRef}>
            <S.SelectOption value="1">January</S.SelectOption>
            <S.SelectOption value="2">February</S.SelectOption>
            <S.SelectOption value="3">March</S.SelectOption>
            <S.SelectOption value="4">April</S.SelectOption>
            <S.SelectOption value="5">May</S.SelectOption>
            <S.SelectOption value="6">June</S.SelectOption>
            <S.SelectOption value="7">July</S.SelectOption>
            <S.SelectOption value="8">August</S.SelectOption>
            <S.SelectOption value="9">September</S.SelectOption>
            <S.SelectOption value="10">October</S.SelectOption>
            <S.SelectOption value="11">November</S.SelectOption>
            <S.SelectOption value="12">December</S.SelectOption>
          </S.Select>
        </S.Control>
      </S.Controls>

      <Button>Find Events</Button>
    </S.Container>
  );
}
