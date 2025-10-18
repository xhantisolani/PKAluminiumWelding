import React from 'react'
import { Box } from '@chakra-ui/react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

export default function App() {
  return (
    <Box minH="100vh" display="flex" flexDir="column">
      <Navbar />
      <Box flex="1 1 auto">
        <AppRoutes />
      </Box>
      <Footer />
    </Box>
  )
}
