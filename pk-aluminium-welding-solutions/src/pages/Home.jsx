import React from 'react'
import { Box, Container, SimpleGrid, Heading, Text } from '@chakra-ui/react'
import { FaTools, FaDoorOpen, FaWarehouse } from 'react-icons/fa'
import Hero from '../components/common/Hero'
import ServiceCard from '../components/common/ServiceCard'

export default function Home() {
  return (
    <Box>
      <Hero />
      <Container maxW="7xl" py={16}>
        <Heading as="h2" size="lg" mb={2}>Aluminium Welding in Cape Town</Heading>
        <Text mb={8} color="gray.600">
          We deliver high-quality aluminium welding and fabrication services for residential, commercial and industrial clients
          across Cape Town. From custom canopies and railings to gates and architectural details, our builds are engineered for
          durability and clean modern finishes.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <ServiceCard icon={FaTools} title="Custom Fabrication" desc="Precision aluminium frames, fixtures and bespoke components." />
          <ServiceCard icon={FaDoorOpen} title="Gates & Railings" desc="Modern gates, balustrades and handrails with safe installation." />
          <ServiceCard icon={FaWarehouse} title="Canopies & Enclosures" desc="Vehicle canopies, patio covers and weather-ready enclosures." />
        </SimpleGrid>
      </Container>
    </Box>
  )
}
