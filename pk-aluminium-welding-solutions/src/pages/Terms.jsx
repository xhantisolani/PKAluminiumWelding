import React, { useEffect } from 'react'
import { Box, Container, Heading, Text, Stack, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Terms() {
  useEffect(() => { 
    document.title = 'Terms of Service | PK Aluminium Welding Solutions' 
  }, [])

  return (
    <Box bg="gray.50" minH="90vh" py={20}>
      <Container maxW="3xl">
        <Heading size="2xl" mb={6}>Terms of Service</Heading>
        <Stack spacing={6} fontSize="lg" color="gray.700" lineHeight="relaxed">
          <Box>
            <Heading size="md" mb={3}>1. Agreement to Terms</Heading>
            <Text>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={3}>2. Use License</Heading>
            <Text>Permission is granted to temporarily download one copy of the materials (information or software) on PK Aluminium's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={3}>3. Disclaimer</Heading>
            <Text>The materials on PK Aluminium's website are provided on an 'as is' basis. PK Aluminium makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={3}>4. Limitations</Heading>
            <Text>In no event shall PK Aluminium or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PK Aluminium's website.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={3}>5. Accuracy of Materials</Heading>
            <Text>The materials appearing on PK Aluminium's website could include technical, typographical, or photographic errors. PK Aluminium does not warrant that any of the materials on its website are accurate, complete, or current.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={3}>6. Modifications</Heading>
            <Text>PK Aluminium may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</Text>
          </Box>
        </Stack>
        <Button as={RouterLink} to="/" mt={8} colorScheme="brand" variant="outline">
          Back to Home
        </Button>
      </Container>
    </Box>
  )
}
