import React, { useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  VStack,
  Button,
  Divider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { FaHistory, FaBullseye, FaHandshake, FaToolbox, FaUserTie } from 'react-icons/fa'
// Assuming COMPANY and a placeholder for team members is available
// import { COMPANY } from '../utils/constants' 

// --- Custom Motion Components ---
const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionImage = motion(Image)

// --- Utility Components for the About Page ---

// Component for displaying a core value
const ValueCard = ({ icon, title, description, delay }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <MotionBox
      ref={ref}
      p={6}
      bg="white"
      rounded="xl"
      shadow="lg"
      textAlign="center"
      borderBottom="4px solid"
      borderColor="blue.500"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ scale: 1.03, shadow: 'xl' }}
    >
      <Icon as={icon} w={10} h={10} color="blue.500" mb={4} />
      <Heading size="md" mb={2} color="gray.800">
        {title}
      </Heading>
      <Text color="gray.600" fontSize="sm">
        {description}
      </Text>
    </MotionBox>
  )
}

// Placeholder Team Data
const teamMembers = [
  { name: 'Pieter Kriel', title: 'Founder & Master Welder', img: '/images/team-pieter.jpg', bio: 'Decades of experience in specialized TIG welding and custom design.' },
  { name: 'Sarah Jansen', title: 'Project Director', img: '/images/team-sarah.jpg', bio: 'Manages all architectural projects, ensuring seamless delivery and client satisfaction.' },
  { name: 'Thabo Mbele', title: 'Head of Fabrication', img: '/images/team-thabo.jpg', bio: 'Leads the workshop with a focus on safety, efficiency, and quality control.' },
]

// --- Main About Component ---

