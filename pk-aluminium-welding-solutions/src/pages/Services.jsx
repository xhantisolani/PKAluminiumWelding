import React, { useEffect } from 'react'
import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { FaTruckPickup, FaCouch, FaRulerCombined, FaBolt } from 'react-icons/fa'
import ServiceCard from '../components/common/ServiceCard'

export default function Services() {
  useEffect(() => { document.title = 'Services | PK Aluminium Welding Solutions' }, [])
  return (
    <Box>
      <Container maxW="7xl" py={16}>
        <Heading size="lg" mb={4}>Aluminium Welding & Fabrication Services – Cape Town</Heading>
        <Text mb={8} color="gray.600">
          We fabricate and install aluminium solutions designed for the Western Cape climate — corrosion-resistant, lightweight,
          and finished to a high standard.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          <ServiceCard icon={FaTruckPickup} title="Vehicle Canopies" desc="Custom aluminium canopies and racks engineered to your spec." />
          <ServiceCard icon={FaCouch} title="Furniture Frames" desc="Minimal, strong frames for tables, benches and shelving." />
          <ServiceCard icon={FaRulerCombined} title="Gates & Balustrades" desc="Secure, modern gate systems, railings and handrails." />
          <ServiceCard icon={FaBolt} title="Repairs & Upgrades" desc="On-site fixes, refinishing and enhancements to existing builds." />
        </SimpleGrid>
      </Container>
    </Box>
  )
}
