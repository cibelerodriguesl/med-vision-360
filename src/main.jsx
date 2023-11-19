import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { defaultTheme } from './theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter >
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