export default function About() {
  useEffect(() => {
    document.title = 'About Us | PK Aluminium Welding Solutions'
  }, [])

  const accentColor = useColorModeValue('blue.600', 'blue.300')

  return (
    <Box bg="gray.50" color="gray.800">

      {/* ------------------------------------- */}
      {/* ## HERO SECTION: About Us Title */}
      {/* ------------------------------------- */}
      <Box
        bg="gray.800"
        py={{ base: 20, md: 28 }}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="6xl" zIndex="2">
          <MotionHeading
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="extrabold"
            mb={4}
            color="white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story: Forged in Cape Town
          </MotionHeading>
          <MotionText
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW="3xl"
            color="gray.300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are more than fabricators; we are artisans building the future of aluminium structures on a foundation of **precision, reliability, and local expertise.**
          </MotionText>
        </Container>
        {/* Abstract background graphic for drama */}
        <Box
          position="absolute"
          top="-50%"
          right="-10%"
          w="500px"
          h="500px"
          bg="blue.700"
          opacity="0.1"
          rounded="full"
          transform="rotate(45deg)"
        />
      </Box>

      {/* ------------------------------------- */}
      {/* ## INTRODUCTION & ORIGIN STORY */}
      {/* ------------------------------------- */}
      <Container maxW="6xl" py={{ base: 16, md: 24 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <Heading mb={4} color={accentColor} size="xl">
              From a Single Spark to a South African Leader
            </Heading>
            <Text mb={6} fontSize="lg" lineHeight="tall">
              PK Aluminium Welding Solutions was founded by **Pieter Kriel** right here in **Maitland, Cape Town**, with a simple belief: that aluminium fabrication could be done better. Tired of seeing shoddy work, Pieter channeled his decades of experience as a master welder into a company defined by **uncompromising quality and technical mastery**.
            </Text>
            <Text color="gray.600">
              Today, we serve a broad clientele—from homeowners needing secure, custom gates to architects requiring complex, large-scale structures. While our operation has grown, our commitment to the meticulous craftsmanship of that very first project remains the same.
            </Text>
          </MotionBox>
          <MotionImage
            src="/images/workshop-story.jpg" // A picture showing the founder or old workshop
            alt="PK Aluminium Founder"
            rounded="2xl"
            shadow="2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          />
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ------------------------------------- */}
      {/* ## MISSION, VISION & CORE VALUES */}
      {/* ------------------------------------- */}
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <MotionHeading
          textAlign="center"
          mb={12}
          color="gray.700"
          size="2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Guiding Principles
        </MotionHeading>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <ValueCard
            icon={FaBullseye}
            title="Precision"
            description="We commit to tolerances measured in millimeters, ensuring every structure is flawless, functional, and fit-for-purpose."
            delay={0}
          />
          <ValueCard
            icon={FaHandshake}
            title="Integrity"
            description="Clear communication, transparent pricing, and standing behind our work are non-negotiable elements of every partnership."
            delay={0.2}
          />
          <ValueCard
            icon={FaToolbox}
            title="Durability"
            description="By using only high-grade aluminium and expert welding, we deliver solutions engineered to withstand the harsh coastal climate."
            delay={0.4}
          />
        </SimpleGrid>

        <Stack spacing={4} align="center" mt={16}>
          <Heading as="h3" size="lg" color={accentColor}>
            Our Vision
          </Heading>
          <MotionText
            maxW="5xl"
            textAlign="center"
            fontSize="xl"
            color="gray.700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            To be recognized as the **benchmark for aluminium welding and fabrication excellence** in South Africa, driving innovation in design and manufacturing practices.
          </MotionText>
        </Stack>
      </Container>

      <Divider />

      {/* Stats Band */}
      <Box bg="gray.800" color="white" py={{ base: 12, md: 16 }}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} textAlign="center">
            <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Heading size="2xl" color="brand.300">15+ </Heading>
              <Text color="gray.300">Years of experience</Text>
            </MotionBox>
            <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Heading size="2xl" color="brand.300">350+ </Heading>
              <Text color="gray.300">Projects delivered</Text>
            </MotionBox>
            <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Heading size="2xl" color="brand.300">98% </Heading>
              <Text color="gray.300">On‑time completion</Text>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Capabilities & Certifications */}
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <MotionHeading
          textAlign="center"
          mb={12}
          color="gray.700"
          size="2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Capabilities & Certifications
        </MotionHeading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <MotionBox
            p={8}
            bg="white"
            rounded="2xl"
            shadow="lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Heading size="md" mb={4} color={accentColor}>Workshop Capabilities</Heading>
            <VStack align="start" spacing={3} color="gray.700">
              <Text>• TIG and MIG welding for aluminium assemblies</Text>
              <Text>• Cutting, bending and jigging for repeatable accuracy</Text>
              <Text>• Surface prep and finishing ready for powder coating</Text>
              <Text>• In‑house prototyping and fit testing</Text>
            </VStack>
          </MotionBox>
          <MotionBox
            p={8}
            bg="white"
            rounded="2xl"
            shadow="lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Heading size="md" mb={4} color={accentColor}>Certifications & Safety</Heading>
            <VStack align="start" spacing={3} color="gray.700">
              <Text>• Qualified TIG operators with aluminium focus</Text>
              <Text>• Safe work practices and site compliance</Text>
              <Text>• Material traceability on request</Text>
              <Text>• Quality checks prior to installation</Text>
            </VStack>
          </MotionBox>
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ------------------------------------- */}
      {/* ## MEET THE TEAM / LEADERSHIP */}
      {/* ------------------------------------- */}
      <Box bg="gray.100" py={{ base: 16, md: 24 }}>
        <Container maxW="6xl">
          <MotionHeading
            textAlign="center"
            mb={12}
            color="gray.700"
            size="2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The PK Aluminium Leadership
          </MotionHeading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {teamMembers.map((member, i) => (
              <MotionBox
                key={i}
                bg="white"
                rounded="2xl"
                shadow="xl"
                textAlign="center"
                overflow="hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ translateY: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Image src={member.img} alt={member.name} h="300px" w="full" objectFit="cover" filter="grayscale(20%)" />
                <Box p={6}>
                  <Heading size="lg" color={accentColor} mb={1}>
                    {member.name}
                  </Heading>
                  <Text fontWeight="bold" color="gray.600" mb={3}>
                    {member.title}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {member.bio}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ------------------------------------- */}
      {/* ## CTA SECTION: Trust Builder */}
      {/* ------------------------------------- */}
      <Box bg="blue.700" color="white" py={20} textAlign="center">
        <MotionHeading
          size="2xl"
          mb={4}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Work with a Company You Trust?
        </MotionHeading>
        <MotionText
          fontSize="xl"
          mb={8}
          color="blue.100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We’re centrally located in Maitland, serving all of Cape Town. Let's discuss your project.
        </MotionText>
        <Button
          as="a"
          href="/contact"
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
          Get in Touch
        </Button>
      </Box>
    </Box>
  )
}