import React from 'react';
import { Box, Heading, Text, Button, Stack, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { COMPANY } from '../../utils/constants';

export default function Hero() {
  return (
    <Box as="section" position="relative" overflow="hidden">
      <Box
        aria-hidden
        position="absolute"
        inset={0}
        bgImage="url(/hero.webp)" 
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
          {/* Paragraph text with enhanced readability */}
          <Text fontSize={{ base: 'md', md: 'xl' }} color="gray.50"> {/* Changed from whiteAlpha.800 to gray.50 for better contrast */}
            Precision TIG welding. Minimalist design. Coastal‑ready durability. Built in Maitland, installed across Cape Town.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
            {/* CTA Button: Choose a vibrant blue from the image's cool tones */}
            <Button as={RouterLink} to="/contact" size="lg" bgColor="blue.500" _hover={{ bgColor: "blue.600" }} color="white">Get a Quote</Button>
            {/* Outline Button: White outline and text for strong contrast */}
            <Button as={RouterLink} to="/services" size="lg" variant="outline" borderColor="white" color="white" _hover={{ bgColor: "whiteAlpha.200" }}>View Services</Button>
            {/* Ghost Button: White text, which works well against the dark overlay */}
            {/* <Button as="a" href={COMPANY.whatsappLink} size="lg" variant="ghost" color="white" _hover={{ bgColor: "whiteAlpha.200" }} target="_blank" rel="noreferrer">WhatsApp</Button> */}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}