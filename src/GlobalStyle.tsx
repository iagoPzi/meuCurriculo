import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --back: #2F2F2F;
        --blue-800: #0C4F84;
        --blue-400: #0D7DCF
    }
    
    *{
        font-size: 1.25rem;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        text-decoration: none;
        color: inherit;
        list-style: none;
    }

    html  {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%
    }
  }

`
    