import styled from "styled-components";

export const Container = styled.section`
  margin: 3rem auto;
  width: 90%;
  max-width: 20rem;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Form = styled.form``;

export const FormControl = styled.div`
  display: flex;
`;

export const InputField = styled.input`
  font: inherit;
  padding: 0.25rem;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #ccc;
  flex: 1;
`;

export const RegisterButton = styled.button`
  background-color: #03be9f;
  border: 1px solid #03be9f;
  border-radius: 6px;
  color: #dafff7;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font: inherit;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #02afa1;
    border-color: #02afa1;
  }
`;
