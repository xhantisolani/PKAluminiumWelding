import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
  Text,
  Icon,
  Image as ChakraImage, // 👈 FIX: Alias the Chakra Image component
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

// Assuming COMPANY constants are defined elsewhere
const COMPANY = {
    phone: '021 555 1234',
    phoneRaw: '+27215551234',
    whatsappLink: 'https://wa.me/27821234567',
};

// --- Framer Motion Components ---
const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);
const MotionLink = motion.create(Link);
const MotionButton = motion.create(Button);

// --- Navigation Links ---
const Links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },];

// --- NavLink Component (Enhanced with Animation and Styling) ---
function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const linkColor = useColorModeValue('gray.600', 'gray.300');
  const activeColor = useColorModeValue('blue.700', 'blue.300');
  const underlineColor = useColorModeValue('blue.500', 'blue.400');

  return (
    <MotionLink
      as={RouterLink}
      px={3}
      py={2}
      rounded={'sm'}
      to={to}
      fontWeight={isActive ? 'bold' : 'medium'}
      color={isActive ? activeColor : linkColor}
      position="relative"
      overflow="hidden"
      whileHover={{ y: -2 }} 
      transition={{ duration: 0.15 }}
      _hover={{ textDecoration: 'none', color: activeColor }}
    >
      {children}
      {/* Animated Underline Indicator */}
      {isActive && (
        <MotionBox
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          h="2px"
          bg={underlineColor}
          layoutId="nav-underline"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </MotionLink>
  );
}

// --- Main Navbar Component ---
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('white', 'gray.900');
  const border = useColorModeValue('gray.100', 'gray.700');
  const accentColor = useColorModeValue('blue.600', 'blue.400');

  const navbarVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, delay: 0.1 } },
  };

  return (
    <MotionBox
      bg={bg}
      px={4}
      borderBottomWidth="1px"
      borderColor={border}
      position="sticky"
      top="0"
      zIndex="1000"
      shadow="md"
      initial="initial"
      animate="animate"
      variants={navbarVariants}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} maxW="7xl" mx="auto">
        
        
        <HStack 
            spacing={8} 
            alignItems={'center'}
            w={{ base: 'auto', md: '200px' }} 
            justifyContent={{ base: 'flex-start', md: 'flex-start' }}
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
          />
          {/* Replaced the previous Link/Text block with the logo Image */}
            <Link
                as={RouterLink}
                to="/"
                _hover={{ textDecoration: 'none', opacity: 0.8 }} 
                display="flex" 
                alignItems="center"
            >
                <ChakraImage // 👈 FIX: Changed from Image to ChakraImage
                    src="/logo.jpg" // Path to the logo in the public folder
                    alt="PK Aluminium Welding Solutions Logo"
                    height={{ base: '30px', md: '40px' }} // Height for mobile and desktop
                    width="auto" // Maintain aspect ratio
                    objectFit="contain"
                />
            </Link>
        </HStack>

        {/* Center: Desktop Navigation Links (NEW ALIGNMENT) */}
        <HStack 
            as={'nav'} 
            spacing={4} 
            display={{ base: 'none', md: 'flex' }} 
            flex="1" 
            justifyContent="center" 
        >
            {Links.map((link) => (
                <NavLink key={link.to} to={link.to}>
                    {link.label}
                </NavLink>
            ))}
        </HStack>

        {/* Right Side: Call-to-Action Buttons */}
        <Flex 
            alignItems={'center'} 
            gap={3}
            w={{ base: 'auto', md: '200px' }} 
            justifyContent={{ base: 'flex-end', md: 'flex-end' }}
        >
          {/* Primary CTA (Call) - Minimalist Button */}
          <Button
            as="a"
            href={`tel:${COMPANY.phoneRaw}`}
            variant="ghost"
            size="md"
            display={{ base: 'none', sm: 'flex' }}
            leftIcon={<Icon as={FaPhoneAlt} w={4} h={4} color={accentColor} />}
            color={accentColor}
            _hover={{ bg: useColorModeValue('gray.100', 'gray.700'), transform: 'translateY(-1px)' }}
          />

          {/* Secondary CTA (Quote) - Highlighted Button */}
          <MotionButton
            as={RouterLink}
            to="/contact"
            colorScheme="blue"
            size="md"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(66, 153, 225, 0.5)" }}
            transition={{ duration: 0.2 }}
          >
           Get a Quote
          </MotionButton>
        </Flex>
      </Flex>

      {/* Mobile Menu (Animated Collapse) */}
      {isOpen ? (
        <MotionBox
          pb={4}
          display={{ md: 'none' }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Stack as={'nav'} spacing={1}>
            {Links.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </Stack>
        </MotionBox>
      ) : null}
    </MotionBox>
  );
}