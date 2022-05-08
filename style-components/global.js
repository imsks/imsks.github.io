import { createGlobalStyle } from "styled-components";
import { fontGlobal } from "./constants";

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${fontGlobal};
  }
`;

export default GlobalStyle;
