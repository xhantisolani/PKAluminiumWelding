import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async' // 👈 Import HelmetProvider
import App from './App'
import theme from './theme/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the entire application (including the router) with HelmetProvider */}
    <HelmetProvider> 
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
)