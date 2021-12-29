import styled from "styled-components";

export const Container = styled.article`
  width: 95%;
  max-width: 60rem;
  margin: var(--size-8) auto;
  font-size: var(--size-5);
  line-height: var(--size-8);
  background-color: var(--color-grey-100);
  border-radius: 6px;
  padding: var(--size-4);

  p {
    color: var(--color-grey-800);
  }

  img {
    margin: var(--size-4) auto;
    width: 100%;
    max-width: 600px;
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: var(--size-8);
  }
`;
