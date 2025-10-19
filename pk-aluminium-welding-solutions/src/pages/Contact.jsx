import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  useToast,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
// Assuming COMPANY constants are defined elsewhere
// import { COMPANY, WEB3FORMS } from '../utils/constants' 

// --- Placeholder Constants for demo ---
const COMPANY = {
    location: 'Maitland, Cape Town, Western Cape',
    phone: '021 555 1234',
    phoneRaw: '+27215551234',
    email: 'info@pk-aluminium.co.za',
    whatsappLink: 'https://wa.me/27215551234',
    // Using a generic Google Maps embed URL for Maitland as a placeholder
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13239.389279093788!2d18.49070966977539!3d-33.916773300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b0257e174b5%3A0x6b4507567798c11e!2sMaitland%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1689254400000!5m2!1sen!2sza",
};
const WEB3FORMS = {
    ACCESS_KEY: 'YOUR_ACCESS_KEY_HERE', // Replace with actual key
};
// --- End Placeholder Constants ---


export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
  const toast = useToast()
  const accentColor = useColorModeValue('teal.500', 'teal.300');
  const cardBg = useColorModeValue('white', 'gray.700');
  const mapBorderColor = useColorModeValue('gray.200', 'gray.600');

  const onSubmit = async (formValues) => {
    // Ensuring the message includes the key details for easy viewing in the submission email
    const fullMessage = `
Service Requested: ${formValues.service}
Details: ${formValues.dimensions}
Budget: ${formValues.budget || 'Not specified'}
Address: ${formValues.address || 'Not specified'}
---
Message: ${formValues.message || 'N/A'}
    `;

    const payload = {
      access_key: WEB3FORMS.ACCESS_KEY,
      subject: 'New Quote Request — PK Aluminium Welding Solutions',
      from_name: formValues.name,
      email: formValues.email,
      phone: formValues.phone || '',
      message: fullMessage, // Sending compiled message
      // Include hidden fields for quick data parsing if needed
      'Service Type': formValues.service, 
      'Dimensions/Notes': formValues.dimensions, 
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data && (data.success || res.ok)) {
        toast({ title: 'Quote submitted!', description: 'We will review your request and contact you shortly.', status: 'success', duration: 5000, isClosable: true })
        reset()
      } else {
        // Log error response from API for debugging
        console.error('Web3Forms Error:', data);
        throw new Error(data?.message || 'Submission failed. Please try again or contact us directly.')
      }
    } catch (e) {
      toast({ title: 'Submission error', description: e.message, status: 'error', duration: 5000, isClosable: true })
    }
  }

  return (
    <Container maxW="7xl" py={{ base: 10, md: 20 }}>
      <Heading size="2xl" mb={3}>Get a Quote for Your Project</Heading>
      <Text fontSize="lg" mb={10} color={useColorModeValue('gray.600', 'gray.400')}>
        Provide as much detail as possible (measurements, material, finish) for the fastest, most accurate pricing.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>

        {/* --- LEFT COLUMN: QUOTE FORM (2/3 width on desktop) --- */}
        <Box 
          as="form" 
          onSubmit={handleSubmit(onSubmit)} 
          gridColumn={{ base: 'span 1', md: 'span 2' }}
          bg={cardBg}
          p={6}
          rounded="xl"
          shadow="lg"
        >
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6} mb={6}>
            
            {/* Name & Email */}
            <FormControl isInvalid={errors.name} isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="Your name" {...register('name', { required: 'Name is required' })} />
              <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email} isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="you@example.com" {...register('email', { required: 'Email is required' })} />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>

            {/* Phone & Service */}
            <FormControl isInvalid={errors.phone}>
              <FormLabel>Phone (for quick contact)</FormLabel>
              <Input placeholder="+27 ..." {...register('phone')} />
              <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.service} isRequired>
              <FormLabel>Service Required</FormLabel>
              <Select placeholder="Select service type" {...register('service', { required: 'Service is required' })}>
                <option value="Vehicle Canopy/Rack">Vehicle Canopy/Rack</option>
                <option value="Architectural Balustrade">Architectural Balustrade</option>
                <option value="Gate/Security Barrier">Gate/Security Barrier</option>
                <option value="Custom Furniture/Fixture">Custom Furniture/Fixture</option>
                <option value="Repair/Modification">Repair/Modification</option>
                <option value="Other">Other Custom Fabrication</option>
              </Select>
              <FormErrorMessage>{errors.service && errors.service.message}</FormErrorMessage>
            </FormControl>
            
            {/* Dimensions/Notes */}
            <FormControl isInvalid={errors.dimensions} isRequired gridColumn={{ base: 'span 1', sm: 'span 2' }}>
              <FormLabel>Measurements & Details</FormLabel>
              <Textarea 
                placeholder="Include measurements (LxWxH), material preferences (e.g., 6061), finish (e.g., powder coat, mill finish), and structural notes."
                {...register('dimensions', { required: 'Please provide project details/dimensions' })} 
                minHeight="120px"
              />
              <FormErrorMessage>{errors.dimensions && errors.dimensions.message}</FormErrorMessage>
            </FormControl>
            
            {/* Address & Budget (Optional) */}
            <FormControl>
              <FormLabel>Site Address (optional, for installation)</FormLabel>
              <Input placeholder="Suburb, Cape Town" {...register('address')} />
            </FormControl>
            <FormControl>
              <FormLabel>Target Budget Range (optional)</FormLabel>
              <Input placeholder="e.g., R10,000 – R20,000" {...register('budget')} />
            </FormControl>
            
          </SimpleGrid>
          
          <Button colorScheme="teal" type="submit" isLoading={isSubmitting} size="lg" w="full">
            Send Quote Request
          </Button>

        </Box>

        {/* --- RIGHT COLUMN: MAP & CONTACT INFO (1/3 width on desktop) --- */}
        <Stack spacing={8}>
            
            {/* Contact Details Card */}
            <VStack 
                spacing={4} 
                align="stretch" 
                bg={cardBg} 
                p={6} 
                rounded="xl" 
                shadow="md"
            >
                <Heading size="md" borderBottom="2px solid" borderColor={accentColor} pb={1} mb={2}>
                    Contact Directly
                </Heading>
                
                <HStack>
                    <Icon as={FaPhoneAlt} color={accentColor} w={5} h={5} />
                    <Link href={`tel:${COMPANY.phoneRaw}`} fontWeight="semibold">
                        {COMPANY.phone}
                    </Link>
                </HStack>
                <HStack>
                    <Icon as={FaWhatsapp} color="whatsapp.500" w={5} h={5} />
                    <Link href={COMPANY.whatsappLink} isExternal fontWeight="semibold">
                        WhatsApp Us
                    </Link>
                </HStack>
                <HStack>
                    <Icon as={FaEnvelope} color={accentColor} w={5} h={5} />
                    <Link href={`mailto:${COMPANY.email}`}>
                        {COMPANY.email}
                    </Link>
                </HStack>
                <HStack align="flex-start">
                    <Icon as={FaMapMarkerAlt} color={accentColor} w={5} h={5} mt={1} />
                    <Text>
                        Our Workshop: **Maitland, Cape Town** (Visits by appointment only).
                    </Text>
                </HStack>
            </VStack>

            {/* Google Maps Embed */}
            <Box 
                w="full" 
                h="300px" 
                borderRadius="xl" 
                overflow="hidden"
                shadow="md"
                border="1px solid"
                borderColor={mapBorderColor}
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

        </Stack>
      </SimpleGrid>
      
      {/* --- QUICK FAQs --- */}
      <Box pt={16}>
        <Heading size="lg" mb={5} borderBottom="2px solid" borderColor={mapBorderColor} pb={2}>
            Quote Process FAQs
        </Heading>
        <Accordion allowToggle reduceMotion maxW="5xl">
          <AccordionItem>
            <h2>
              <AccordionButton py={4} _expanded={{ bg: useColorModeValue('gray.50', 'gray.800'), color: accentColor }}>
                <Box as="span" flex='1' textAlign='left' fontWeight="medium">How soon will I receive my quote?</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                Most quotes are issued within **1–2 business days** once we have all the required measurements and project details. Complex custom work may take slightly longer.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton py={4} _expanded={{ bg: useColorModeValue('gray.50', 'gray.800'), color: accentColor }}>
                <Box as="span" flex='1' textAlign='left' fontWeight="medium">Do you visit site before finalising a project?</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                Yes. For all installations (gates, balustrades, canopies) in the Cape Town area, we schedule a **mandatory site visit** to confirm all dimensions and installation specifics before fabrication begins.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton py={4} _expanded={{ bg: useColorModeValue('gray.50', 'gray.800'), color: accentColor }}>
                <Box as="span" flex='1' textAlign='left' fontWeight="medium">What payment terms do you require?</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                A **deposit** (typically 50%) is required to secure materials and allocate production time. The remaining balance is due only upon completion or final on-site installation.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      
    </Container>
  )
}