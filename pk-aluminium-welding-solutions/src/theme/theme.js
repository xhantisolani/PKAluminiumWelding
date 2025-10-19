import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  // Bright, precise blue for accents and CTAs
  brand: {
    50: '#e6f6ff',
    100: '#cceaff',
    200: '#99d5ff',
    300: '#66c0ff',
    400: '#33abff',
    500: '#0d98ff', // primary accent
    600: '#0a7ad1',
    700: '#085ea3',
    800: '#064575',
    900: '#042e4d',
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
        // Light, clean backdrop to contrast charcoal surfaces
        bg: 'gray.50',
      },
    },
  },
})

export default theme
