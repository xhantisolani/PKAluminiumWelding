import React, { useEffect } from 'react'
import { Box, Container, Heading, Text, SimpleGrid, Stack, Badge } from '@chakra-ui/react'

function PriceCard({ title, points }) {
  return (
    <Box borderWidth="1px" rounded="xl" p={6} bg="white" shadow="sm">
      <Heading size="md" mb={3} color="gray.900">{title}</Heading>
      <Stack spacing={2}>
        {points.map((p, i) => <Text key={i} color="gray.700">• {p}</Text>)}
      </Stack>
    </Box>
  )
}

export default function Pricing() {
  useEffect(() => { document.title = 'Pricing | PK Aluminium Welding Solutions' }, [])
  return (
    <Box>
      <Container maxW="6xl" py={16}>
        <Heading size="lg" mb={3} color="gray.900">Pricing Guide</Heading>
        <Text mb={8} color="gray.600">
          Every project is unique, so we provide tailored quotes based on design, dimensions, materials, finish (e.g. powder coat) and site conditions.
          Use this guide to understand typical factors that influence pricing.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <PriceCard title="Canopies & Enclosures" points={[
            'Dimensions & wall thickness', 'Door/hinge hardware', 'Powder coating finish', 'On-vehicle fitment or installation'
          ]} />
          <PriceCard title="Gates, Railings & Balustrades" points={[
            'Design style & spacing', 'Mounting method & anchors', 'Handrail details', 'Site access & installation time'
          ]} />
          <PriceCard title="Custom Fabrication" points={[
            'Material grade (e.g., 6061)', 'Precision requirements', 'Weld complexity', 'Surface prep & finishing'
          ]} />
        </SimpleGrid>
        <Badge mt={6} colorScheme="teal">Tip</Badge>
        <Text mt={2} color="gray.600">
          For a fast, accurate quote, include measurements, photos of the space, a simple sketch and your preferred finish.
        </Text>
      </Container>
    </Box>
  )
}
