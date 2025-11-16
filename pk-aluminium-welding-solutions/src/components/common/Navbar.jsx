import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Divider,
} from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { HamburgerIcon, PhoneIcon } from '@chakra-ui/icons'
import { COMPANY } from '../../utils/constants'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <Box bg="white" borderBottom="1px solid" borderColor="brand.200" position="sticky" top={0} zIndex={100}>
      <Container maxW="6xl" px={{ base: 4, md: 8 }}>
        <HStack justify="space-between" py={4} spacing={0}>
          {/* Logo */}
          <Heading
            as={RouterLink}
            to="/"
            size="md"
            color="brand.800"
            _hover={{ textDecoration: 'none' }}
          >
            PKAluminium
          </Heading>

          {/* Desktop Nav */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map(link => {
              const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/')
              return (
                <Box
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  color={isActive ? 'accent.500' : 'brand.600'}
                  fontSize="sm"
                  fontWeight={isActive ? '600' : '500'}
                  _hover={{ color: 'accent.500' }}
                  transition="all 0.2s"
                  cursor="pointer"
                  py={2}
                  px={1}
                  borderBottom={isActive ? '2px solid' : 'none'}
                  borderBottomColor={isActive ? 'accent.500' : 'transparent'}
                >
                  {link.name}
                </Box>
              )
            })}
          </HStack>

          {/* Desktop CTA */}
          <HStack spacing={3} display={{ base: 'none', md: 'flex' }}>
            <Button
              as={RouterLink}
              to="/contact"
              bg="accent.500"
              color="white"
              _hover={{ bg: 'accent.600' }}
              size="sm"
              px={6}
            >
              Contact
            </Button>
            <Button
              as="a"
              href={`tel:${COMPANY.phoneRaw}`}
              bg="brand.800"
              color="white"
              _hover={{ bg: 'brand.900' }}
              size="sm"
              px={6}
              leftIcon={<PhoneIcon />}
            >
              Call
            </Button>
          </HStack>

          {/* Mobile Menu */}
          <IconButton
            icon={<HamburgerIcon />}
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            variant="ghost"
            color="brand.800"
          />

          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg="white">
              <DrawerCloseButton />
              <DrawerBody pt={8}>
                <VStack spacing={6} align="stretch">
                  {navLinks.map(link => {
                    const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/')
                    return (
                      <Box
                        key={link.path}
                        as={RouterLink}
                        to={link.path}
                        color={isActive ? 'accent.500' : 'brand.600'}
                        fontSize="sm"
                        fontWeight={isActive ? '600' : '500'}
                        onClick={onClose}
                        cursor="pointer"
                        py={2}
                        _hover={{ color: 'accent.500' }}
                        borderLeft={isActive ? '3px solid' : 'none'}
                        borderLeftColor={isActive ? 'accent.500' : 'transparent'}
                        pl={isActive ? 2 : 0}
                      >
                        {link.name}
                      </Box>
                    )
                  })}
                  <Divider />
                  <Button
                    as={RouterLink}
                    to="/contact"
                    bg="accent.500"
                    color="white"
                    _hover={{ bg: 'accent.600' }}
                    w="100%"
                    onClick={onClose}
                  >
                    Get a Quote
                  </Button>
                  <Button
                    as="a"
                    href={`tel:${COMPANY.phoneRaw}`}
                    bg="brand.800"
                    color="white"
                    _hover={{ bg: 'brand.900' }}
                    w="100%"
                    leftIcon={<PhoneIcon />}
                  >
                    Call Us
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Container>
    </Box>
  )
}
