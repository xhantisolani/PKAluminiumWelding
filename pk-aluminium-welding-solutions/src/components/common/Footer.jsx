import React from 'react'
import { Box, Container, Stack, Text, Link, useColorModeValue, HStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Footer() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} color={useColorModeValue('gray.700','gray.300')} py={8} mt={12}>
      <Container as={Stack} maxW={'7xl'} spacing={6}>
        <Stack direction={{ base: 'column', md: 'row' }} justify={'space-between'} align={'center'}>
          <Text fontWeight="bold">PK Aluminium Welding Solutions</Text>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/privacy">Privacy</Link>
            <Link as={RouterLink} to="/terms">Terms</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
          </HStack>
        </Stack>
        <Text fontSize={'sm'} textAlign="center">
          © {new Date().getFullYear()} PK Aluminium Welding Solutions. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}
