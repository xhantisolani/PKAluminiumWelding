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
  Button, // Used here
  Text,
  Icon,
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
const MotionButton = motion.create(Button); // <--- NEW MOTION COMPONENT

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
          <Link
            as={RouterLink}
            to="/"
            fontWeight="extrabold"
            fontSize="xl"
            color={accentColor}
            _hover={{ textDecoration: 'none', color: useColorModeValue('blue.700', 'blue.300') }}
            whiteSpace="nowrap"
          >
            PK <Text as="span" display={{ base: 'inline', sm: 'inline' }}>Aluminium</Text>
          </Link>
        </HStack>

        {/* Center: Desktop Navigation Links (NEW ALIGNMENT) */}
        <HStack 
            as={'nav'} 
            spacing={4} 
            display={{ base: 'none', md: 'flex' }} 
            flex="1" // Takes up remaining space
            justifyContent="center" // CENTERS the links within this available space
        >
            {Links.map((link) => (
                <NavLink key={link.to} to={link.to}>
                    {link.label}
                </NavLink>
            ))}
        </HStack>

        {/* Right Side: Call-to-Action Buttons */}
        {/* Use a fixed width on desktop to match the left side's width for perfect centering */}
        <Flex 
            alignItems={'center'} 
            gap={3}
            w={{ base: 'auto', md: '200px' }} // Adjusted width for alignment
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
          <MotionButton // <--- FIX APPLIED HERE
            as={RouterLink}
            to="/contact"
            colorScheme="blue"
            size="md"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(66, 153, 225, 0.5)" }}
            transition={{ duration: 0.2 }}
          >
            Quote
          </MotionButton>
        </Flex>
      </Flex>

      {/* Mobile Menu (Animated Collapse) */}
      {/* The main content won't shift because the mobile menu is rendered *inside* the sticky nav bar */}
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