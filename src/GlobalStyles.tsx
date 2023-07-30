import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export default GlobalStyles;