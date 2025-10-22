import React from 'react';
import { Box } from '@chakra-ui/react';

import AppRoutes from './routes/AppRoutes';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/ScrollToTop'; // ⬅️ Import the new component

export default function App() {
  return (
    <> 
      
      <ScrollToTop /> 
      
      <Box minH="100vh" display="flex" flexDir="column">
        <Navbar />
        
        {/* This Box contains our main page content */}
        <Box flex="1 1 auto">
          <AppRoutes />
        </Box>
        
        <Footer />
      </Box>
    </>
  );
}