import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  #root {
    width: 100%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    
  }

  body {
    background: ${theme.colors.lightGrey};
    color: ${theme.colors.lightGrey};
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Quantico', sans-serif;
    font-size: 16px;
    border: none;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: bold;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    outline: none;
  }
`;
