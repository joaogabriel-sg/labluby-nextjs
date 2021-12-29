import styled from "styled-components";

export const Container = styled.div`
  text-transform: uppercase;
  font-size: var(--size-5);
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  color: var(--color-grey-50);
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: var(--size-8);
  }
`;
