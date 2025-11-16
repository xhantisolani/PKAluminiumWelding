import React, { useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  useColorModeValue,
  Stack,
  HStack,
  Icon,
  Button,
  Divider,
  VStack,
  Link,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight, FaQuoteLeft, FaStar } from 'react-icons/fa'

const MotionBox = motion.create(Box)
const MotionImage = motion.create(Image)
const MotionHeading = motion.create(Heading)

const testimonials = [
  { 
    quote: "The custom gate looks phenomenal — clean welds and a perfect powder coat match.", 
    name: "Leana M.", 
    project: "Front Gate & Balustrade",
    rating: 5,
  },
  { 
    quote: "Our delivery canopy was measured, built and fitted on time. Great team, highly recommended.", 
    name: "Neo K.", 
    project: "Vehicle Canopy",
    rating: 5,
  },
  { 
    quote: "Reliable, tidy and professional — they handled a tricky handrail installation effortlessly.", 
    name: "Sifiso P.", 
    project: "Stair Handrail",
    rating: 5,
  },
  { 
    quote: "PK Aluminium delivered flawless structural canopies for our residential complex. The TIG welds are immaculate.", 
    name: "Marc S.", 
    project: "Architectural Canopies",
    rating: 5,
  },
  { 
    quote: "We needed custom racking and a heavy-duty canopy for our fleet vehicle. Robust, lightweight, and built exactly to spec.", 
    name: "Nomusa B.", 
    project: "Industrial Vehicle Modification",
    rating: 5,
  },
  { 
    quote: "Fast turnaround, excellent communication, and the final product exceeded our expectations in every way.", 
    name: "Johan de V.", 
    project: "Security Grilles System",
    rating: 5,
  },
]

export default function Testimonials() {
  useEffect(() => { 
    document.title = 'Testimonials | PK Aluminium Welding Solutions' 
  }, [])

  const lightBg = useColorModeValue('white', 'gray.800')
  const sectionBg = useColorModeValue('gray.50', 'gray.900')
  const accentColor = useColorModeValue('accent.500', 'accent.400')

  return (
    <Box bg={sectionBg}>
      {/* Hero Section */}
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
                backgroundImage: 'url(/assets/Pictures/contact.jpg)',
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
        <Container maxW="7xl" position="relative" zIndex={2}>
          <MotionHeading
            size={{ base: '2xl', md: '4xl' }}
            mb={4}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            What Our Clients Say
          </MotionHeading>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Text fontSize="xl" color="blue.50" maxW="3xl">
              Real feedback from satisfied customers across Cape Town who trust PK Aluminium for their fabrication needs.
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* Testimonials Grid */}
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {testimonials.map((t, i) => (
            <MotionBox
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Box 
                p={8} 
                bg={lightBg} 
                rounded="2xl" 
                shadow="md"
                h="full"
                _hover={{ shadow: 'lg', transform: 'translateY(-4px)' }}
                transition="all 0.3s ease"
                borderTop="4px solid"
                borderColor={accentColor}
              >
                {/* Stars */}
                <HStack spacing={1} mb={4}>
                  {[...Array(t.rating)].map((_, j) => (
                    <Icon key={j} as={FaStar} w={4} h={4} color={accentColor} />
                  ))}
                </HStack>

                {/* Quote Mark */}
                <Icon as={FaQuoteLeft} w={8} h={8} color={accentColor} opacity={0.3} mb={3} />

                {/* Quote Text */}
                <Text 
                  fontStyle="italic" 
                  mb={6} 
                  fontSize="lg"
                  lineHeight="relaxed"
                  color={useColorModeValue('gray.700', 'gray.300')}
                >
                  "{t.quote}"
                </Text>

                {/* Divider */}
                <Divider mb={4} />

                {/* Author Info */}
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold" fontSize="lg" color={useColorModeValue('brand.700', 'accent.400')}>
                    {t.name}
                  </Text>
                  <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                    {t.project}
                  </Text>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      {/* Stats Section */}
      <Box bg={useColorModeValue('brand.50', 'gray.800')} py={{ base: 12, md: 16 }}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} textAlign="center">
            <Box>
              <Heading size="2xl" color={accentColor} mb={2}>350+</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')}>Projects Completed</Text>
            </Box>
            <Box>
              <Heading size="2xl" color={accentColor} mb={2}>98%</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')}>On-Time Delivery</Text>
            </Box>
            <Box>
              <Heading size="2xl" color={accentColor} mb={2}>15+</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')}>Years Experience</Text>
            </Box>
            <Box>
              <Heading size="2xl" color={accentColor} mb={2}>100%</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')}>Client Satisfaction</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg={accentColor} color="white" py={{ base: 16, md: 20 }} textAlign="center">
        <Container maxW="5xl">
          <Heading size="2xl" mb={4}>
            Ready to Join Our Satisfied Clients?
          </Heading>
          <Text fontSize="lg" mb={8} color="whiteAlpha.900">
            Let's discuss your project and show you why our clients consistently choose PK Aluminium.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
            <Button 
              as={RouterLink} 
              to="/contact" 
              bg="white" 
              color={accentColor}
              size="lg"
              px={10}
              _hover={{ bg: 'gray.100' }}
            >
              Get Your Quote Today
            </Button>
            <Button 
              as={RouterLink} 
              to="/gallery" 
              variant="outline"
              color="white"
              borderColor="white"
              size="lg"
              px={10}
              _hover={{ bg: 'whiteAlpha.10' }}
            >
              View Our Work
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
