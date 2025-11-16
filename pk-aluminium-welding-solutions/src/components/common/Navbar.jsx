import {
  Box,
  Container,
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
  Image,
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
      <Container maxW="7xl" px={{ base: 3, sm: 4, md: 6, lg: 8 }}>
        <HStack justify="space-between" py={{ base: 3, md: 4 }} spacing={0}>
          {/* Logo */}
          <Box
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: 'none' }}
            transition="all 0.2s"
            display="flex"
            alignItems="center"
          >
            <Image
              src="/assets/logo.svg"
              alt="PKAluminium Logo"
              h={{ base: '40px', md: '50px' }}
              w="auto"
              maxW={{ base: '120px', md: '160px' }}
              objectFit="contain"
            />
          </Box>

          {/* Desktop Nav */}
          <HStack spacing={{ base: 4, lg: 8 }} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map(link => {
              const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/')
              return (
                <Box
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  color={isActive ? 'accent.500' : 'brand.600'}
                  fontSize={{ base: 'xs', lg: 'sm' }}
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
          <HStack spacing={{ base: 2, lg: 3 }} display={{ base: 'none', md: 'flex' }}>
            <Button
              as={RouterLink}
              to="/contact"
              bg="accent.500"
              color="white"
              _hover={{ bg: 'accent.600', transform: 'translateY(-1px)' }}
              size={{ base: 'xs', lg: 'sm' }}
              px={{ base: 4, lg: 6 }}
              transition="all 0.2s"
            >
              Contact
            </Button>
            <Button
              as="a"
              href={`tel:${COMPANY.phoneRaw}`}
              bg="brand.800"
              color="white"
              _hover={{ bg: 'brand.900', transform: 'translateY(-1px)' }}
              size={{ base: 'xs', lg: 'sm' }}
              px={{ base: 4, lg: 6 }}
              leftIcon={<PhoneIcon />}
              transition="all 0.2s"
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
            size="md"
            _hover={{ bg: 'brand.50' }}
          />

          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg="white">
              <DrawerCloseButton size="lg" />
              <DrawerBody pt={{ base: 6, sm: 8 }}>
                <VStack spacing={{ base: 4, sm: 6 }} align="stretch">
                  {navLinks.map(link => {
                    const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/')
                    return (
                      <Box
                        key={link.path}
                        as={RouterLink}
                        to={link.path}
                        color={isActive ? 'accent.500' : 'brand.600'}
                        fontSize={{ base: 'sm', sm: 'md' }}
                        fontWeight={isActive ? '600' : '500'}
                        onClick={onClose}
                        cursor="pointer"
                        py={2}
                        px={2}
                        _hover={{ color: 'accent.500', bg: 'brand.50' }}
                        borderLeft={isActive ? '3px solid' : 'none'}
                        borderLeftColor={isActive ? 'accent.500' : 'transparent'}
                        pl={isActive ? 3 : 2}
                        transition="all 0.2s"
                      >
                        {link.name}
                      </Box>
                    )
                  })}
                  <Divider my={2} />
                  <Button
                    as={RouterLink}
                    to="/contact"
                    bg="accent.500"
                    color="white"
                    _hover={{ bg: 'accent.600' }}
                    w="100%"
                    onClick={onClose}
                    size={{ base: 'sm', sm: 'md' }}
                    py={2}
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
                    size={{ base: 'sm', sm: 'md' }}
                    py={2}
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
