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
  FaWindowMaximize,
  FaCarSide, 
  FaLock, 
} from 'react-icons/fa'

// Import the SEO component
import SeoHead from '../components/common/SeoHead'; 


// Custom Motion Components
const MotionBox = motion.create(Box)
const MotionHeading = motion.create(Heading)
const MotionText = motion.create(Text)
const MotionImage = motion.create(Image)

// --- UPDATED: Data for the main service categories (More Detail) ---
const mainServices = [
  {
    icon: FaLock, // Changed to Security Icon
    title: 'Security Gates & Architectural Railings',
    desc: 'Precision-fabricated security barriers, custom sliding/swing gates, window burglar bars, and stylish, safety-compliant balustrades.',
  },
  {
    icon: FaTruckPickup, // Changed to Vehicle Icon
    title: '4x4 & Custom Vehicle Systems',
    desc: 'Bespoke cattle rails, bakkie drawer systems, specialized vehicle canopies, and durable roof racks built for off-road reliability.',
  },
  {
    icon: FaRulerCombined,
    title: 'Structural Canopies & Awnings',
    desc: 'Engineered shading solutions for commercial facades, industrial loading bays, carports, and complex architectural structures.',
  },
  {
    icon: FaDraftingCompass,
    title: 'Industrial & Prototyping',
    desc: 'Custom machine guarding, bespoke tanks/vessels, heavy-duty industrial racking, and converting CAD designs into certified realities.',
  },
]

// Data for technical advantages
const techAdvantages = [
  { icon: FaBolt, title: 'TIG Welding Precision', desc: 'Superior, contaminant-free welds with aesthetically clean, narrow beads and minimal material distortion.' },
  { icon: FaShieldAlt, title: 'Extreme Corrosion Resistance', desc: 'Naturally weather-resistant finish, crucial for Cape Town\'s high-humidity, coastal climate.' },
  { icon: FaWrench, title: 'Full Turnkey Installation', desc: 'We manage the project end-to-end, from shop drawings to on-site fitment and final certification.' },
]

// Dummy ServiceCard for example completeness (Use your actual imported ServiceCard)
const ServiceCard = ({ icon, title, desc, delay }) => (
    <MotionBox
        p={6}
        bg={useColorModeValue('white', 'gray.700')}
        rounded="xl"
        shadow="md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        _hover={{ shadow: 'lg' }}
    >
        <Icon as={icon} w={8} h={8} color={useColorModeValue('blue.600', 'blue.300')} mb={3} />
        <Heading size="md" mb={2}>{title}</Heading>
        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>{desc}</Text>
    </MotionBox>
);


