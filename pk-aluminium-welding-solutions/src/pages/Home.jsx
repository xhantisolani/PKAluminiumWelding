import React from 'react'
import { Box, Container, SimpleGrid, Heading } from '@chakra-ui/react'
import { FaTools, FaDoorOpen, FaWarehouse } from 'react-icons/fa'
import Hero from '../components/common/Hero'
import ServiceCard from '../components/common/ServiceCard'

export default function Home() {
  return (
    <Box>
      <Hero />
      <Container maxW="7xl" py={16}>
        <Heading size="lg" mb={6}>Our Core Services</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <ServiceCard icon={FaTools} title="Custom Fabrication" desc="Aluminium frames, furniture, fixtures, bespoke designs." />
          <ServiceCard icon={FaDoorOpen} title="Gates & Railings" desc="Secure gates, balustrades, handrails with modern finishes." />
          <ServiceCard icon={FaWarehouse} title="Canopies & Enclosures" desc="Vehicle canopies, patio covers, weatherproof solutions." />
        </SimpleGrid>
      </Container>
    </Box>
  )
}
