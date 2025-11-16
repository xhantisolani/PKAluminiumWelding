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
    <Box bg="brand.800" color="white" py={{ base: 12, sm: 16, md: 24, lg: 32 }} w="100%">
      <Container maxW="5xl" px={{ base: 4, sm: 5, md: 8 }}>
        <VStack align="start" spacing={{ base: 5, md: 8 }}>
          {title && (
            <Heading 
              as="h1" 
              size={{ base: 'lg', sm: 'xl', md: '2xl', lg: '3xl' }} 
              lineHeight="1.2" 
              maxW="100%"
              fontWeight="900"
            >
              {title}
            </Heading>
          )}
          {subtitle && (
            <Text 
              fontSize={{ base: 'sm', sm: 'base', md: 'lg' }} 
              color="gray.100" 
              maxW="100%" 
              lineHeight="1.8"
            >
              {subtitle}
            </Text>
          )}
          {showCTA && (
            <VStack 
              spacing={{ base: 2, sm: 3, md: 4 }} 
              pt={{ base: 2, md: 4 }}
              w={{ base: '100%', sm: 'auto' }}
              align={{ base: 'stretch', sm: 'flex-start' }}
            >
              <Button
                as={RouterLink}
                to="/contact"
                bg="accent.500"
                color="white"
                _hover={{ bg: 'accent.600', transform: 'translateY(-2px)' }}
                size={{ base: 'md', md: 'lg' }}
                px={{ base: 6, md: 8 }}
                w={{ base: '100%', sm: 'auto' }}
                fontSize={{ base: 'sm', md: 'base' }}
              >
                Request a Quote
              </Button>
              <Button
                as={RouterLink}
                to="/services"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{ bg: 'whiteAlpha.100', transform: 'translateY(-2px)' }}
                size={{ base: 'md', md: 'lg' }}
                px={{ base: 6, md: 8 }}
                w={{ base: '100%', sm: 'auto' }}
                fontSize={{ base: 'sm', md: 'base' }}
              >
                View Services
              </Button>
            </VStack>
          )}
        </VStack>
      </Container>
    </Box>
  )
}
