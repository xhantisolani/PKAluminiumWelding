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
  useColorModeValue,
  Link,
  Spinner,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

// Company Data
const COMPANY = {
  location: '4 Benes Street, Maitland, Cape Town, Western Cape',
  phone: '+27 68 592 7370',
  phoneRaw: '+27685927370',
  email: 'info@pkaluminiumweldingsolutions.co.za',
  whatsappLink: 'https://wa.me/27685927370',
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.1994334795254!2d18.4798245750774!3d-33.923984421918135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5c569519b589%3A0xf5ca173f80b32347!2s4%20Benes%20St%2C%20Maitland%2C%20Cape%20Town%2C%207405!5e1!3m2!1sen!2sza!4v1761575977342!5m2!1sen!2sza",
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const mapBorderColor = useColorModeValue('gray.200', 'gray.600')
  const accentColor = 'accent.500'

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      
      // Add form fields
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone', data.phone)
      formData.append('service', data.service)
      formData.append('message', data.message)
      
      // Web3Form access key - Replace with your actual key
      formData.append('access_key', import.meta.env.VITE_WEB3FORM_KEY || 'YOUR_WEB3FORM_ACCESS_KEY')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: 'Success!',
          description: 'Thank you for your inquiry. We will contact you shortly.',
          status: 'success',
          duration: 5,
          isClosable: true,
          position: 'top-right',
        })
        reset()
      } else {
        toast({
          title: 'Error',
          description: result.message || 'Failed to submit form. Please try again.',
          status: 'error',
          duration: 5,
          isClosable: true,
          position: 'top-right',
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: 'Error',
        description: 'An error occurred while submitting the form. Please try again.',
        status: 'error',
        duration: 5,
        isClosable: true,
        position: 'top-right',
      })
    } finally {
      setIsSubmitting(false)
    }
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
                detail: '+27 68 592 7370',
                time: 'Mon-Fri: 8am-5pm',
              },
              {
                icon: FaEnvelope,
                title: 'Email',
                detail: 'info@pkaluminiumweldingsolutions.co.za',
                time: 'We reply within 24 hours',
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Address',
                detail: '4 Benes Street, Maitland, Cape Town, Western Cape, 7405, South Africa',
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
          <Stack direction={{ base: 'column', lg: 'row' }} spacing={12}>
            {/* Left Column: Form + Contact Directly */}
            <VStack spacing={8} flex={1} align="stretch">
              {/* Form */}
              <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={6} align="stretch">
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
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address'
                      }
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
                    {...register('phone', {
                      required: 'Phone is required',
                      pattern: {
                        value: /^(\+27|0)[6-8]\d{8}$/,
                        message: 'Please enter vsalid phone number'
                      }
                    })}
                    placeholder="+27 68 592 7370"
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
                  _hover={{ bg: 'brand.700', transform: 'translateY(-2px)' }}
                  _active={{ transform: 'translateY(0)' }}
                  size="lg"
                  w="100%"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  isDisabled={isSubmitting}
                  onClick={handleSubmit(onSubmit)}
                  transition="all 0.2s"
                  boxShadow={isSubmitting ? '0 0 0 3px rgba(0, 0, 0, 0.1)' : 'md'}
                >
                  {!isSubmitting && 'Send'}
                </Button>
              </VStack>

              {/* Contact Directly Card */}
              <Box p={8} bg="accent.50" borderRadius="lg" borderLeft="4px solid" borderLeftColor={accentColor}>
                <Heading size="md" borderBottom="2px solid" borderColor={accentColor} pb={1} mb={2}>
                  Contact Directly
                </Heading>
                
                <HStack mb={4}>
                  <Icon as={FaPhoneAlt} color={accentColor} w={5} h={5} />
                  <Link href={`tel:${COMPANY.phoneRaw}`} fontWeight="semibold">
                    {COMPANY.phone}
                  </Link>
                </HStack>

                <HStack mb={4}>
                  <Icon as={FaWhatsapp} color="whatsapp.500" w={5} h={5} />
                  <Link href={COMPANY.whatsappLink} isExternal fontWeight="semibold">
                    WhatsApp Us
                  </Link>
                </HStack>

                <HStack mb={4}>
                  <Icon as={FaEnvelope} color={accentColor} w={5} h={5} />
                  <Link href={`mailto:${COMPANY.email}`}>
                    {COMPANY.email}
                  </Link>
                </HStack>

                <HStack align="flex-start">
                  <Icon as={FaMapMarkerAlt} color={accentColor} w={5} h={5} mt={1} />
                  <Text>
                    Our Workshop: <strong>4 Benes Street, Maitland, Cape Town</strong>
                  </Text>
                </HStack>
              </Box>
            </VStack>

            {/* Right Column: Business Hours + Map + Emergency */}
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
                <VStack align="stretch" spacing={4}>
                  <VStack align="start" spacing={3} color="brand.600" fontSize="sm">
                    <Text>4 Benes Street, Maitland</Text>
                    <Text>Cape Town, Western Cape, 7405</Text>
                    <Text>South Africa</Text>
                  </VStack>
                  
                  {/* Google Maps Embed */}
                  <Box 
                    w="full" 
                    h="300px" 
                    borderRadius="lg" 
                    overflow="hidden"
                    shadow="md"
                    border="1px solid"
                    borderColor={mapBorderColor}
                    mt={4}
                  >
                    <iframe
                      src={COMPANY.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="PK Aluminium Workshop Location"
                    ></iframe>
                  </Box>
                </VStack>
              </Box>

              {/* Emergency Card */}
              <Box p={8} bg="accent.50" borderRadius="lg" borderLeft="4px solid" borderLeftColor="accent.500">
                <Heading as="h3" size="md" mb={3} color="brand.800">
                  Emergency?
                </Heading>
                <Text color="brand.600" fontSize="sm" mb={3}>
                  Call us immediately for urgent requests.
                </Text>
                 <Link href={`tel:${COMPANY.phoneRaw}`} fontWeight="semibold">
                        {COMPANY.phone}
                 </Link>
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
