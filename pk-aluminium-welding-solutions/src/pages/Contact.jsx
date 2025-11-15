import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Stack,
  Icon,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    console.log(data)
    alert('Thank you for your inquiry. We will contact you shortly.')
  }

  return (
    <Box as="main" w="100%">
      {/* Hero */}
      <Box bg="brand.800" color="white" py={{ base: 12, md: 16 }}>
        <Container maxW="5xl" px={{ base: 6, md: 8 }}>
          <VStack align="start" spacing={4}>
            <Heading as="h1" size="2xl" color={"white"}>
              Get a Quote for Your Project
            </Heading>
            <Text fontSize="lg" color="gray.100">
              Provide as much detail as possible (measurements, material, finish) for the fastest, most accurate pricing.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Quick Contact Methods */}
      <Box py={{ base: 12, md: 16 }} bg="brand.50">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              {
                icon: FaPhone,
                title: 'Phone',
                detail: '+1 (555) 123-4567',
                time: 'Mon-Fri: 8am-5pm',
              },
              {
                icon: FaEnvelope,
                title: 'Email',
                detail: 'info@pkaluminium.com',
                time: 'We reply within 24 hours',
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Address',
                detail: '123 Industrial Way, City, State',
                time: 'Visit our workshop',
              },
            ].map((method, idx) => (
              <Box key={idx} p={6} bg="white" borderRadius="lg">
                <HStack spacing={4} mb={4}>
                  <Box p={3} bg="accent.500" borderRadius="md" color="white">
                    <Icon as={method.icon} />
                  </Box>
                  <Heading as="h3" size="sm" color="brand.800">
                    {method.title}
                  </Heading>
                </HStack>
                <VStack align="start" spacing={1}>
                  <Text fontWeight="600" color="brand.800">
                    {method.detail}
                  </Text>
                  <Text fontSize="sm" color="brand.500">
                    {method.time}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Form & Info */}
      <Box py={{ base: 16, md: 20 }} bg="white">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={12}>
            {/* Form */}
            <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={6} flex={1} align="stretch">
              <VStack spacing={2} align="start">
                <Heading as="h2" size="lg" color="brand.800">
                  Send us a Message
                </Heading>
                <Text color="brand.600">
                  Fill out the form below and we'll get back to you shortly.
                </Text>
              </VStack>

              <FormControl isRequired>
                <FormLabel color="brand.700" fontWeight="600">
                  Name
                </FormLabel>
                <Input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Your name"
                  borderColor="brand.200"
                  _focus={{ borderColor: 'accent.500' }}
                />
                {errors.name && <Text color="red.500" fontSize="sm">{errors.name.message}</Text>}
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="brand.700" fontWeight="600">
                  Email
                </FormLabel>
                <Input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  placeholder="your@email.com"
                  borderColor="brand.200"
                  _focus={{ borderColor: 'accent.500' }}
                />
                {errors.email && <Text color="red.500" fontSize="sm">{errors.email.message}</Text>}
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="brand.700" fontWeight="600">
                  Phone
                </FormLabel>
                <Input
                  {...register('phone', { required: 'Phone is required' })}
                  placeholder="+1 (555) 123-4567"
                  borderColor="brand.200"
                  _focus={{ borderColor: 'accent.500' }}
                />
                {errors.phone && <Text color="red.500" fontSize="sm">{errors.phone.message}</Text>}
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="brand.700" fontWeight="600">
                  Service Interest
                </FormLabel>
                <Select
                  {...register('service', { required: 'Please select a service' })}
                  borderColor="brand.200"
                  _focus={{ borderColor: 'accent.500' }}
                >
                  <option value="">Select a service...</option>
                  <option value="gates">Gates & Railings</option>
                  <option value="canopies">Canopies & Pergolas</option>
                  <option value="doors">Doors & Frames</option>
                  <option value="custom">Custom Fabrication</option>
                </Select>
                {errors.service && <Text color="red.500" fontSize="sm">{errors.service.message}</Text>}
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="brand.700" fontWeight="600">
                  Message
                </FormLabel>
                <Textarea
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Tell us about your project..."
                  borderColor="brand.200"
                  _focus={{ borderColor: 'accent.500' }}
                  rows={5}
                />
                {errors.message && <Text color="red.500" fontSize="sm">{errors.message.message}</Text>}
              </FormControl>

              <Button
                type="submit"
                bg="brand.800"
                color="white"
                _hover={{ bg: 'brand.700' }}
                size="lg"
                w="100%"
              >
                Send Message
              </Button>
            </VStack>

            {/* Sidebar Info */}
            <VStack spacing={8} flex={1} align="stretch">
              <Box p={8} bg="brand.50" borderRadius="lg">
                <Heading as="h3" size="md" mb={6} color="brand.800">
                  Business Hours
                </Heading>
                <VStack align="start" spacing={3} color="brand.600" fontSize="sm">
                  <HStack justify="space-between" w="100%">
                    <Text>Monday - Friday</Text>
                    <Text fontWeight="600">8:00 AM - 5:00 PM</Text>
                  </HStack>
                  <HStack justify="space-between" w="100%">
                    <Text>Saturday</Text>
                    <Text fontWeight="600">9:00 AM - 2:00 PM</Text>
                  </HStack>
                  <HStack justify="space-between" w="100%">
                    <Text>Sunday</Text>
                    <Text fontWeight="600">Closed</Text>
                  </HStack>
                </VStack>
              </Box>

              <Box p={8} bg="brand.50" borderRadius="lg">
                <Heading as="h3" size="md" mb={6} color="brand.800">
                  Workshop Location
                </Heading>
                <VStack align="start" spacing={3} color="brand.600" fontSize="sm">
                  <Text>123 Industrial Way</Text>
                  <Text>City, State 12345</Text>
                  <Text>Country</Text>
                </VStack>
              </Box>

              <Box p={8} bg="accent.50" borderRadius="lg" borderLeft="4px solid" borderLeftColor="accent.500">
                <Heading as="h3" size="md" mb={3} color="brand.800">
                  Emergency?
                </Heading>
                <Text color="brand.600" fontSize="sm" mb={3}>
                  Call us immediately for urgent requests.
                </Text>
                <Text fontWeight="600" color="accent.600">
                  +1 (555) 123-4567
                </Text>
              </Box>
            </VStack>
          </Stack>
        </Container>
      </Box>

      {/* FAQ */}
      <Box py={{ base: 16, md: 20 }} bg="brand.50">
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <VStack spacing={12} align="stretch">
            <VStack spacing={2} align="start">
              <Heading as="h2" size="lg" color="brand.800">
                Frequently Asked Questions
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {[
                {
                  q: 'How long does a typical project take?',
                  a: 'Project timelines vary based on complexity and scope. Simple projects may take 1-2 weeks, while custom fabrication can take 4-8 weeks. We provide detailed timelines during the consultation.',
                },
                {
                  q: 'Do you offer installation services?',
                  a: 'Yes, professional installation is included with all our projects. Our experienced team ensures proper fitting and finish.',
                },
                {
                  q: 'What materials do you use?',
                  a: 'We work with premium aluminium alloys and high-grade structural steel. Material selection depends on your project requirements and climate conditions.',
                },
                {
                  q: 'How do I get a quote?',
                  a: 'Contact us with details of your project, or fill out the form above. We provide free consultations and detailed quotes within 24 hours.',
                },
              ].map((item, idx) => (
                <Box key={idx} p={6} bg="white" borderRadius="lg">
                  <Heading as="h4" size="sm" mb={3} color="brand.800">
                    {item.q}
                  </Heading>
                  <Text color="brand.600" fontSize="sm" lineHeight="1.8">
                    {item.a}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
