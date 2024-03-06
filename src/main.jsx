import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './Styles/global';
import { ThemeProvider } from 'styled-components';

import theme from './Styles/theme'

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
          <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)

