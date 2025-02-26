import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Rola', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #13121B;
  }
  h1, h2, h3, p, a, button {
    font-family: 'Lora', sans-serif;
    color: #FFFFFF;
  }
`;

export default GlobalStyles;

