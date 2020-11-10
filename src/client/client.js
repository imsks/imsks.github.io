import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import { GlobalStyle } from './style-components/global';
import { lightTheme } from './style-components/theme';

ReactDOM.hydrate(
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </ThemeProvider>,

  document.querySelector('#root')
);
