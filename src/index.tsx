import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import Main from './pages/Main';

import './styles/global-styles.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
