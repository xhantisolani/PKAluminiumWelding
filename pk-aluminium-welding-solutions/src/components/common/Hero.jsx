import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Stack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Hero({ title, subtitle, showCTA = true }) {
  return (
    <Box bg="brand.800" color="white" py={{ base: 16, md: 24 }} w="100%">
      <Container maxW="5xl" px={{ base: 6, md: 8 }}>
        <VStack align="start" spacing={8}>
          {title && (
            <Heading as="h1" size="2xl" lineHeight="1.4" maxW="2xl">
              {title}
            </Heading>
          )}
          {subtitle && (
            <Text fontSize="lg" color="gray.100" maxW="2xl" lineHeight="1.8">
              {subtitle}
            </Text>
          )}
          {showCTA && (
            <HStack spacing={4} pt={4}>
              <Button
                as={RouterLink}
                to="/contact"
                bg="accent.500"
                color="white"
                _hover={{ bg: 'accent.600' }}
                size="lg"
                px={8}
              >
                Request a Quote
              </Button>
              <Button
                as={RouterLink}
                to="/services"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{ bg: 'whiteAlpha.100' }}
                size="lg"
                px={8}
              >
                View Services
              </Button>
            </HStack>
          )}
        </VStack>
      </Container>
    </Box>
  )
}
