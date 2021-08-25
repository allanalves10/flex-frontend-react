import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
      --green-light: #58ae46;
      --yellow: #e8b817;
      --black: #111111;
      --red: #E62E4D;
      --text-body: #363F5F;
      --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 14px sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
