import React, { useEffect } from 'react'
import { Box, Container, Heading, Text, SimpleGrid, Stack } from '@chakra-ui/react'

function Testimonial({ quote, name, project }) {
  return (
    <Box borderWidth="1px" rounded="xl" p={6} bg="white" shadow="sm">
      <Text fontStyle="italic" mb={3} color="gray.600">"{quote}"</Text>
      <Stack spacing={0} >
        <Text fontWeight="bold" color="gray.900">{name}</Text>
        <Text color="gray.600">{project}</Text>
      </Stack>
    </Box>
  )
}

export default function Testimonials() {
  useEffect(() => { document.title = 'Testimonials | PK Aluminium Welding Solutions' }, [])
  return (
    <Box>
      <Container maxW="6xl" py={16}>
        <Heading size="lg" mb={3} color="gray.900">Client Testimonials</Heading>
        <Text mb={8} color="gray.600">
          We take pride in precision and communication — from first quote to final install.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Testimonial quote="The custom gate looks phenomenal — clean welds and a perfect powder coat match." name="Leana M." project="Front Gate & Balustrade" />
          <Testimonial quote="Our delivery canopy was measured, built and fitted on time. Great team, highly recommended." name="Neo K." project="Vehicle Canopy" />
          <Testimonial quote="Reliable, tidy and professional — they handled a tricky handrail installation effortlessly." name="Sifiso P." project="Stair Handrail" />
        </SimpleGrid>
      </Container>
    </Box>
  )
}
