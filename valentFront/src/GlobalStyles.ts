import { createGlobalStyle } from "styled-components";
import background from "./assets/background.png";

export const GlobalStyles = createGlobalStyle`
  body {   
    background-image: url(${background});
    color: #fff;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }`;
