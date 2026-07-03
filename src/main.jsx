import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Elements } from '@stripe/react-stripe-js'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/globalStyles'
import { Router } from './routes'
import AppProvider from './hooks'
import stripePromise from './config/stripeConfig'
import {standardTheme} from './styles/themes/standart'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <GlobalStyles />

          <BrowserRouter>
            <Router />
          </BrowserRouter>

        </Elements>

        <ToastContainer />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>
)