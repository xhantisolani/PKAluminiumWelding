import React, { useEffect } from 'react'
import { Box, Container, Heading, Text, Button, Stack, Icon } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  useEffect(() => { 
    document.title = '404 - Page Not Found | PK Aluminium' 
  }, [])

  return (
    <Box 
      bg="brand.600" 
      color="white" 
      minH="90vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      py={20}
    >
      <Container maxW="2xl" textAlign="center">
        <Icon as={FaExclamationTriangle} w={24} h={24} mb={6} opacity={0.6} />
        <Heading size="4xl" mb={4} fontWeight="extrabold">
          404
        </Heading>
        <Text fontSize="2xl" mb={3}>
          Page Not Found
        </Text>
        <Text fontSize="lg" mb={8} color="blue.100" lineHeight="relaxed">
          The page you're looking for doesn't exist or has been moved. But don't worry—we're here to help with your aluminium fabrication needs!
        </Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
          <Button 
            as={RouterLink} 
            to="/" 
            leftIcon={<FaArrowLeft />}
            bg="white" 
            color="brand.600"
            size="lg"
            _hover={{ bg: 'gray.100' }}
          >
            Back to Home
          </Button>
          <Button 
            as={RouterLink} 
            to="/contact"
            size="lg"
            variant="outline"
            color="white"
            borderColor="white"
            _hover={{ bg: 'whiteAlpha.10' }}
          >
            Get a Quote
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