export default function Services() {
  useEffect(() => {
    // document.title is now set via the SeoHead component for consistency
    // document.title = 'Services | PK Aluminium Welding Solutions'
  }, [])

  const accentColor = useColorModeValue('blue.600', 'blue.300')
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  // --- UPDATED SEO Metadata for the Services Page ---
  const seoTitle = "Custom Aluminium Welding & Fabrication Services | Gates, Bakkie Systems, Canopies";
  const seoDescription = "PK Aluminium offers high-precision TIG welding for custom cattle rails, bakkie drawer systems, security gates, architectural balustrades, and structural canopies across the Western Cape.";

  const textFadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <Box bg={bgColor} color={useColorModeValue('gray.800', 'gray.100')}>

      {/* --- SEO IMPLEMENTATION --- */}
      <SeoHead 
        title={seoTitle} 
        description={seoDescription} 
        path="services" // Sets the canonical URL to /services
        ogImage="logo.jpg" 
      />
      {/* --- END SEO --- */}

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
          // RE-INSERTED ORIGINAL IMAGE PATH 
          bgImage="url(/glass-aluminium.webp)" 
          bgPos="center"
          bgSize="cover"
          bgAttachment="fixed"
          _after={{
            content: '""',
            position: 'absolute',
            inset: 0,
            bgGradient: 'linear(to-b, blackAlpha.600, blackAlpha.800)',
          }}
        />
        {/*  */}

        <Container maxW="7xl" position="relative" zIndex="2">
          
          <MotionHeading
            size={{ base: '2xl', sm: '3xl', md: '4xl' }}
            mb={4}
            {...textFadeIn}
            transition={{ delay: 0.1 }}
          >
            Your Specialist in Custom Aluminium Fabrication
          </MotionHeading>
          <MotionText
            color="gray.300"
            maxW="4xl"
            fontSize={{ base: 'lg', md: 'xl' }}
            {...textFadeIn}
            transition={{ delay: 0.3 }}
          >
            PK Aluminium delivers custom solutions from <strong>architectural safety barriers</strong> to <strong>heavy-duty bakkie systems</strong>. We focus on <strong>uncompromising TIG weld quality</strong> and structural integrity for the demanding Cape Town climate.
          </MotionText>
        </Container>
      </Box>

      {/* ------------------------------------- */}
      {/* 2. CORE SERVICE CATEGORIES (Icon Grid) */}
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
          Our Four Main Areas of Fabrication
        </MotionHeading>
        <Text textAlign="center" mb={12} fontSize="lg" color="gray.600">
          We apply our specialized aluminium expertise across residential, commercial, and automotive sectors.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {mainServices.map((service, i) => (
            <MotionBox
              key={i}
              bg={useColorModeValue('white', 'gray.700')}
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
                <Icon as={service.icon} boxSize={10} color={accentColor} mt={1} flexShrink={0} />
                <VStack align="start" spacing={2} minW={0}>
                  <Heading size={{ base: 'md', md: 'lg' }} color={useColorModeValue('gray.800', 'gray.100')}>
                    {service.title}
                  </Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    {service.desc}
                  </Text>
                  <Button variant="link" colorScheme="blue" rightIcon={<FaArrowRight />} size="sm" as={RouterLink} to="/Contact">
                    Get in Touch
                  </Button>
                </VStack>
              </HStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ------------------------------------- */}
      {/* 3. DEDICATED SECTION: VEHICLE FABRICATION (New Deep Dive) */}
      {/* ------------------------------------- */}
      <Box py={{ base: 16, md: 24 }} bg={useColorModeValue('white', 'gray.800')}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
              {/* Right Column: Text Content */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              order={{ base: 2, lg: 1 }}
            >
              <Icon as={FaCarSide} boxSize={12} color={accentColor} mb={4} />
              <Heading size={{ base: 'xl', md: '2xl' }} mb={4} color={useColorModeValue('gray.800', 'gray.100')}>
                Heavy-Duty Bakkie & 4x4 Fabrication
              </Heading>
              <Text fontSize="lg" mb={8} color={useColorModeValue('gray.600', 'gray.400')}>
                Aluminium is the ideal material for vehicle modifications—it’s <strong>lightweight, corrosion-proof, and immensely strong</strong>. We create custom accessories that maximize utility without compromising your vehicle’s payload.
              </Text>

              <VStack spacing={3} align="start" color={useColorModeValue('gray.700', 'gray.300')}>
                <HStack><Icon as={FaArrowRight} w={4} h={4} color={accentColor} /> <Text fontWeight="semibold">Custom <strong>Cattle Rails</strong> and Roll Bars</Text></HStack>
                <HStack><Icon as={FaArrowRight} w={4} h={4} color={accentColor} /> <Text fontWeight="semibold">Bespoke Aluminium <strong>Drawer Systems</strong> & Toolboxes</Text></HStack>
                <HStack><Icon as={FaArrowRight} w={4} h={4} color={accentColor} /> <Text fontWeight="semibold">Load-Bearing <strong>Roof Racks</strong> and Canopies</Text></HStack>
              </VStack>
            </MotionBox>

            {/* Left Column: Image (New Vehicle focus) */}
            <MotionImage
              // UPDATED IMAGE - Use an image of cattle rails or a bakkie system.
              src="/bakkie-system.webp" 
              alt="Custom fabricated aluminium cattle rails or a bakkie drawer system."
              rounded="2xl"
              shadow="2xl"
              h={{ base: '300px', md: '450px' }}
              w="full"
              objectFit="cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              order={{ base: 1, lg: 2 }}
            />
            {/*  */}
          </SimpleGrid>
        </Container>
      </Box>

      <Divider />
      
      {/* ------------------------------------- */}
      {/* 4. DEDICATED SECTION: SECURITY & GATES (New Deep Dive) */}
      {/* ------------------------------------- */}
      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
              {/* Left Column: Image (New Security focus) */}
            <MotionImage
              // UPDATED IMAGE - Use an image of a security gate or a window grille.
              src="/security-gate.webp" 
              alt="Custom fabricated aluminium security gate or window grilles for a property."
              rounded="2xl"
              shadow="2xl"
              h={{ base: '300px', md: '450px' }}
              w="full"
              objectFit="cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              order={{ base: 1, lg: 1 }}
            />
            {/*  */}

            {/* Right Column: Text Content */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              order={{ base: 2, lg: 2 }}
            >
              <Icon as={FaLock} boxSize={12} color={accentColor} mb={4} />
              <Heading size={{ base: 'xl', md: '2xl' }} mb={4} color={useColorModeValue('gray.800', 'gray.100')}>
                Custom Security and Access Control
              </Heading>
              <Text fontSize="lg" mb={6} color={useColorModeValue('gray.600', 'gray.400')}>
                Aluminium provides a modern, low-maintenance alternative to traditional steel for property security. We design structures that blend seamlessly with your architecture while providing robust protection.
              </Text>
              <VStack align="start" spacing={3} color={useColorModeValue('gray.700', 'gray.300')}>
                <HStack><Icon as={FaArrowRight} w={4} h={4} color={accentColor} /> <Text fontWeight="semibold">Sliding, Swing, and Pedestrian <strong>Security Gates</strong></Text></HStack>
                <HStack><Icon as={FaArrowRight} w={4} h={4} color={accentColor} /> <Text fontWeight="semibold">Fixed and Retractable Window Grilles / <strong>Burglar Bars</strong></Text></HStack>
                <HStack><Icon as={FaArrowRight} w={4} h={4} color={accentColor} /> <Text fontWeight="semibold">Integrated Access Control Systems</Text></HStack>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      <Divider />
      
      {/* ------------------------------------- */}
      {/* 5. TECHNICAL ADVANTAGE (Side-by-Side Image - Kept for Technical Focus) */}
      {/* ------------------------------------- */}
      <Box py={{ base: 16, md: 24 }} bg={useColorModeValue('gray.100', 'gray.900')}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            {/* Left Column: Text Content */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              order={{ base: 2, lg: 1 }}
            >
              <Heading size={{ base: 'xl', md: '2xl' }} mb={4} color={useColorModeValue('gray.800', 'gray.100')}>
                The PK Aluminium Technical Edge
              </Heading>
              <Text fontSize="lg" mb={8} color={useColorModeValue('gray.600', 'gray.400')}>
                Aluminium demands specialized techniques. We invest in top-tier equipment and continuous training to ensure our structures are not just strong, but <strong>visually flawless</strong> and designed for South African conditions.
              </Text>

              <VStack spacing={6} align="start">
                {techAdvantages.map((item, i) => (
                  <HStack key={i} align="start" spacing={4}>
                    <Icon as={item.icon} w={6} h={6} color={accentColor} mt={1} />
                    <Box>
                      <Heading size="md" color={useColorModeValue('gray.800', 'gray.100')}>{item.title}</Heading>
                      <Text color={useColorModeValue('gray.600', 'gray.400')}>{item.desc}</Text>
                    </Box>
                  </HStack>
                ))}
              </VStack>
            </MotionBox>

            {/* Right Column: Image */}
            <MotionImage
              // UPDATED IMAGE - TIG weld closeup for technical detail
              src="/pk-welding.webp"
              alt="A close-up shot of an aluminium TIG weld showcasing precision and quality."
              rounded="2xl"
              shadow="2xl"
              h={{ base: '300px', md: '450px' }}
              w="full"
              objectFit="cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              order={{ base: 1, lg: 2 }}
            />
            {/*  */}
          </SimpleGrid>
        </Container>
      </Box>

      <Divider />

      {/* ------------------------------------- */}
      {/* 6. OTHER SUPPORT SERVICES (Service Card Grid) */}
      {/* ------------------------------------- */}
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <MotionHeading
          size="xl"
          mb={8}
          textAlign="center"
          color={useColorModeValue('gray.700', 'gray.200')}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Specialist Support and Repair Services
        </MotionHeading>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
          <ServiceCard icon={FaWrench} title="Repairs & Refinishing" desc="Restoration of existing aluminium structures, crack repair, and powder-coating preparation." delay={0.1} />
          <ServiceCard icon={FaMapMarkerAlt} title="On-Site Welding & Fit-Offs" desc="Mobile service for structural welding, large assembly, and secure fitment across the Cape Peninsula." delay={0.2} />
          <ServiceCard icon={FaShieldAlt} title="Security Grilles & Access" desc="Heavy-duty aluminium bars, grilles, and secure entry systems for commercial properties." delay={0.3} />
          <ServiceCard icon={FaDraftingCompass} title="Prototyping & CAD Design" desc="Work with our in-house designers to convert concepts or rough sketches into technical shop drawings." delay={0.4} />
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ------------------------------------- */}
      {/* 7. FINAL CTA SECTION */}
      {/* ------------------------------------- */}
      <Box bg="blue.700" color="white" py={{ base: 12, md: 20 }} textAlign="center">
        <Container maxW="5xl">
          <MotionHeading
            size={{ base: 'xl', md: '2xl' }}
            mb={4}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready for a Detailed Project Quote?
          </MotionHeading>
          <MotionText
            fontSize={{ base: 'lg', md: 'xl' }}
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
            size={{ base: 'md', md: 'lg' }}
            bg="white"
            color="blue.700"
            rounded="full"
            px={{ base: 8, md: 12 }}
            height={{ base: '48px', md: '55px' }}
            fontSize={{ base: 'lg', md: 'xl' }}
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