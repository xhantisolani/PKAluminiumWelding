import React, { useEffect } from 'react'
import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react'
import { COMPANY } from '../utils/constants'

export default function About() {
  useEffect(() => { document.title = 'About | PK Aluminium Welding Solutions' }, [])
  return (
    <Box>
      <Container maxW="3xl" py={16}>
        <Stack spacing={4} color="gray.900">
          <Heading>About PK Aluminium Welding Solutions</Heading>
          <Text fontSize="lg">
            Based in Maitland, Cape Town, we specialise in aluminium welding and fabrication with a focus on
            modern aesthetics, structural integrity and clean finishing. Our approach blends precision engineering
            with practical on-site experience to deliver reliable, long-lasting results.
          </Text>
          <Text>
            We design, fabricate and install {`{`}gates{`}`}, balustrades, handrails, custom canopies and bespoke
            aluminium structures for homes and businesses. Every project is scoped clearly, built safely and installed
            with care.
          </Text>
          <Text>
            Visit us at <strong>{COMPANY.location}</strong> or book a site visit anywhere in Cape Town and surrounds.
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
