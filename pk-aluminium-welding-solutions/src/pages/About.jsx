import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Stack,
  Button,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function About() {
  return (
    <Box as="main" w="100%">
      {/* Hero */}
      <Box bg="brand.800" color="white" py={{ base: 12, md: 16 }}>
        <Container maxW="5xl" px={{ base: 6, md: 8 }}>
          <VStack align="start" spacing={4}>
            <Heading as="h1" size="2xl">
              About PKAluminium
            </Heading>
            <Text fontSize="lg" color="gray.100">
              Quality fabrication solutions with decades of experience
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Our Story */}
      <Box py={{ base: 16, md: 20 }} bg="white">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={12} align="center">
            <VStack align="start" spacing={6} flex={1}>
              <Heading as="h2" size="lg" color="brand.800">
                Our Story
              </Heading>
              <Text color="brand.600" lineHeight="1.8">
                PKAluminium started with a simple mission: take customer quotes and turn them into reality. From custom welding jobs to full-scale fabrication projects, we've been delivering quality work for years.
              </Text>
              <Text color="brand.600" lineHeight="1.8">
                What started as a passion for welding and metalwork has grown into a trusted service for residential and commercial clients. We take pride in every job — whether it's a small repair or a major fabrication project.
              </Text>
              <Text color="brand.600" lineHeight="1.8">
                Today, we're known for reliability, quality craftsmanship, and our ability to handle anything you throw at us. Gates, canopies, trailers, machinery repairs, structural steel — if it's metal, we can work with it.
              </Text>
            </VStack>

            <Box
              flex={1}
              bg="brand.100"
              h={{ base: '300px', md: '400px' }}
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="brand.400" fontSize="sm">
                Workshop Image
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Our Values */}
      <Box py={{ base: 16, md: 20 }} bg="brand.50">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={12} align="stretch">
            <Heading as="h2" size="lg" color="brand.800">
              Our Guiding Principles
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {[
                {
                  title: 'Quality First',
                  description: 'Every project meets our high standards. We use quality materials and precision techniques on every job.',
                },
                {
                  title: 'Customer Focused',
                  description: 'We listen to your needs and deliver exactly what you want. Your satisfaction is our measure of success.',
                },
                {
                  title: 'Reliable Service',
                  description: 'On-time delivery, professional work, and honest communication. You can count on us to deliver.',
                },
              ].map((principle, idx) => (
                <Box key={idx} p={8} bg="white" borderRadius="lg" borderLeft="4px solid" borderLeftColor="accent.500">
                  <Heading as="h3" size="md" mb={3} color="brand.800">
                    {principle.title}
                  </Heading>
                  <Text color="brand.600" lineHeight="1.8">
                    {principle.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Experience */}
      <Box py={{ base: 16, md: 20 }} bg="white">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={12} align="stretch">
            <VStack spacing={2} align="start">
              <Heading as="h2" size="lg" color="brand.800">
                Our Capabilities
              </Heading>
              <Text color="brand.600">
                Comprehensive fabrication services tailored to your needs
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
              <VStack align="start" spacing={4}>
                <Heading as="h3" size="md" color="brand.800">
                  What We Can Do
                </Heading>
                <VStack align="start" spacing={3} color="brand.600" fontSize="sm">
                  <Text>• Custom welding and metal fabrication</Text>
                  <Text>• Gates, railings, and security structures</Text>
                  <Text>• Canopies, pergolas, and outdoor structures</Text>
                  <Text>• Trailers and heavy-duty projects</Text>
                  <Text>• Machinery repairs and restoration</Text>
                  <Text>• Doors, windows, and custom frames</Text>
                </VStack>
              </VStack>

              <VStack align="start" spacing={4}>
                <Heading as="h3" size="md" color="brand.800">
                  Materials & Expertise
                </Heading>
                <VStack align="start" spacing={3} color="brand.600" fontSize="sm">
                  <Text>• Steel and aluminium welding</Text>
                  <Text>• Professional fabrication equipment</Text>
                  <Text>• Quality finishes and treatments</Text>
                  <Text>• Machinery repair and restoration</Text>
                  <Text>• Professional installation service</Text>
                </VStack>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Stats */}
      <Box py={{ base: 16, md: 20 }} bg="brand.800" color="white">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} textAlign="center">
            {[
              { number: '25+', label: 'Years in Business' },
              { number: '500+', label: 'Projects Completed' },
              { number: '1000+', label: 'Satisfied Clients' },
              { number: '100%', label: 'Quality Assured' },
            ].map((stat, idx) => (
              <VStack key={idx} spacing={2}>
                <Heading as="h3" size="xl" color="accent.500">
                  {stat.number}
                </Heading>
                <Text fontSize="sm" color="gray.100">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ========== OUR EXPERTISE SECTION ========== */}
      <Box py={{ base: 16, md: 24 }} bg="white">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={12} align="stretch">
            <VStack spacing={2} align="start">
              <Heading as="h2" size="xl" color="brand.800">
                Our Expertise: Custom Fabrication Made Local
              </Heading>
              <Text color="brand.600">
                Specialized solutions for automotive, outdoor, security, and architectural needs
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {[
                {
                  category: 'Automotive & Outdoor',
                  items: [
                    'Custom Cattle Rails and Roll Bars',
                    'Durable Bakkie Drawer Systems',
                    'Robust Roof Racks and Tent Mounting Systems',
                    'Lightweight and reliable Trailers (Custom builds)',
                  ],
                },
                {
                  category: 'Security & Architectural',
                  items: [
                    'High-security Burglar Bars',
                    'Residential & Commercial Gates (Sliding/Swing)',
                    'Precision-built Window Frames',
                    'Custom Fencing and Security Structures',
                  ],
                },
                {
                  category: 'Core Fabrication Process',
                  items: [
                    'TIG and MIG welding for aluminium assemblies',
                    'Cutting, bending, and jigging for repeatable accuracy',
                    'Surface prep and finishing (ready for powder coating)',
                    'In-house prototyping and fit testing',
                  ],
                },
              ].map((expertise, idx) => (
                <Box key={idx} p={8} bg="brand.50" borderRadius="lg" border="1px solid" borderColor="brand.200">
                  <Heading as="h3" size="md" color="brand.800" mb={4}>
                    {expertise.category}
                  </Heading>
                  <VStack align="start" spacing={3}>
                    {expertise.items.map((item, i) => (
                      <HStack key={i} spacing={3} align="flex-start">
                        <Box w={2} h={2} bg="accent.500" borderRadius="full" mt={1.5} flexShrink={0} />
                        <Text color="brand.600" fontSize="sm" lineHeight="1.6">
                          {item}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* ========== FINAL CTA SECTION ========== */}
      <Box py={{ base: 16, md: 24 }} bg="brand.800" color="white">
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
              bg="accent.500"
              color="white"
              _hover={{ bg: 'accent.600' }}
              size="lg"
              px={8}
              fontWeight="600"
            >
              Get in Touch
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
