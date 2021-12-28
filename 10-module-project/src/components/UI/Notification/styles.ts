import styled, { css } from "styled-components";

type ContainerProps = {
  status: "success" | "error" | "pending";
};

export const Container = styled.div<ContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  background-color: #1b1b1b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.5rem 10%;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2);

  ${({ status }) =>
    status === "pending" &&
    css`
      background-color: #177cbe;
    `}

  ${({ status }) =>
    status === "error" &&
    css`
      background-color: #e65035;
    `}

  ${({ status }) =>
    status === "success" &&
    css`
      background-color: #10be58;
    `}
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: white;
`;

export const Message = styled.p``;
