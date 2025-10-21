import React, { useEffect } from 'react'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Image,
  Icon,
  Button,
  Divider,
  HStack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

import {
  FaTruckPickup,
  FaRulerCombined,
  FaBolt,
  FaShieldAlt,
  FaWrench,
  FaDraftingCompass,
  FaArrowRight,
  FaMapMarkerAlt,
  FaTools,
  FaWindowMaximize, // New icon for glass integration
} from 'react-icons/fa'

import ServiceCard from '../components/common/ServiceCard' // Assumes the updated ServiceCard is in place

// Custom Motion Components
const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionImage = motion(Image)

// Data for the main service categories
const mainServices = [
  {
    icon: FaRulerCombined,
    title: 'Architectural Balustrades & Gates',
    desc: 'Bespoke designs for balconies, staircases, and boundary control. Features include secure locking, automation options, and maintenance-free finishes.',
  },
  {
    icon: FaTools,
    title: 'Structural & Architectural Canopies',
    desc: 'Design and fabrication of fixed awnings, carports, and complex shading structures engineered to meet local building codes.',
  },
  {
    icon: FaTruckPickup,
    title: 'Specialty Vehicle Fabrication',
    desc: 'Lightweight, high-strength aluminium canopies, custom racks, toolboxes, and modifications for utility and off-road vehicles.',
  },
  {
    icon: FaDraftingCompass,
    title: 'Industrial & Custom Projects',
    desc: 'From machine guards and safety rails to bespoke prototypes and retail display structures, we handle complex, one-off fabrication requests.',
  },
]

// Data for technical advantages (used in the dedicated section)
const techAdvantages = [
  { icon: FaBolt, title: 'TIG Welding Precision', desc: 'Superior, contaminant-free welds with aesthetically clean, narrow beads and minimal material distortion.' },
  { icon: FaShieldAlt, title: 'Extreme Corrosion Resistance', desc: 'Naturally weather-resistant finish, crucial for Cape Town\'s high-humidity, coastal climate.' },
  { icon: FaWrench, title: 'Full Turnkey Installation', desc: 'We manage the project end-to-end, from shop drawings to on-site fitment and final certification.' },
]

