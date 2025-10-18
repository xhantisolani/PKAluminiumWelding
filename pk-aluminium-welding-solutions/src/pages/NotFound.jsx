import React from 'react'
import { Box, Container, Heading, Text, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <Box>
      <Container maxW="3xl" py={24} textAlign="center">
        <Heading mb={4}>Page Not Found</Heading>
        <Text mb={6}>The page you’re looking for doesn’t exist. Try returning home.</Text>
        <Button as={RouterLink} to="/" colorScheme="teal">Go Home</Button>
      </Container>
    </Box>
  )
}
