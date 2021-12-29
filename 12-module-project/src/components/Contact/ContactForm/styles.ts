import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: var(--size-8) auto;
  border-radius: 6px;
  background-color: var(--color-grey-100);
  width: 90%;
  max-width: 50rem;
  padding: var(--size-4);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  font-size: var(--size-6);
`;

export const Title = styled.h1`
  font-size: var(--size-8);
  margin: var(--size-4) 0;
  text-align: left;

  @media (min-width: 768px) {
    font-size: var(--size-16);
    text-align: center;
  }
`;

export const Form = styled.form``;

export const FormControls = styled.div`
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
`;

export const FormControl = styled.div`
  flex: 1;
  min-width: 10rem;
`;

export const Label = styled.label`
  display: block;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  margin: var(--size-2) 0 var(--size-1) 0;
`;

const fieldCSS = css`
  font: inherit;
  padding: var(--size-1);
  border-radius: 4px;
  width: 100%;
  border: 1px solid var(--color-grey-400);
  background-color: var(--color-grey-50);
  resize: none;
`;

export const Input = styled.input`
  ${fieldCSS}
`;

export const TextArea = styled.textarea`
  ${fieldCSS}
`;

export const Actions = styled.div`
  margin-top: var(--size-4);
  text-align: right;
`;

export const SubmitButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: var(--color-primary-700);
  border: 1px solid var(--color-primary-700);
  padding: var(--size-2) var(--size-4);
  border-radius: 4px;
  color: var(--color-primary-50);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: var(--color-primary-500);
    border-color: var(--color-primary-500);
  }
`;
