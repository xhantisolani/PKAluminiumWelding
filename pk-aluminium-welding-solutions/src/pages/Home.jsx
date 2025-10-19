import React, { useEffect } from 'react'
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  Grid,
  Image,
  Button,
  Icon,
  Link,
  useColorModeValue,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
    FaCheckCircle, 
    FaMapMarkerAlt, 
    FaDraftingCompass, 
    FaArrowRight, 
    FaRulerCombined, 
    FaWarehouse, 
    FaHandsHelping, // Replaced FaBolt with FaHandsHelping for service
    FaQuoteLeft,
    FaRegQuestionCircle,
    FaAward // New icon for 'Why Choose Us'
} from 'react-icons/fa'
// Ensure Hero component is correctly implemented
import Hero from '../components/common/Hero'

// Utility component for Framer Motion integration
const MotionBox = motion(Box)

// --- Testimonial Data ---
const testimonials = [
    {
        quote: "PK Aluminium delivered flawless structural canopies for our residential complex. The TIG welds are clean and the final powder coating is immaculate. Highly professional and on schedule.",
        name: "Marc S.",
        location: "Clifton Architect",
    },
    {
        quote: "We needed custom racking and a heavy-duty canopy for our fleet vehicle. PK Aluminium's work is robust, lightweight, and built exactly to spec. Excellent service from start to finish.",
        name: "Nomusa B.",
        location: "Industrial Contractor",
    },
]

