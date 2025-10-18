import React from 'react'
import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react'

export default function Privacy() {
  return (
    <Box>
      <Container maxW="3xl" py={16}>
        <Stack spacing={4}>
          <Heading>Privacy Policy</Heading>
          <Text fontSize="lg">We respect your privacy. Information submitted via our quote form is used to respond to your request and schedule services.</Text>
          <Text>We do not sell your data. If you have any questions about how your information is handled, please contact us.</Text>
        </Stack>
      </Container>
    </Box>
  )
}
