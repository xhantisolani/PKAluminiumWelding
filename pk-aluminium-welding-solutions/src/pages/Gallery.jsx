import React, { useEffect } from 'react'
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import ProjectCard from '../components/common/ProjectCard'

const img1 = "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop"
const img2 = "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop"
const img3 = "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop"

export default function Gallery() {
  useEffect(() => { document.title = 'Gallery | PK Aluminium Welding Solutions' }, [])
  return (
    <Box>
      <Container maxW="7xl" py={16}>
        <Heading size="lg" mb={8}>Gallery</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <ProjectCard image={img1} title="Patio Balustrade" desc="Powder-coated aluminium with glass panels." />
          <ProjectCard image={img2} title="Custom Canopy" desc="Lightweight aluminium canopy for delivery fleet." />
          <ProjectCard image={img3} title="Minimal Table Frame" desc="Precision angles and smooth welds." />
        </SimpleGrid>
      </Container>
    </Box>
  )
}
