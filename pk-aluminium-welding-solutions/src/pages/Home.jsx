import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  Stack,
  Divider,
  Image,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Home() {
  return (
    <Box as="main" w="100%">
      {/* ========== HERO SECTION ========== */}
      <Box  
        color="white" 
        py={{ base: 12, sm: 16, md: 32 }} 
        position="relative" 
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/assets/Pictures/landing-page-2.jpg)',
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
          bg: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      >
        <Container maxW="6xl" px={{ base: 4, sm: 5, md: 8 }} position="relative" zIndex={2}>
          <VStack align="start" spacing={{ base: 5, md: 8 }} maxW="100%">
            <Heading as="h1" size={{ base: 'lg', sm: 'xl', md: '3xl' }} lineHeight="1.2" fontWeight="900" color="white">
              Custom Welding & Fabrication Solutions
            </Heading>
            <Text fontSize={{ base: 'sm', sm: 'base', md: 'lg' }} color="gray.100" lineHeight="1.8">
              From custom quotes to complete fabrication, repairs, and installations. We weld, fabricate, and fix whatever you need — gates, canopies, trailers, machinery repairs, and more. No job too big or too small.
            </Text>
            <VStack spacing={{ base: 2, sm: 3, md: 4 }} pt={{ base: 2, md: 4 }} w={{ base: '100%', sm: 'auto' }} align={{ base: 'stretch', sm: 'flex-start' }}>
              <Button
                as={RouterLink}
                to="/contact"
                bg="accent.500"
                color="white"
                _hover={{ bg: 'accent.600', transform: 'translateY(-2px)' }}
                size={{ base: 'md', md: 'lg' }}
                px={{ base: 6, md: 8 }}
                fontWeight="600"
                w={{ base: '100%', sm: 'auto' }}
                fontSize={{ base: 'sm', md: 'base' }}
                transition="all 0.2s"
              >
                Request a Quote
              </Button>
              <Button
                as={RouterLink}
                to="/gallery"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{ bg: 'whiteAlpha.100', transform: 'translateY(-2px)' }}
                size={{ base: 'md', md: 'lg' }}
                px={{ base: 6, md: 8 }}
                fontWeight="600"
                w={{ base: '100%', sm: 'auto' }}
                fontSize={{ base: 'sm', md: 'base' }}
                transition="all 0.2s"
              >
                View Portfolio
              </Button>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* ========== WHO WE ARE SECTION ========== */}
      <Box py={{ base: 12, sm: 16, md: 24 }} bg="white">
        <Container maxW="6xl" px={{ base: 4, sm: 5, md: 8 }}>
          <VStack spacing={{ base: 8, md: 12 }} align="stretch">
            <VStack spacing={{ base: 2, md: 3 }} align="start">
              <Heading as="h2" size={{ base: 'md', md: '2xl' }} color="brand.800">
                Who We Are
              </Heading>
              <Box h="1px" w={16} bg="accent.500" />
            </VStack>

            <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 8, md: 12 }} align="center">
              <VStack align="start" spacing={{ base: 4, md: 6 }} flex={1}>
                <Text fontSize={{ base: 'sm', md: 'lg' }} color="brand.700" lineHeight="1.8" fontWeight="500">
                  At PKAluminium, we specialize in custom welding and fabrication based on your exact specifications. We take your ideas and bring them to life.
                </Text>
                <Text color="brand.600" lineHeight="1.8" fontSize={{ base: 'xs', md: 'sm' }}>
                  Whether you need a one-off custom piece, a full-scale fabrication project, machinery repairs, or anything in between, we handle it all. We work with steel and aluminium to create gates, canopies, trailers, structural work, and more. If it can be welded or fabricated, we can do it.
                </Text>

                <VStack align="start" spacing={{ base: 3, md: 4 }} pt={{ base: 2, md: 4 }}>
                  <Box>
                    <Heading as="h3" size={{ base: 'xs', md: 'sm' }} color="brand.800" mb={2}>
                      What We Do
                    </Heading>
                    <VStack align="start" spacing={{ base: 1, md: 2 }} color="brand.600" fontSize={{ base: '10px', sm: 'xs', md: 'sm' }}>
                      <Text>• Custom welding fabrication to your exact specifications</Text>
                      <Text>• Gates, railings, and security structures</Text>
                      <Text>• Canopies, pergolas, and shade structures</Text>
                      <Text>• Trailers, structural frames, and heavy-duty projects</Text>
                      <Text>• Machinery repairs and metal restoration</Text>
                      <Text>• Industrial and commercial welding solutions</Text>
                    </VStack>
                  </Box>
                </VStack>
              </VStack>

              {/* Placeholder for workshop image */}
              <Box
                flex={1}
                bg="brand.100"
                h={{ base: '250px', sm: '300px', md: '400px' }}
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="brand.400"
                fontSize={{ base: '10px', sm: 'xs', md: 'sm' }}
                border="2px solid"
                borderColor="brand.200"
                minW={{ base: '100%', md: 'auto' }}
              >
                Workshop Image
              </Box>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* ========== WHAT WE DO / SERVICES SECTION ========== */}
      <Box py={{ base: 16, md: 24 }} bg="brand.50">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={12} align="stretch">
            <VStack spacing={3} align="start">
              <Heading as="h2" size="2xl" color="brand.800">
                What We Do
              </Heading>
              <Box h="1px" w={16} bg="accent.500" />
              <Text color="brand.600" fontSize="md">
                Comprehensive fabrication services tailored to your needs
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {[
                {
                  title: 'Custom Welding & Fabrication',
                  description: 'Bring your ideas to life with custom welding and metal fabrication.',
                  details: [
                    'Design-to-fabrication service based on your specifications',
                    'Steel and aluminium welding',
                    'One-off custom pieces or large-scale projects',
                    'Professional consultation to refine your designs',
                  ],
                },
                {
                  title: 'Gates & Railings',
                  description: 'Custom-built gates and railings for homes and businesses.',
                  details: [
                    'Sliding gates with manual or automated operation',
                    'Swing gates with durable finishes',
                    'Security gates and reinforced structures',
                    'Custom railings for stairs, balconies, and terraces',
                  ],
                },
                {
                  title: 'Canopies & Structures',
                  description: 'Weather-resistant canopies, pergolas, and shade structures.',
                  details: [
                    'Parking canopies and car ports',
                    'Pergolas and outdoor shade structures',
                    'Carport designs built to last',
                    'Custom sizing for any space or requirement',
                  ],
                },
                {
                  title: 'Trailers & Heavy Projects',
                  description: 'Industrial-grade trailers and large-scale fabrication work.',
                  details: [
                    'Custom trailer fabrication and design',
                    'Heavy-duty structural welding',
                    'Industrial frameworks and supports',
                    'Bespoke metal structures for any application',
                  ],
                },
                {
                  title: 'Repairs & Restoration',
                  description: 'Fix broken machinery, equipment, and metal structures.',
                  details: [
                    'Machinery repair and welding',
                    'Broken equipment restoration',
                    'Metal structure repairs and reinforcement',
                    'Quick turnaround on urgent repairs',
                  ],
                },
                {
                  title: 'Doors & Windows',
                  description: 'Custom doors and window frames in steel and aluminium.',
                  details: [
                    'Steel entry doors and security doors',
                    'Aluminium sliding and folding systems',
                    'Custom window frames',
                    'Commercial and residential solutions',
                  ],
                },
              ].map((service, idx) => (
                <Box key={idx} p={8} bg="white" borderRadius="lg" border="1px solid" borderColor="brand.200">
                  <Heading as="h3" size="md" color="brand.800" mb={3}>
                    {service.title}
                  </Heading>
                  <Text color="brand.600" lineHeight="1.8" mb={4} fontSize="sm">
                    {service.description}
                  </Text>
                  <VStack align="start" spacing={2} mb={6}>
                    {service.details.map((detail, i) => (
                      <Text key={i} color="brand.600" fontSize="sm">
                        • {detail}
                      </Text>
                    ))}
                  </VStack>
                  <Button
                    as={RouterLink}
                    to="/contact"
                    bg="accent.500"
                    color="white"
                    _hover={{ bg: 'accent.600' }}
                    size="sm"
                    w="100%"
                  >
                    Inquire About This Service →
                  </Button>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* ========== OUR EXPERTISE SECTION ========== */}
      <Box py={{ base: 16, md: 24 }} bg="white">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={12} align="stretch">
            <VStack spacing={3} align="start">
              <Heading as="h2" size="2xl" color="brand.800">
                Our Expertise
              </Heading>
              <Box h="1px" w={16} bg="accent.500" />
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
              <VStack align="start" spacing={8}>
                <Box>
                  <Heading as="h3" size="md" color="brand.800" mb={4}>
                    Workshop Capabilities
                  </Heading>
                  <VStack align="start" spacing={3} color="brand.600" fontSize="sm">
                    <HStack spacing={3}>
                      <Box w={2} h={2} bg="accent.500" borderRadius="full" mt={1} />
                      <Text>CNC cutting and precision welding</Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Box w={2} h={2} bg="accent.500" borderRadius="full" mt={1} />
                      <Text>Professional metal bending and forming</Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Box w={2} h={2} bg="accent.500" borderRadius="full" mt={1} />
                      <Text>Powder coating and premium finishing</Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Box w={2} h={2} bg="accent.500" borderRadius="full" mt={1} />
                      <Text>Large-scale fabrication capacity</Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Box w={2} h={2} bg="accent.500" borderRadius="full" mt={1} />
                      <Text>In-house design consultation services</Text>
                    </HStack>
                  </VStack>
                </Box>
              </VStack>

              <VStack align="start" spacing={8}>
                <Box>
                  <Heading as="h3" size="md" color="brand.800" mb={4}>
                    Materials & Standards
                  </Heading>
                  <VStack align="start" spacing={3} color="brand.600" fontSize="sm">
                    <HStack spacing={3}>
                      <Box w={2} h={2} bg="accent.500" borderRadius="full" mt={1} />
                      <Text>Premium aluminium alloys for durability</Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Box w={2} h={2} bg="accent.500" borderRadius="full" mt={1} />
                      <Text>High-grade structural steel</Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Box w={2} h={2} bg="accent.500" borderRadius="full" mt={1} />
                      <Text>Industry-standard finishes and treatments</Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Box w={2} h={2} bg="accent.500" borderRadius="full" mt={1} />
                      <Text>Full building code compliance</Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Box w={2} h={2} bg="accent.500" borderRadius="full" mt={1} />
                      <Text>Professional installation service included</Text>
                    </HStack>
                  </VStack>
                </Box>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* ========== FEATURED PROJECTS SECTION ========== */}
      <Box py={{ base: 12, sm: 16, md: 24 }} bg="brand.50">
        <Container maxW="6xl" px={{ base: 4, sm: 5, md: 8 }}>
          <VStack spacing={{ base: 8, md: 12 }} align="stretch">
            <VStack spacing={{ base: 2, md: 3 }} align="start">
              <Heading as="h2" size={{ base: 'md', md: '2xl' }} color="brand.800">
                Featured Projects
              </Heading>
              <Box h="1px" w={16} bg="accent.500" />
              <Text color="brand.600" fontSize={{ base: 'xs', md: 'md' }}>
                A selection of completed fabrication projects
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 8 }}>
              {[
                { title: 'Residential Gate System', category: 'Gates', desc: 'Custom sliding gate with automation' },
                { title: 'Commercial Canopy', category: 'Canopies', desc: 'Large-scale parking structure' },
                { title: 'Steel Railing Installation', category: 'Railings', desc: 'Modern safety railing system' },
                { title: 'Sliding Door Suite', category: 'Doors', desc: 'High-end residential doors' },
                { title: 'Industrial Fabrication', category: 'Custom', desc: 'Large structural steel project' },
                { title: 'Pergola Structure', category: 'Canopies', desc: 'Retractable outdoor pergola' },
              ].map((project, idx) => (
                <Box
                  key={idx}
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{ transform: 'scale(1.02)' }}
                  as={RouterLink}
                  to="/gallery"
                >
                  <Box
                    bg="brand.200"
                    h={{ base: '220px', sm: '260px', md: '280px' }}
                    borderRadius="lg"
                    mb={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="brand.400"
                    fontSize={{ base: '9px', sm: '10px', md: 'sm' }}
                    border="1px solid"
                    borderColor="brand.300"
                  >
                    {project.title}
                  </Box>
                  <Heading as="h3" size={{ base: 'xs', md: 'sm' }} color="brand.800" mb={1}>
                    {project.title}
                  </Heading>
                  <Text color="brand.500" fontSize={{ base: '9px', md: 'xs' }} fontWeight="600" mb={2}>
                    {project.category}
                  </Text>
                  <Text color="brand.600" fontSize={{ base: '10px', md: 'sm' }}>
                    {project.desc}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            <VStack align="center" pt={6}>
              <Button
                as={RouterLink}
                to="/gallery"
                variant="outline"
                borderColor="brand.600"
                color="brand.600"
                _hover={{ bg: 'brand.50' }}
                size="lg"
              >
                View Full Portfolio
              </Button>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <Box py={{ base: 16, md: 24 }} bg="white">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={12} align="stretch">
            <VStack spacing={3} align="start">
              <Heading as="h2" size="2xl" color="brand.800">
                Why Choose PKAluminium
              </Heading>
              <Box h="1px" w={16} bg="accent.500" />
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {[
                {
                  title: 'Proven Reliability',
                  desc: 'With over 25 years in the business, we have built a reputation for delivering on time, every time. Our clients trust us with their most important projects.',
                },
                {
                  title: 'Quality Craftsmanship',
                  desc: 'Every project is built to exacting standards using premium materials and precision techniques. We never compromise on quality.',
                },
                {
                  title: 'Professional Team',
                  desc: 'Our experienced fabricators combine traditional metalworking expertise with modern fabrication technology for exceptional results.',
                },
                {
                  title: 'Custom Design Support',
                  desc: 'We work closely with you to understand your vision and bring it to life. From concept to installation, we handle every detail.',
                },
              ].map((item, idx) => (
                <Box key={idx} p={8} bg="brand.50" borderRadius="lg" borderLeft="4px solid" borderLeftColor="accent.500">
                  <Heading as="h3" size="md" color="brand.800" mb={3}>
                    {item.title}
                  </Heading>
                  <Text color="brand.600" lineHeight="1.8">
                    {item.desc}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            {/* Stats */}
            <Box bg="brand.800" color="white" p={12} borderRadius="lg" mt={8}>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} textAlign="center">
                {[
                  { number: '25+', label: 'Years Experience' },
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
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* ========== CLIENT TESTIMONIALS SECTION ========== */}
      <Box py={{ base: 16, md: 24 }} bg="brand.50">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={12} align="stretch">
            <VStack spacing={3} align="start">
              <Heading as="h2" size="2xl" color="brand.800">
                What Our Clients Say
              </Heading>
              <Box h="1px" w={16} bg="accent.500" />
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {[
                {
                  quote: 'PKAluminium delivered exactly what we needed. The quality is outstanding and the team was professional throughout the entire process.',
                  author: 'Maria Rodriguez',
                  project: 'Residential Gate Installation',
                },
                {
                  quote: 'We have worked with them multiple times. Reliable, professional, and they always deliver on time. Highly recommended.',
                  author: 'James Mitchell',
                  project: 'Commercial Canopy Project',
                },
              ].map((testimonial, idx) => (
                <Box key={idx} p={8} bg="white" borderRadius="lg" border="1px solid" borderColor="brand.200">
                  <Text color="brand.700" fontSize="md" fontStyle="italic" mb={4} lineHeight="1.9">
                    "{testimonial.quote}"
                  </Text>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="600" color="brand.800">
                      {testimonial.author}
                    </Text>
                    <Text fontSize="sm" color="brand.500">
                      {testimonial.project}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* ========== CALL TO ACTION SECTION ========== */}
      <Box py={{ base: 12, sm: 16, md: 24 }} bg="brand.800" color="white">
        <Container maxW="5xl" px={{ base: 4, sm: 5, md: 8 }}>
          <VStack spacing={{ base: 4, md: 8 }} align="center" textAlign="center">
            <Heading as="h2" size={{ base: 'md', md: '2xl' }} lineHeight="1.2" color={"white"}>
              Ready to Bring Your Project to Life?
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'lg' }} color="gray.100" lineHeight="1.8">
              Contact our team today for a free consultation and detailed quote. Let's discuss how PKAluminium can help you achieve your fabrication goals.
            </Text>
            <VStack spacing={{ base: 2, sm: 3, md: 4 }} pt={{ base: 2, md: 4 }} w={{ base: '100%', sm: 'auto' }} align={{ base: 'stretch', sm: 'center' }}>
              <Button
                as={RouterLink}
                to="/contact"
                bg="accent.500"
                color="white"
                _hover={{ bg: 'accent.600', transform: 'translateY(-2px)' }}
                size={{ base: 'md', md: 'lg' }}
                px={{ base: 6, md: 8 }}
                fontWeight="600"
                w={{ base: '100%', sm: 'auto' }}
                fontSize={{ base: 'sm', md: 'base' }}
                transition="all 0.2s"
              >
                Request a Quote
              </Button>
              <Button
                as={RouterLink}
                to="/contact"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{ bg: 'whiteAlpha.100', transform: 'translateY(-2px)' }}
                size={{ base: 'md', md: 'lg' }}
                px={{ base: 6, md: 8 }}
                fontWeight="600"
                w={{ base: '100%', sm: 'auto' }}
                fontSize={{ base: 'sm', md: 'base' }}
                transition="all 0.2s"
              >
                Contact Us
              </Button>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
