import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    50: '#e6fffb',
    100: '#b2f5ea',
    200: '#81e6d9',
    300: '#4fd1c5',
    400: '#38b2ac',
    500: '#319795',
    600: '#2c7a7b',
    700: '#285e61',
    800: '#234e52',
    900: '#1d4044',
  },
}

const fonts = {
  heading: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
  body: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
}

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
})

export default theme
