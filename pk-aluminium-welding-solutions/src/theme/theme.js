import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  // Muted, professional colors: Charcoal, Deep Navy, White with subtle accents
  brand: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280', // Charcoal grey
    600: '#374151', // Charcoal dark
    700: '#1f2937', // Dark charcoal
    800: '#111827', // Deep charcoal
    900: '#030712',
  },
  // Subtle accent for CTAs - muted warm tone
  accent: {
    50: '#faf8f3',
    100: '#f5ede3',
    200: '#eadec8',
    300: '#dfcfad',
    400: '#d4c099',
    500: '#c9b185', // Muted terracotta
    600: '#b89a6b',
    700: '#a78351',
    800: '#966c37',
    900: '#7a5527',
  },
  // Deep navy for secondary brand use
  navy: {
    50: '#f0f4f9',
    100: '#dce4f0',
    200: '#c8d4e7',
    300: '#b4c4de',
    400: '#8fa6d4',
    500: '#1e3a5f', // Deep navy
    600: '#1a3255',
    700: '#162a4b',
    800: '#122241',
    900: '#0a1420',
  },
}

const fonts = {
  heading: `'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`,
  body: `'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`,
}

// Custom component styles - minimal and professional
const components = {
  Button: {
    baseStyle: {
      fontWeight: '600',
      borderRadius: 'md',
      transition: 'all 0.2s ease',
      _hover: {
        opacity: '0.9',
      },
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: '700',
      color: 'brand.800',
      lineHeight: '1.3',
    },
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
        opacity: '0.8',
      },
    },
  },
}

const theme = extendTheme({
  config,
  colors,
  fonts,
  components,
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'brand.700',
        lineHeight: '1.6',
      },
      'html, body, #root': {
        height: '100%',
      },
      a: {
        color: 'brand.600',
      },
    },
  },
})

export default theme
