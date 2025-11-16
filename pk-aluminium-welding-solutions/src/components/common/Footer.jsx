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
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'

// Company Data
const COMPANY = {
  location: '4 Benes Street, Maitland, Cape Town, Western Cape, 7405, South Africa',
  phone: '+27 68 592 7370',
  phoneRaw: '+27685927370',
  email: 'info@pkaluminiumweldingsolutions.co.za',
  whatsappNumber: '+27685927370',
  whatsappLink: 'https://wa.me/27685927370',
}

// Developer Credit
const DEVELOPER = {
  name: 'Ninja Tech Holdings',
  url: 'https://ninjatechholdings.co.za',
}

// Motion wrapper
const MotionBox = motion(Box)

export default function Footer() {
  const bgColor = useColorModeValue('gray.900', 'gray.900')
  const textColor = useColorModeValue('gray.300', 'gray.400')

  // GOLD ACCENT COLOR
  const accentColor = '#D4AF37' // Gold

  const ctaVariants = {
    initial: { scale: 0.9, opacity: 0, x: 50 },
    animate: { scale: 1, opacity: 1, x: 0 },
  }

  return (
    <Box bg={bgColor} color={textColor} py={{ base: 8, sm: 12, md: 16 }} mt={0}>
      <Container as={Stack} maxW={'7xl'} spacing={{ base: 8, sm: 12, md: 16 }} px={{ base: 4, sm: 5, md: 8 }}>

        {/* MAIN GRID */}
        <SimpleGrid 
          columns={{ base: 1, sm: 2, md: 4 }} 
          spacing={{ base: 6, sm: 8, md: 10 }} 
          textAlign={{ base: 'center', sm: 'left' }}
        >

          {/* Column 1 */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={3}>
            <Text fontWeight="bold" fontSize={{ base: 'sm', md: 'lg' }} color="white">
              PK Aluminium
            </Text>
            <Text fontSize={{ base: '10px', sm: 'xs', md: 'sm' }}>
              Precision TIG Welding & Fabrication based in Maitland, Cape Town.
            </Text>
            <HStack spacing={{ base: 3, md: 4 }} pt={2}>
              <Link href="https://www.facebook.com/profile.php?id=61583221354152" isExternal _hover={{ color: accentColor }}>
                <Icon as={FaFacebookF} w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} color="white" _hover={{ color: accentColor }} transition="color 0.2s" />
              </Link>
              <Link href="https://www.instagram.com/pkaluminiumwelding/?hl=en" isExternal _hover={{ color: accentColor }}>
                <Icon as={FaInstagram} w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} color="white" _hover={{ color: accentColor }} transition="color 0.2s" />
              </Link>
              <Link href="https://www.tiktok.com/@pkaluminium3?lang=en" isExternal _hover={{ color: accentColor }}>
                <Icon as={FaTiktok} w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} color="white" _hover={{ color: accentColor }} transition="color 0.2s" />
              </Link>
            </HStack>
          </VStack>

          {/* Column 2 */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={3}>
            <Text fontWeight="semibold" color="white" fontSize={{ base: 'sm', md: 'base' }}>
              Sitemap
            </Text>
            <Link as={RouterLink} to="/about" _hover={{ color: accentColor }} fontSize={{ base: '10px', sm: 'xs', md: 'sm' }}>
              About Us
            </Link>
            <Link as={RouterLink} to="/services" _hover={{ color: accentColor }} fontSize={{ base: '10px', sm: 'xs', md: 'sm' }}>
              Services
            </Link>
            <Link as={RouterLink} to="/gallery" _hover={{ color: accentColor }} fontSize={{ base: '10px', sm: 'xs', md: 'sm' }}>
              Gallery
            </Link>
            <Link as={RouterLink} to="/faq" _hover={{ color: accentColor }} fontSize={{ base: '10px', sm: 'xs', md: 'sm' }}>
              FAQ
            </Link>
          </VStack>

          {/* Column 3 */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={3}>
            <Text fontWeight="semibold" color="white" fontSize={{ base: 'sm', md: 'base' }}>
              Contact Us
            </Text>

            <HStack spacing={{ base: 2, md: 3 }}>
              <Icon as={FaPhoneAlt} w={{ base: 3, md: 4 }} h={{ base: 3, md: 4 }} color={accentColor} />
              <Link href={`tel:${COMPANY.phoneRaw}`} _hover={{ color: accentColor }} fontSize={{ base: '10px', sm: 'xs', md: 'sm' }}>
                {COMPANY.phone}
              </Link>
            </HStack>

            <HStack spacing={{ base: 2, md: 3 }}>
              <Icon as={FaEnvelope} w={{ base: 3, md: 4 }} h={{ base: 3, md: 4 }} color={accentColor} />
              <Link href={`mailto:${COMPANY.email}`} _hover={{ color: accentColor }} fontSize={{ base: '10px', sm: 'xs', md: 'sm' }}>
                {COMPANY.email}
              </Link>
            </HStack>

            <HStack spacing={{ base: 2, md: 3 }}>
              <Icon as={FaWhatsapp} w={{ base: 3, md: 4 }} h={{ base: 3, md: 4 }} color={accentColor} />
              <Link href={COMPANY.whatsappLink} isExternal _hover={{ color: accentColor }} fontSize={{ base: '10px', sm: 'xs', md: 'sm' }}>
                WhatsApp Now
              </Link>
            </HStack>
          </VStack>

          {/* Column 4 */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={3}>
            <Text fontWeight="semibold" color="white" fontSize={{ base: 'sm', md: 'base' }}>
              Location
            </Text>
            <HStack align="flex-start" spacing={{ base: 2, md: 3 }}>
              <Icon as={FaMapMarkerAlt} w={{ base: 3, md: 4 }} h={{ base: 3, md: 4 }} color={accentColor} mt={1} />
              <Text maxW="160px" fontSize={{ base: '10px', sm: 'xs', md: 'sm' }}>
                {COMPANY.location}
              </Text>
            </HStack>
          </VStack>

        </SimpleGrid>

        <Divider borderColor="gray.700" />

        {/* COPYRIGHT */}
        <Stack 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between" 
          align="center"
          spacing={{ base: 3, md: 4 }}
        >
          <Text fontSize={{ base: '9px', sm: 'xs', md: 'sm' }}>
            © {new Date().getFullYear()} PK Aluminium Welding Solutions.
          </Text>

          <HStack spacing={{ base: 3, md: 4 }}>
            <Link as={RouterLink} to="/privacy" fontSize={{ base: '9px', sm: 'xs', md: 'sm' }} _hover={{ color: accentColor }}>
              Privacy Policy
            </Link>
            <Link as={RouterLink} to="/terms" fontSize={{ base: '9px', sm: 'xs', md: 'sm' }} _hover={{ color: accentColor }}>
              Terms of Use
            </Link>
          </HStack>
        </Stack>

        {/* Developer Credit */}
        <Box w="full" pt={4}>
          <Text fontSize={{ base: '8px', sm: '9px', md: 'xs' }} textAlign="center" color="gray.500">
            Site developed by{' '}
            <Link 
              href={DEVELOPER.url} 
              isExternal 
              fontWeight="semibold"
              _hover={{ color: accentColor }}
            >
              {DEVELOPER.name}
            </Link>
          </Text>
        </Box>

      </Container>

      {/* Floating WhatsApp Button */}
      <Tooltip 
        label={`Chat with us on WhatsApp (${COMPANY.whatsappNumber})`} 
        placement="left" 
        hasArrow
      >
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
          whileHover={{ scale: 1.07 }}
        >
          <Button
            bg="#25D366"
            color="white"
            size="lg"
            rounded="full"
            w={{ base: '50px', md: '60px' }}
            h={{ base: '50px', md: '60px' }}
            boxShadow="0 8px 18px rgba(0,0,0,0.3)"
            _hover={{ transform: 'scale(1.1)' }}
            transition="all 0.2s"
          >
            <Icon as={FaWhatsapp} w={{ base: 5, md: 6 }} h={{ base: 5, md: 6 }} />
          </Button>
        </MotionBox>
      </Tooltip>

    </Box>
  )
}
