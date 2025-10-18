import React from 'react'
import { Box, Container, Stack, Text, Link, useColorModeValue, HStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { COMPANY } from '../../utils/constants'

export default function Footer() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} color={useColorModeValue('gray.700','gray.300')} py={10} mt={12}>
      <Container as={Stack} maxW={'7xl'} spacing={6}>
        <Stack spacing={2} textAlign={{ base: 'center', md: 'left' }}>
          <Text fontWeight="bold" fontSize="lg">PK Aluminium Welding Solutions</Text>
          <Text>{COMPANY.location}</Text>
          <HStack spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
            <Link href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</Link>
            <Text>•</Text>
            <Link href={`mailto:${COMPANY.email}`}>{COMPANY.email}</Link>
            <Text>•</Text>
            <Link href={COMPANY.whatsappLink} isExternal>WhatsApp</Link>
          </HStack>
        </Stack>
        <HStack spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
          <Link as={RouterLink} to="/privacy">Privacy</Link>
          <Link as={RouterLink} to="/terms">Terms</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
        <Text fontSize={'sm'} textAlign="center">
          © {new Date().getFullYear()} PK Aluminium Welding Solutions. Built to last. Finished to impress.
        </Text>
      </Container>
    </Box>
  )
}
