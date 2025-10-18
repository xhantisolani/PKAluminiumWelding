import React from 'react'
import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react'

export default function About() {
  return (
    <Box>
      <Container maxW="3xl" py={16}>
        <Stack spacing={4}>
          <Heading>About PK Aluminium Welding Solutions</Heading>
          <Text fontSize="lg">
            We are a Cape Town–based welding company specializing in aluminium solutions that are light,
            durable, and beautifully finished. Our mission is simple: deliver precision builds that stand up to
            South African conditions while looking world‑class.
          </Text>
          <Text>
            From residential gates and balustrades to custom canopies and industrial components, we combine skilled
            craftsmanship with a bright, modern aesthetic. We value safety, clarity, and long‑term client relationships.
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
