import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SimKyungha from "../fonts/SimKyungha.ttf";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
      box-sizing: border-box;
    }

    ul, li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    :root {
      --light-color: #fff;
      --dark-color: #000;
      --accent-color: #dc1437;
      --border-color: #ccc;
    }

    @font-face {
      font-family: "SimKyungha";
      src: url(${SimKyungha}) format("truetype");
      /* src: url("/fonts/SimKyungha.ttf") format("truetype"); */
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-size: 1.6rem;
      font-family: "SimKyungha";
    }
`;

export default GlobalStyles;
