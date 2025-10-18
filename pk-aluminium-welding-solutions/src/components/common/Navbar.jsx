import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import {
  Box, Flex, HStack, IconButton, Link, useColorMode, useDisclosure, useColorModeValue, Stack, Button, Tooltip
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import { COMPANY } from '../../utils/constants'

const Links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

function NavLink({ to, children }) {
  const location = useLocation()
  const active = location.pathname === to
  const color = useColorModeValue(active ? 'teal.600' : 'gray.700', active ? 'teal.200' : 'gray.300')
  return (
    <Link
      as={RouterLink}
      px={3}
      py={2}
      rounded={'md'}
      to={to}
      fontWeight={active ? 'bold' : 'medium'}
      _hover={{ textDecoration: 'none', color: useColorModeValue('teal.700','teal.200') }}
      color={color}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.900')
  const border = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box bg={bg} px={4} borderBottomWidth="1px" borderColor={border} position="sticky" top="0" zIndex="1000">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} maxW="7xl" mx="auto">
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box fontWeight="bold" fontSize="lg" color="teal.500">PK Aluminium Welding</Box>
          <HStack as={'nav'} spacing={2} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
            ))}
          </HStack>
        </HStack>

        <Flex alignItems={'center'} gap={2}>
          <Tooltip label={`Call ${COMPANY.phone}`}>
            <Button as="a" href={`tel:${COMPANY.phoneRaw}`} variant="ghost" size="sm">
              Call
            </Button>
          </Tooltip>
          <Tooltip label="Chat on WhatsApp">
            <Button as="a" href={COMPANY.whatsappLink} target="_blank" rel="noreferrer" colorScheme="whatsapp" size="sm">
              WhatsApp
            </Button>
          </Tooltip>
          <Button onClick={toggleColorMode} variant="ghost" aria-label="Toggle color mode" size="sm">
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Button as={RouterLink} to="/contact" colorScheme="teal" size="sm">Get a Quote</Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={2}>
            {Links.map((link) => (
              <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}
