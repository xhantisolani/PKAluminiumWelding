import React from 'react'
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  HStack,
  Divider,
  Icon,
  SimpleGrid,
  VStack,
  Tooltip,
  Button
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion' 

// Placeholder COMPANY data structure for demonstration
const COMPANY = {
    location: 'Maitland, Cape Town, Western Cape',
    phone: '021 555 1234',
    phoneRaw: '+27215551234',
    email: 'info@pk-aluminium.co.za',
    // Updated WhatsApp Number and Link
    whatsappNumber: '+27677822389',
    whatsappLink: 'https://wa.me/27677822389', 
};

// Define MotionBox for animation (FIXED DEPRECATION)
const MotionBox = motion.create(Box);

export default function Footer() {
  const bgColor = useColorModeValue('gray.800', 'gray.900');
  const textColor = useColorModeValue('gray.300', 'gray.400');
  const accentColor = useColorModeValue('blue.400', 'blue.300');

  // Animation variants for the floating button
  const ctaVariants = {
    initial: { scale: 0.9, opacity: 0, x: 50 },
    animate: { scale: 1, opacity: 1, x: 0 },
  };

  // **Official WhatsApp Green Color**
  const whatsappColor = '#25D366';

  return (
    <Box 
      bg={bgColor} 
      color={textColor} 
      py={{ base: 10, md: 16 }} 
      mt={0}
    >
      <Container as={Stack} maxW={'7xl'} spacing={{ base: 10, md: 16 }}>

        {/* 1. MAIN LINKS & CONTACT INFO */}
        <SimpleGrid 
          columns={{ base: 1, sm: 2, md: 4 }} 
          spacing={{ base: 8, md: 10 }} 
          textAlign={{ base: 'center', sm: 'left' }}
        >
          {/* Column 1: Company Info */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={3}>
            <Text fontWeight="bold" fontSize="lg" color="white">
              PK Aluminium
            </Text>
            <Text fontSize="sm" maxW="200px">
              Precision TIG Welding & Fabrication based in Maitland, Cape Town.
            </Text>
          </VStack>

          {/* Column 2: Quick Links */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={3}>
            <Text fontWeight="semibold" color="white">
              Sitemap
            </Text>
            <Link as={RouterLink} to="/about" _hover={{ color: accentColor }}>
              About Us
            </Link>
            <Link as={RouterLink} to="/services" _hover={{ color: accentColor }}>
              Services
            </Link>
            <Link as={RouterLink} to="/faq" _hover={{ color: accentColor }}>
              FAQ
            </Link>
          </VStack>

          {/* Column 3: Contact */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={3}>
            <Text fontWeight="semibold" color="white">
              Contact Us
            </Text>
            <HStack>
              <Icon as={FaPhoneAlt} w={4} h={4} color={accentColor} />
              <Link href={`tel:${COMPANY.phoneRaw}`} _hover={{ color: accentColor }}>
                {COMPANY.phone}
              </Link>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} w={4} h={4} color={accentColor} />
              <Link href={`mailto:${COMPANY.email}`} _hover={{ color: accentColor }}>
                {COMPANY.email}
              </Link>
            </HStack>
            <HStack>
              <Icon as={FaWhatsapp} w={4} h={4} color={accentColor} />
              <Link href={COMPANY.whatsappLink} isExternal _hover={{ color: accentColor }}>
                WhatsApp Now
              </Link>
            </HStack>
          </VStack>
          
          {/* Column 4: Location */}
           <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={3}>
            <Text fontWeight="semibold" color="white">
              Location
            </Text>
            <HStack align="flex-start">
              <Icon as={FaMapMarkerAlt} w={4} h={4} color={accentColor} mt={1} />
              <Text maxW="150px" fontSize="sm">
                {COMPANY.location}
              </Text>
            </HStack>
          </VStack>

        </SimpleGrid>

        <Divider borderColor={useColorModeValue('gray.700', 'gray.700')} />

        {/* 2. BOTTOM BAR (Copyright & Legal) */}
        <Stack 
          direction={{ base: 'column', md: 'row' }} 
          spacing={4} 
          justify="space-between" 
          align="center"
        >
          <Text fontSize={'sm'} order={{ base: 2, md: 1 }} textAlign={{ base: 'center', md: 'left' }}>
            © {new Date().getFullYear()} PK Aluminium Welding Solutions.
          </Text>
          <HStack spacing={4} order={{ base: 1, md: 2 }}>
            <Link as={RouterLink} to="/privacy" fontSize={'sm'} _hover={{ color: accentColor }}>
              Privacy Policy
            </Link>
            <Link as={RouterLink} to="/terms" fontSize={'sm'} _hover={{ color: accentColor }}>
              Terms of Use
            </Link>
          </HStack>
        </Stack>
      </Container>
      
      <Tooltip label={`Chat with us on WhatsApp (${COMPANY.whatsappNumber})`} placement="left" hasArrow>
        <MotionBox
          as={Link}
          href={COMPANY.whatsappLink}
          isExternal
          position="fixed"
          bottom={{ base: '20px', md: '30px' }}
          right={{ base: '20px', md: '30px' }}
          zIndex="2000"
          initial="initial"
          animate="animate"
          variants={ctaVariants}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)" }}
        >
          <Button 
            bg={whatsappColor}
            color="white" 
            _hover={{ bg: "#1DA851" }} // Slightly darker green on hover
            size="lg"
            rounded="full"
            p={0} 
            w={{ base: '50px', md: '60px' }}
            h={{ base: '50px', md: '60px' }}
            boxShadow="xl"
            aria-label="Chat on WhatsApp"
          >
            <Icon as={FaWhatsapp} w={6} h={6} />
          </Button>
        </MotionBox>
      </Tooltip>
    </Box>
  )
}