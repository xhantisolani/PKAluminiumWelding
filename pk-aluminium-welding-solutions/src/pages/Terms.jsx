import React from 'react'
import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react'

export default function Terms() {
  return (
    <Box>
      <Container maxW="3xl" py={16}>
        <Stack spacing={4}>
          <Heading>Terms & Conditions</Heading>
          <Text fontSize="lg">Quotes are based on provided measurements and site assumptions. Final costs may change after on-site inspection or design adjustments.</Text>
          <Text>Lead times vary by project scope, materials, and finishing requirements (e.g., powder coating).</Text>
        </Stack>
      </Container>
    </Box>
  )
}