// --- Main Component ---
export default function Home() {
    useEffect(() => {
        document.title = 'PK Aluminium | Precision Welding & Fabrication';
    }, []);

    const accentColor = useColorModeValue('blue.600', 'blue.400');
    const lightBg = useColorModeValue('white', 'gray.800');
    const darkBg = useColorModeValue('gray.50', 'gray.900');

    // Services data for the snapshot section
    const serviceSnapshot = [
        { icon: FaRulerCombined, title: 'Architectural Balustrades', desc: 'Custom, safety-compliant railings for stairs, balconies, and decks built for the coastal climate.' },
        { icon: FaWarehouse, title: 'Structural Canopies & Awnings', desc: 'Engineered shading solutions for commercial facades, carports, and industrial loading areas.' },
        { icon: FaHandsHelping, title: 'Custom Vehicle Fabrication', desc: 'Bespoke aluminium canopies, toolboxes, and modifications for utility and off-road vehicles.' },
    ]

    // Value Props data
    const valueProps = [
        { icon: FaCheckCircle, title: 'TIG Weld Quality', desc: 'Uncompromising weld aesthetics and structural integrity, crucial for visible architectural work.' },
        { icon: FaDraftingCompass, title: 'Turnkey Design-to-Install', desc: 'Complete project management: site assessment, CAD drawings, fabrication, and clean on-site fitment.' },
        { icon: FaMapMarkerAlt, title: 'Coastal Durability Experts', desc: 'Specializing in marine-grade alloys and powder-coated finishes for longevity in the Western Cape.' },
    ]

  return (
    <Box bg={darkBg}>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Value Propositions (Enhanced) */}
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Heading as="h2" size="xl" mb={2}>Aluminium Fabrication Forged in Quality</Heading>
          <Text mb={10} color={useColorModeValue('gray.600', 'gray.300')} maxW="3xl">
            As specialists in high-grade aluminium TIG welding, we deliver clean, durable structures engineered for longevity in the Western Cape's demanding environment.
          </Text>
        </MotionBox>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {valueProps.map((item, i) => (
            <MotionBox key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.1 }}>
              <Box p={6} rounded="xl" bg={lightBg} shadow="lg" borderBottom="4px solid" borderColor={accentColor} h="full">
                <Stack spacing={3}>
                  <Icon as={item.icon} boxSize={8} color={accentColor} />
                  <Heading size="md">{item.title}</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.300')}>{item.desc}</Text>
                </Stack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      {/* 3. About Us Teaser */}
      <Box bg={useColorModeValue('gray.100', 'gray.800')} py={{ base: 12, md: 20 }}>
        <Container maxW="7xl">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 20 }} alignItems="center">
                {/* Left: Text Content */}
                <MotionBox initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                    <Heading size="2xl" mb={4} color={accentColor}>
                        Our Commitment to Craftsmanship
                    </Heading>
                    <Text fontSize="lg" mb={6} color={useColorModeValue('gray.700', 'gray.300')}>
                        We are a locally owned and operated fabrication workshop based in **Maitland**, serving the entire Cape Town area. Our passion lies in translating complex architectural blueprints into durable, low-maintenance aluminium realities. From initial sketch to final installation, we manage the entire process with meticulous care. We pride ourselves on transparent communication and reliable project timelines.
                    </Text>
                    <Button 
                        as={RouterLink} 
                        to="/about" 
                        colorScheme="blue" 
                        variant="link" 
                        rightIcon={<FaArrowRight />}
                        size="lg"
                    >
                        Learn More About Our Company & Values
                    </Button>
                </MotionBox>
                {/* Right: Image */}
                <MotionBox initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                    <Image
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop" // Professional, clean workshop or team shot
                        alt="PK Aluminium Workshop Team"
                        rounded="xl"
                        shadow="2xl"
                    />
                </MotionBox>
            </SimpleGrid>
        </Container>
      </Box>

      {/* 4. Core Services Snapshot (Clean Boxes, No Images) */}
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" align="flex-end" mb={8}>
          <Box>
            <Heading size="lg" mb={2}>Specialist Fabrication Capabilities</Heading>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>
                We focus exclusively on high-strength aluminium products for lasting performance and modern aesthetics.
            </Text>
          </Box>
          <Button as={RouterLink} to="/services" colorScheme="blue" variant="solid" size="md">View All Services</Button>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {serviceSnapshot.map((card, i) => (
            <MotionBox key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.1 }}>
              <Box p={6} rounded="xl" shadow="md" bg={lightBg} h="full" _hover={{ shadow: 'xl' }}>
                <HStack align="start" spacing={4} mb={3}>
                    <Icon as={card.icon} boxSize={6} color={accentColor} />
                    <Heading size="md">{card.title}</Heading>
                </HStack>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>{card.desc}</Text>
                <Link as={RouterLink} to="/services" color={accentColor} pt={2} display="block" fontSize="sm">Learn More →</Link>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
      
      {/* 5. Why Choose Us? (Replaces Portfolio) */}
      <Box bg={useColorModeValue('gray.100', 'gray.800')} py={{ base: 12, md: 16 }}>
        <Container maxW="7xl">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Stack spacing={4}>
                    <Icon as={FaAward} boxSize={10} color={accentColor} />
                    <Heading size="lg">Why PK Aluminium?</Heading>
                    <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.300')}>
                        We are not just welders; we are **fabrication problem-solvers**. Our specialized focus on aluminium ensures expertise and quality far beyond general metalwork shops.
                    </Text>
                </Stack>
                <VStack align="start" spacing={4}>
                    <HStack align="start" spacing={4}>
                        <Icon as={FaCheckCircle} w={5} h={5} color={accentColor} mt={1} />
                        <Text fontWeight="semibold">Certified Materials</Text>
                    </HStack>
                    <Text color={useColorModeValue('gray.600', 'gray.400')}>
                        We source traceable, high-grade aluminium alloys (6061/6082) engineered for structural applications.
                    </Text>
                    <HStack align="start" spacing={4}>
                        <Icon as={FaCheckCircle} w={5} h={5} color={accentColor} mt={1} />
                        <Text fontWeight="semibold">End-to-End Service</Text>
                    </HStack>
                    <Text color={useColorModeValue('gray.600', 'gray.400')}>
                        We handle everything from initial site measure to final finishing and certified installation.
                    </Text>
                </VStack>
                <VStack align="start" spacing={4}>
                    <HStack align="start" spacing={4}>
                        <Icon as={FaCheckCircle} w={5} h={5} color={accentColor} mt={1} />
                        <Text fontWeight="semibold">Reliable Project Timelines</Text>
                    </HStack>
                    <Text color={useColorModeValue('gray.600', 'gray.400')}>
                        Clear communication on lead times and scheduling ensures your project stays on track and avoids delays.
                    </Text>
                     <Button as={RouterLink} to="/contact" colorScheme="blue" mt={2}>
                        Discuss Your Project
                    </Button>
                </VStack>
            </SimpleGrid>
        </Container>
      </Box>

      {/* 6. Testimonials & FAQ Overview */}
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <Grid templateColumns={{ base: '1fr', md: '1.5fr 1fr' }} gap={10}>
            {/* Left Column: Testimonials */}
            <Box>
                <Heading size="lg" mb={6}>Client Success Stories</Heading>
                <Stack spacing={8}>
                    {testimonials.map((t, i) => (
                        <MotionBox 
                            key={i} 
                            p={6} 
                            bg={lightBg} 
                            rounded="xl" 
                            shadow="md"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Icon as={FaQuoteLeft} boxSize={6} color={accentColor} mb={3} />
                            <Text fontStyle="italic" mb={4}>"{t.quote}"</Text>
                            <Text fontWeight="bold">{t.name}</Text>
                            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>{t.location}</Text>
                        </MotionBox>
                    ))}
                </Stack>
            </Box>

            {/* Right Column: FAQ Overview */}
            <Box>
                <Heading size="lg" mb={6}>Quick Answers (FAQ)</Heading>
                <Stack spacing={4} p={6} bg={useColorModeValue('gray.100', 'gray.800')} rounded="xl">
                    <HStack align="center" spacing={3}>
                        <Icon as={FaRegQuestionCircle} w={5} h={5} color={accentColor} />
                        <Text fontWeight="semibold">What is your typical lead time?</Text>
                    </HStack>
                    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                        Small items: 3-7 days. Architectural projects (gates/balustrades): 3-6 weeks, including site visit and approvals.
                    </Text>
                    
                    <HStack align="center" spacing={3} pt={3}>
                        <Icon as={FaRegQuestionCircle} w={5} h={5} color={accentColor} />
                        <Text fontWeight="semibold">Do you offer on-site welding?</Text>
                    </HStack>
                    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                        Yes, we have a mobile unit for on-site structural welding, fit-offs, and final installations across the Cape Peninsula.
                    </Text>
                </Stack>
                <Button 
                    as={RouterLink} 
                    to="/faq" 
                    colorScheme="blue" 
                    variant="link" 
                    mt={4}
                    rightIcon={<FaArrowRight />}
                >
                    View All FAQs
                </Button>
            </Box>
        </Grid>
      </Container>


      {/* 7. Final CTA (Call to Action) */}
      <Box bg={accentColor} color="white" py={16}>
        <Container maxW="7xl">
          <Stack align="center" spacing={4}>
            <Heading size="xl" textAlign="center">Ready to Start? Request Your Aluminium Welding Quote</Heading>
            <Text color="blue.100" textAlign="center" maxW="3xl">Share measurements and photos for a fast, accurate response. We service all of Cape Town from our Maitland workshop.</Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button as={RouterLink} to="/contact" size="lg" colorScheme="whiteAlpha">Get a Quote</Button>
              <Button as={RouterLink} to="/services" size="lg" variant="outline" colorScheme="whiteAlpha">View Services</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}