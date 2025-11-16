import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  Stack,
  HStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      title: 'Custom Welding & Fabrication',
      description: 'Your Idea, Our Expertise',
      details: `We start with your concept and bring it to life. Whether you have a detailed design or just a rough idea, we work with you to create exactly what you need.

From small custom pieces to large-scale projects, we handle all your welding and fabrication needs. Our team uses state-of-the-art equipment combined with expert craftsmanship to deliver precision results every time.

Perfect for: One-off custom projects, prototypes, replacements, or any metal fabrication job you can imagine.`,
    },
    {
      title: 'Gates & Railings',
      description: 'Security, Style, and Durability',
      details: `We build custom gates and railings that combine functionality with professional aesthetics. Whether for residential or commercial use, our gates are built to last.

Options include:
• Sliding gates (manual or automated)
• Swing gates with smooth operation
• Security gates with reinforced structures
• Custom railings for any application
• Decorative and functional designs

Every gate is built to your specifications, finished to your standards, and installed professionally.`,
    },
    {
      title: 'Canopies & Shade Structures',
      description: 'Protection from the Elements',
      details: `We design and build canopies, pergolas, carports, and shade structures that provide protection and enhance your space.

What we build:
• Parking canopies and carports
• Pergolas and outdoor shade structures
• Weather-resistant coverings
• Custom-sized structures for any space
• Durable finishes that withstand the elements

From concept to installation, we handle everything. All structures are engineered for durability and built to last.`,
    },
    {
      title: 'Trailers & Heavy Projects',
      description: 'Industrial-Grade Fabrication',
      details: `We specialize in heavy-duty fabrication for trailers, industrial frames, and large-scale structural projects.

Our capabilities:
• Custom trailer design and fabrication
• Heavy-duty structural welding
• Industrial frameworks and supports
• Large metal structures for any purpose
• Commercial and industrial solutions

No project is too big. We have the expertise, equipment, and experience to handle serious metal work.`,
    },
    {
      title: 'Machinery Repairs & Restoration',
      description: 'Fix It Right, Fast',
      details: `When your machinery breaks down, we fix it. We specialize in welding repairs and metal restoration for industrial equipment.

What we repair:
• Broken machinery and equipment
• Welded joints and structural damage
• Worn or damaged metal components
• Industrial equipment restoration
• Urgent repair turnarounds

We understand downtime costs. We work quickly without compromising on quality to get you back in business.`,
    },
    {
      title: 'Doors, Windows & Frames',
      description: 'Strong, Secure, Professional',
      details: `Custom-built doors, windows, and frames in steel and aluminium for residential and commercial properties.

We create:
• Steel entry and security doors
• Sliding and folding door systems
• Custom window frames
• Aluminium and steel combinations
• Commercial and residential solutions

Every door and frame is built to specification, finished professionally, and installed with care.`,
    },
    {
      title: 'Structural Steel Work',
      description: 'Building the Backbone',
      details: `We handle structural steel fabrication for buildings, warehouses, and industrial projects.

Our expertise includes:
• Building frameworks and supports
• Warehouse and industrial structures
• Reinforced beams and columns
• Staircase fabrication
• Support structures for any application

Engineered for safety and built with precision. All work meets industry standards and codes.`,
    },
    {
      title: 'Custom Metal Art & Decor',
      description: 'Aesthetics Meets Function',
      details: `Beyond functional fabrication, we create custom metal art and decorative pieces that add character to any space.

We build:
• Decorative metal screens and features
• Custom railings with artistic design
• Metal art installations
• Bespoke decorative elements
• Architectural metalwork

Functionality meets aesthetics. Every piece is built to last and designed to impress.`,
    },
  ]

  return (
    <Box as="main" w="100%">
      {/* Hero */}
      <Box bg="brand.800" color="white" py={{ base: 12, md: 16 }}>
        <Container maxW="5xl" px={{ base: 6, md: 8 }}>
          <VStack align="start" spacing={4}>
            <Heading as="h1" size="2xl" color={"white"}>
              Our Services
            </Heading>
            <Text fontSize="lg" color="gray.100">
              Custom welding, fabrication, repairs, and installations. Whatever you need, we can build it.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Services List */}
      <Box py={{ base: 16, md: 20 }} bg="white">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={20} align="stretch">
            {services.map((service, idx) => (
              <Box key={idx}>
                <Stack
                  direction={{ base: 'column', md: idx % 2 === 0 ? 'row' : 'row-reverse' }}
                  spacing={12}
                  align="flex-start"
                >
                  {/* Text */}
                  <VStack align="start" spacing={6} flex={1}>
                    <Box>
                      <Heading as="h2" size="lg" color="brand.800" mb={1}>
                        {service.title}
                      </Heading>
                      <Text color="accent.500" fontSize="sm" fontWeight="600">
                        {service.description}
                      </Text>
                    </Box>
                    <Text color="brand.600" whiteSpace="pre-line" lineHeight="1.9" fontSize="sm">
                      {service.details}
                    </Text>
                    <Button
                      as={RouterLink}
                      to="/contact"
                      bg="accent.500"
                      color="white"
                      _hover={{ bg: 'accent.600' }}
                      size="md"
                    >
                      Get a Quote for This Service
                    </Button>
                  </VStack>

                  {/* Placeholder Image */}
                  <Box
                    flex={1}
                    bg="brand.100"
                    h={{ base: '300px', md: '400px' }}
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="brand.400"
                    fontSize="sm"
                    border="1px solid"
                    borderColor="brand.200"
                  >
                    {service.title}
                  </Box>
                </Stack>

                {idx < services.length - 1 && <Box h="1px" bg="brand.200" mt={16} />}
              </Box>
            ))}
          </VStack>
        </Container>
      </Box>

      {/* Process Section */}
      <Box py={{ base: 16, md: 20 }} bg="brand.50">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={12} align="stretch">
            <VStack spacing={2} align="start">
              <Heading as="h2" size="xl" color="brand.800">
                Our Process
              </Heading>
              <Text color="brand.600">
                From your idea to finished product
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
              {[
                {
                  step: '1',
                  title: 'Consultation',
                  desc: 'You bring your idea. We listen, ask questions, and understand your needs.',
                },
                {
                  step: '2',
                  title: 'Design & Quote',
                  desc: 'We create a design, provide a detailed quote, and discuss options with you.',
                },
                {
                  step: '3',
                  title: 'Fabrication',
                  desc: 'We build it right. Our team works with precision and quality on every detail.',
                },
                {
                  step: '4',
                  title: 'Installation & Handover',
                  desc: 'We finish strong. Professional installation and your complete satisfaction.',
                },
              ].map((phase, idx) => (
                <Box key={idx} p={6} bg="white" borderRadius="lg" textAlign="center">
                  <Box
                    w={12}
                    h={12}
                    bg="accent.500"
                    color="white"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="bold"
                    fontSize="lg"
                    mx="auto"
                    mb={4}
                  >
                    {phase.step}
                  </Box>
                  <Heading as="h3" size="sm" color="brand.800" mb={2}>
                    {phase.title}
                  </Heading>
                  <Text color="brand.600" fontSize="sm">
                    {phase.desc}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ base: 16, md: 20 }} bg="accent.600" color="white">
        <Container maxW="5xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={6} align="center" textAlign="center">
            <Heading as="h2" size="lg" color="white">
              Ready for a Detailed Project Quote?
            </Heading>
            <Text fontSize="md" color="gray.100">
              Provide us with your specifications and we’ll prepare a competitive, transparent quote with accurate lead times.
            </Text>
            <HStack spacing={4}>
             <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              bg="white"
              color="accent.600"
              borderColor="white"
              rounded="lg"
              px={10}
              _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
              >
              Request a Quote
            </Button>
              
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              bg="brand.800"
              color="white"
              rounded="lg"
              px={10}
              variant="outline"
              _hover={{ bg: 'brand.600', transform: 'translateY(-2px)' }}
              >
              Get in Touch
           </Button>
          </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
