import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
  }

  body {
    background-color: #082f49;
    font-size: 16px;
    font-family: Helvetica, Arial, sans-serif;
    overflow: hidden;
    line-height: 1.2;
    color: #334155  ;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