export default function Services() {
  useEffect(() => {
    document.title = 'Services | PK Aluminium Welding Solutions'
  }, [])

  const accentColor = useColorModeValue('blue.600', 'blue.300')
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  const textFadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <Box bg={bgColor} color={useColorModeValue('gray.800', 'gray.100')}>
      
      {/* ------------------------------------- */}
      {/* 1. HERO SECTION: Dynamic & Detailed */}
      {/* ------------------------------------- */}
      <Box 
        bg="gray.800" 
        py={{ base: 20, md: 32 }} 
        color="white"
        position="relative" 
        overflow="hidden" 
        minH={{ base: '300px', md: '450px' }}
      >
        {/* Background Image Container */}
        <Box
          aria-hidden
          position="absolute"
          inset={0}
          bgImage="url(/glass-aluminium.webp)" // IMAGE 1
          bgPos="center"
          bgSize="cover"
          bgAttachment="fixed" 
          // Dark Overlay for readability
          _after={{
            content: '""',
            position: 'absolute',
            inset: 0,
            bgGradient: 'linear(to-b, blackAlpha.600, blackAlpha.800)', 
          }}
        />

        <Container maxW="7xl" position="relative" zIndex="2">
          <MotionHeading
            size={{ base: '2xl', md: '4xl' }}
            mb={4}
            {...textFadeIn}
            transition={{ delay: 0.1 }}
          >
            Precision Aluminium Welding & Fabrication
          </MotionHeading>
          <MotionText
            color="gray.300"
            maxW="4xl"
            fontSize="xl"
            {...textFadeIn}
            transition={{ delay: 0.3 }}
          >
            PK Aluminium is your specialist partner for durable, custom-engineered aluminium structures. We focus on <strong>uncompromising quality</strong> and <strong>architectural aesthetics</strong> for commercial and residential clients in the Western Cape.
          </MotionText>
        </Container>
      </Box>

      {/* ------------------------------------- */}
      {/* 2. CORE SERVICE CATEGORIES (Image-Driven Grid) */}
      {/* ------------------------------------- */}
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <MotionHeading
          size="2xl"
          mb={4}
          textAlign="center"
          color={accentColor}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Our Fabrication Expertise
        </MotionHeading>
        <Text textAlign="center" mb={12} fontSize="lg" color="gray.600">
          Focused exclusively on aluminium, we guarantee high-strength, lightweight solutions for every application.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {mainServices.map((service, i) => (
            <MotionBox
              key={i}
              bg="white"
              rounded="2xl"
              overflow="hidden"
              shadow="xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02, shadow: '2xl' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <HStack align="start" p={8} spacing={6}>
                <Icon as={service.icon} boxSize={10} color={accentColor} mt={1} />
                <VStack align="start" spacing={2}>
                  <Heading size="lg" color="gray.800">
                    {service.title}
                  </Heading>
                  <Text color="gray.600">
                    {service.desc}
                  </Text>
                  <Button variant="link" colorScheme="blue" rightIcon={<FaArrowRight />} size="sm" as={RouterLink} to="/portfolio">
                    View Gallery
                  </Button>
                </VStack>
              </HStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ------------------------------------- */}
      {/* 3. TECHNICAL ADVANTAGE (Side-by-Side Image) */}
      {/* ------------------------------------- */}
      <Box py={{ base: 16, md: 24 }} bg="white">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Heading size="2xl" mb={4} color="gray.800">
                The PK Aluminium Technical Edge
              </Heading>
              <Text fontSize="lg" mb={8} color="gray.600">
                Aluminium demands specialized techniques. We invest in top-tier equipment and continuous training to ensure our structures are not just strong, but **visually flawless** and designed for South African conditions.
              </Text>

              <VStack spacing={6} align="start">
                {techAdvantages.map((item, i) => (
                  <HStack key={i} align="start" spacing={4}>
                    <Icon as={item.icon} w={6} h={6} color={accentColor} mt={1} />
                    <Box>
                      <Heading size="md" color="gray.800">{item.title}</Heading>
                      <Text color="gray.600">{item.desc}</Text>
                    </Box>
                  </HStack>
                ))}
              </VStack>
            </MotionBox>

            <MotionImage
              src="/pk-welding.webp" // IMAGE 2
              alt="A close-up shot of an aluminium TIG weld in a professional workshop setting."
              rounded="2xl"
              shadow="2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </SimpleGrid>
        </Container>
      </Box>

      <Divider />
      
      {/* ------------------------------------- */}
      {/* 4. SPECIAL FOCUS: ALUMINIUM & GLASS INTEGRATION (New Section for glass.webp) */}
      {/* ------------------------------------- */}
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
          <MotionImage
            // ✅ IMAGE 3: glass.webp
            src="/glass.webp" 
            alt="A modern, custom-fabricated aluminium framed glass balustrade overlooking a coastal view."
            rounded="2xl"
            shadow="2xl"
            h={{ base: '300px', md: '450px' }} 
            w="full"
            objectFit="cover"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Icon as={FaWindowMaximize} boxSize={12} color={accentColor} mb={4} />
            <Heading size="2xl" mb={4} color="gray.800">
              Seamless Aluminium & Glass Integration
            </Heading>
            <Text fontSize="lg" mb={6} color="gray.600">
              Modern architecture frequently requires lightweight frames that pair perfectly with large glass panels. Our expertise ensures **structural integrity and flawless aesthetics** for:
            </Text>
            <VStack align="start" spacing={3} color="gray.700">
              <HStack><Icon as={FaArrowRight} w={4} h={4} color={accentColor} /> <Text fontWeight="semibold">Frameless & Framed Glass Balustrades</Text></HStack>
              <HStack><Icon as={FaArrowRight} w={4} h={4} color={accentColor} /> <Text fontWeight="semibold">Architectural Window Frames & Door Systems</Text></HStack>
              <HStack><Icon as={FaArrowRight} w={4} h={4} color={accentColor} /> <Text fontWeight="semibold">Internal Partitioning and Office Structures</Text></HStack>
            </VStack>
          </MotionBox>
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ------------------------------------- */}
      {/* 5. OTHER SUPPORT SERVICES (Service Card Grid) */}
      {/* ------------------------------------- */}
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <MotionHeading
          size="xl"
          mb={8}
          textAlign="center"
          color="gray.700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Supporting Services
        </MotionHeading>

        {/* Using the ServiceCard component here */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
          <ServiceCard icon={FaWrench} title="Repairs & Refinishing" desc="Restoration of existing aluminium structures, crack repair, and powder-coating preparation." delay={0.1} />
          <ServiceCard icon={FaMapMarkerAlt} title="On-Site Welding & Fit-Offs" desc="Mobile service for structural welding, large assembly, and secure fitment across the Cape Peninsula." delay={0.2} />
          <ServiceCard icon={FaShieldAlt} title="Security Grilles & Access" desc="Heavy-duty aluminium bars, grilles, and secure entry systems for commercial properties." delay={0.3} />
          <ServiceCard icon={FaDraftingCompass} title="Prototyping & CAD Design" desc="Work with our in-house designers to convert concepts or rough sketches into technical shop drawings." delay={0.4} />
        </SimpleGrid>
      </Container>

      {/* ------------------------------------- */}
      {/* 6. FINAL CTA SECTION */}
      {/* ------------------------------------- */}
      <Box bg="blue.700" color="white" py={20} textAlign="center">
        <Container maxW="5xl">
          <MotionHeading
            size="2xl"
            mb={4}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready for a Detailed Project Quote?
          </MotionHeading>
          <MotionText
            fontSize="xl"
            mb={8}
            color="blue.100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Provide us with your specifications and we’ll prepare a competitive, transparent quote with accurate lead times.
          </MotionText>
          <Button
            as={RouterLink}
            to="/contact"
            size="lg"
            bg="white"
            color="blue.700"
            rounded="full"
            px={12}
            height="55px"
            fontSize="xl"
            _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
            shadow="2xl"
          >
            Request a Free Site Assessment
          </Button>
        </Container>
      </Box>
    </Box>
  )
}