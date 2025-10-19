import React from 'react'
import { Box, Heading, Text, Button, Stack, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { COMPANY } from '../../utils/constants'

export default function Hero() {
  return (
    <Box as="section" position="relative" overflow="hidden">
      <Box
        aria-hidden
        position="absolute"
        inset={0}
        bgImage="url(https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1920&auto=format&fit=crop)"
        bgPos="center"
        bgSize="cover"
        transform="scale(1.02)"
        _after={{
          content: '""',
          position: 'absolute',
          inset: 0,
          bgGradient: 'linear(to-b, blackAlpha.700, blackAlpha.500, blackAlpha.700)'
        }}
      />
      <Box position="relative" maxW="7xl" mx="auto" px={4} py={{ base: 16, md: 28 }}>
        <Stack maxW={{ base: '100%', md: '60%' }} spacing={6} color="white">
          <Heading as="h1" size="2xl" lineHeight="1.1">
            Aluminium Welding & Fabrication — Cape Town
          </Heading>
          <Text fontSize={{ base: 'md', md: 'xl' }} color="whiteAlpha.800">
            Precision TIG welding. Minimalist design. Coastal‑ready durability. Built in Maitland, installed across Cape Town.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
            <Button as={RouterLink} to="/contact" size="lg" colorScheme="blue">Get a Quote</Button>
            <Button as={RouterLink} to="/services" size="lg" variant="outline" colorScheme="whiteAlpha">View Services</Button>
            <Button as="a" href={COMPANY.whatsappLink} size="lg" variant="ghost" colorScheme="whiteAlpha" target="_blank" rel="noreferrer">WhatsApp</Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
