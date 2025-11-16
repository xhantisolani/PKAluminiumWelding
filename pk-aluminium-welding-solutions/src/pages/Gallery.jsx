import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const projects = [
    { id: 1, title: 'Residential Gate', category: 'gates', image: 'Gates' },
    { id: 2, title: 'Commercial Canopy', category: 'canopies', image: 'Canopies' },
    { id: 3, title: 'Steel Railing', category: 'railings', image: 'Railings' },
    { id: 4, title: 'Sliding Doors', category: 'doors', image: 'Doors' },
    { id: 5, title: 'Industrial Frame', category: 'industrial', image: 'Industrial' },
    { id: 6, title: 'Custom Pergola', category: 'canopies', image: 'Pergola' },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'gates', label: 'Gates' },
    { id: 'canopies', label: 'Canopies' },
    { id: 'doors', label: 'Doors' },
    { id: 'railings', label: 'Railings' },
    { id: 'industrial', label: 'Industrial' },
  ]

  const filtered =
    selectedCategory === 'all'
      ? projects
      : projects.filter(p => p.category === selectedCategory)

  const handleProjectClick = project => {
    setSelectedProject(project)
    onOpen()
  }

  return (
    <Box as="main" w="100%">
      {/* Hero */}
      <Box 
        color="white" 
        py={{ base: 12, md: 16 }}
        position="relative" 
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/assets/Pictures/gallery-hero-section.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px)',
          zIndex: 0,
        }}
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      >
        <Container maxW="5xl" px={{ base: 6, md: 8 }} position="relative" zIndex={2}>
          <VStack align="start" spacing={4}>
            <Heading as="h1" size="2xl" color={"white"}>
              Project Gallery
            </Heading>
            <Text fontSize="lg" color="gray.100">
              A curated showcase of completed fabrication projects demonstrating our precision, skill, and industry-level welding standards
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Filters */}
      <Box py={{ base: 8, md: 12 }} bg="brand.50" borderBottom="1px solid" borderColor="brand.200">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={4} align="start">
            <Text color="brand.600" fontSize="sm" fontWeight="600">
              Filter by Category
            </Text>
            <HStack spacing={3} wrap="wrap">
              {categories.map(cat => (
                <Button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  variant={selectedCategory === cat.id ? 'solid' : 'outline'}
                  bg={selectedCategory === cat.id ? 'brand.800' : 'white'}
                  color={selectedCategory === cat.id ? 'white' : 'brand.800'}
                  borderColor="brand.800"
                  _hover={{
                    bg: 'brand.800',
                    color: 'white',
                  }}
                  size="sm"
                >
                  {cat.label}
                </Button>
              ))}
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Gallery Grid */}
      <Box py={{ base: 16, md: 20 }} bg="white">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {filtered.map(project => (
              <Box
                key={project.id}
                cursor="pointer"
                transition="all 0.2s"
                _hover={{ opacity: 0.8 }}
                onClick={() => handleProjectClick(project)}
              >
                <Box
                  bg="brand.100"
                  h="300px"
                  borderRadius="lg"
                  mb={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text color="brand.400" fontSize="sm">
                    {project.image}
                  </Text>
                </Box>
                <Heading as="h3" size="sm" color="brand.800" mb={1}>
                  {project.title}
                </Heading>
                <Text color="brand.500" fontSize="xs">
                  {categories.find(c => c.id === project.category)?.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
       {/* ========== FINAL CTA SECTION ========== */}
      <Box py={{ base: 16, md: 24 }} bg="accent.600" color="white">
        <Container maxW="5xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={8} align="center" textAlign="center">
            <Heading as="h2" size="xl" lineHeight="1.3" color="white">
              Ready to Work with a Company You Trust?
            </Heading>
            <Text fontSize="lg" color="gray.100" lineHeight="1.8">
              We're centrally located in Maitland, serving all of Cape Town. Let's discuss your project.
            </Text>
           <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              bg="white"
              color="accent.600"
              rounded="lg"
              px={10}
              _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
              >
                Get in Touch
              </Button>
          </VStack>
        </Container>
      </Box>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent bg="white">
          <ModalCloseButton />
          <ModalBody py={6}>
            {selectedProject && (
              <VStack spacing={4} align="start">
                <Box
                  bg="brand.100"
                  w="100%"
                  h="400px"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text color="brand.400">{selectedProject.image}</Text>
                </Box>
                <Heading as="h2" size="lg" color="brand.800">
                  {selectedProject.title}
                </Heading>
                <Text color="brand.600" lineHeight="1.8">
                  This is a detailed view of the {selectedProject.title.toLowerCase()} project. Click the image or use the gallery filters to explore other completed projects.
                </Text>
                <Text color="brand.500" fontSize="sm" fontWeight="600">
                  {categories.find(c => c.id === selectedProject.category)?.label}
                </Text>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
