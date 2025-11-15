import React, { useEffect } from 'react'
import { Box, Container, Heading, Text, Stack, Button, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Privacy() {
  useEffect(() => { 
    document.title = 'Privacy Policy | PK Aluminium Welding Solutions' 
  }, [])

  return (
    <Box bg="gray.50" minH="90vh" py={20}>
      <Container maxW="3xl">
        <Heading size="2xl" mb={6}>Privacy Policy</Heading>
        <Stack spacing={6} fontSize="lg" color="gray.700" lineHeight="relaxed">
          <Box>
            <Heading size="md" mb={3}>1. Information We Collect</Heading>
            <Text>We collect information you provide directly to us, such as when you submit a quote request or contact us via email or phone. This includes your name, email address, phone number, and project details.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={3}>2. How We Use Your Information</Heading>
            <Text>We use the information provided to respond to your inquiries, provide quotes, and improve our services. We do not sell or share your information with third parties without your consent.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={3}>3. Data Security</Heading>
            <Text>We take reasonable precautions to protect your personal information from unauthorized access, disclosure, or destruction. However, no internet transmission is completely secure.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={3}>4. Contact Us</Heading>
            <Text>If you have questions about this Privacy Policy, please contact us at info@pk-aluminium.co.za or 021 555 1234.</Text>
          </Box>
        </Stack>
        <Button as={RouterLink} to="/" mt={8} colorScheme="brand" variant="outline">
          Back to Home
        </Button>
      </Container>
    </Box>
  )
}
