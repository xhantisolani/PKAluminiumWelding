import React from 'react'
import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { FaTruckPickup, FaCouch, FaRulerCombined, FaBolt } from 'react-icons/fa'
import ServiceCard from '../components/common/ServiceCard'

export default function Services() {
  return (
    <Box>
      <Container maxW="7xl" py={16}>
        <Heading size="lg" mb={4}>Services</Heading>
        <Text mb={8}>Bright, modern aluminium welding and fabrication for homes and businesses.</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          <ServiceCard icon={FaTruckPickup} title="Vehicle Canopies" desc="Custom aluminium canopies and racks designed to spec." />
          <ServiceCard icon={FaCouch} title="Furniture Frames" desc="Minimal frames for tables, benches, shelves, and more." />
          <ServiceCard icon={FaRulerCombined} title="Gates & Balustrades" desc="Secure, modern gate and railing systems." />
          <ServiceCard icon={FaBolt} title="Repairs & Upgrades" desc="On‑site repairs, refinishing, and modifications." />
        </SimpleGrid>
      </Container>
    </Box>
  )
}
