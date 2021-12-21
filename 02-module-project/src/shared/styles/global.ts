import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    background-color: #fcf3f6;
  }

  h1 {
    font-size: 2.5rem;
    color: #2c292b;
  }

  h2 {
    font-size: 1.5rem;
    color: #2c292b;
  }
`;
