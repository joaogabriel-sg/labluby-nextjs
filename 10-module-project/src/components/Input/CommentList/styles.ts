import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Comment = styled.li`
  text-align: left;
  padding: 0.5rem 0;
  border-bottom: 2px solid #ccc;
`;

export const Message = styled.p`
  margin: 0;
`;

export const User = styled.div`
  text-align: right;
  font-style: italic;
`;

export const UserName = styled.address`
  display: inline;
`;
