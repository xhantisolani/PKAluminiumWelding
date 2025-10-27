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
import Swal from 'sweetalert2'; 
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

// Import the SEO component
import SeoHead from '../components/common/SeoHead' 

// --- Placeholder Constants for demo ---
const COMPANY = {
    location: 'Maitland, Cape Town, Western Cape',
    phone: '021 555 1234',
    phoneRaw: '+27215551234',
    email: 'info@pk-aluminium.co.za',
    whatsappLink: 'https://wa.me/27215551234',
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.1994334795254!2d18.4798245750774!3d-33.923984421918135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5c569519b589%3A0xf5ca173f80b32347!2s4%20Benes%20St%2C%20Maitland%2C%20Cape%20Town%2C%207405!5e1!3m2!1sen!2sza!4v1761575977342!5m2!1sen!2sza",
};
const WEB3FORMS = {
    ACCESS_KEY: 'a1698cc1-5c48-4c17-839f-c238d380b738', 
};


export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
  // --- CHANGE 1: Switched 'teal' to 'blue' for the accent color ---
  const accentColor = useColorModeValue('blue.600', 'blue.300'); 
  const cardBg = useColorModeValue('white', 'gray.700');
  const mapBorderColor = useColorModeValue('gray.200', 'gray.600');

    // --- SEO Metadata for the Contact Page ---
    const seoTitle = "Contact PK Aluminium | Request a Quote in Cape Town (Maitland)";
    const seoDescription = "Get a fast, free quote for custom aluminium welding and fabrication in Cape Town. Contact our Maitland workshop via form, phone, or WhatsApp today.";


  const onSubmit = async (formValues) => {
    // 1. SHOW PROCESSING ALERT
    Swal.fire({
        title: 'Sending Quote Request...',
        text: 'Please wait while we process your submission.',
        icon: 'info',
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    // Compile a detailed message for the submission email
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
      message: fullMessage, 
      'Service Type': formValues.service, 
      'Dimensions/Notes': formValues.dimensions, 
      'Target Budget': formValues.budget || 'N/A',
      'Site Address': formValues.address || 'N/A',
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      })
      
      const data = await res.json()
      
      if (data && (data.success || res.ok)) {
        // 2. UPDATE TO SUCCESS ALERT
        Swal.update({
            icon: 'success',
            title: `Thank You, ${formValues.name}!`,
            html: `
                <p>We've successfully received your quote request for ${formValues.service}.</p>
                <p>A specialist will review the details and get back to you with a preliminary estimate within 60 minutes.</p>
                <br>
                <p>For urgent inquiries, please contact us via WhatsApp.</p>
            `,
            showConfirmButton: true,
            confirmButtonText: 'Got it!',
            allowOutsideClick: true,
        });
        reset() // Clear form fields on success
      } else {
        // 3. UPDATE TO ERROR ALERT
        console.error('Web3Forms Error:', data);
        throw new Error(data?.message || 'Submission failed. Please try again or contact us directly.')
      }
    } catch (e) {
        // 4. HANDLE CATCHED ERROR ALERT
        Swal.update({
            icon: 'error',
            title: 'Submission Error',
            text: e.message || 'An unexpected error occurred. Please try again or call us.',
            showConfirmButton: true,
            confirmButtonText: 'Try Again',
            allowOutsideClick: true,
        });
    }
  }

  return (
    <Container maxW="7xl" py={{ base: 10, md: 20 }}>
        {/* --- SEO IMPLEMENTATION --- */}
        <SeoHead 
            title={seoTitle} 
            description={seoDescription} 
            path="contact" // Sets the canonical URL to /contact
            ogImage="logo.jpg" 
        />
        {/* --- END SEO --- */}
        
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
          
          {/* --- CHANGE 2: Updated Button colorScheme from "teal" to "blue" --- */}
          <Button 
                colorScheme="blue" 
                type="submit" 
                isLoading={isSubmitting} 
                size="lg" 
                w="full"
            >
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
                {/* --- CHANGE 3: Changed border color to the new accentColor (blue) --- */}
                <Heading size="md" borderBottom="2px solid" borderColor={accentColor} pb={1} mb={2}>
                    Contact Directly
                </Heading>
                
                {/* --- CHANGE 4: Changed Icon color to the new accentColor (blue) --- */}
                <HStack>
                    <Icon as={FaPhoneAlt} color={accentColor} w={5} h={5} />
                    <Link href={`tel:${COMPANY.phoneRaw}`} fontWeight="semibold">
                        {COMPANY.phone}
                    </Link>
                </HStack>
                {/* WhatsApp is intentionally kept as its own colorScheme */}
                <HStack>
                    <Icon as={FaWhatsapp} color="whatsapp.500" w={5} h={5} />
                    <Link href={COMPANY.whatsappLink} isExternal fontWeight="semibold">
                        WhatsApp Us
                    </Link>
                </HStack>
                {/* --- CHANGE 5: Changed Icon color to the new accentColor (blue) --- */}
                <HStack>
                    <Icon as={FaEnvelope} color={accentColor} w={5} h={5} />
                    <Link href={`mailto:${COMPANY.email}`}>
                        {COMPANY.email}
                    </Link>
                </HStack>
                {/* --- CHANGE 6: Changed Icon color to the new accentColor (blue) --- */}
                <HStack align="flex-start">
                    <Icon as={FaMapMarkerAlt} color={accentColor} w={5} h={5} mt={1} />
                    <Text>
                        Our Workshop: <strong>Benes Street, Maitland, Cape Town</strong> .
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
              {/* --- CHANGE 7: Updated Accordion highlight color to the new accentColor (blue) --- */}
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
              {/* --- CHANGE 8: Updated Accordion highlight color to the new accentColor (blue) --- */}
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
              {/* --- CHANGE 9: Updated Accordion highlight color to the new accentColor (blue) --- */}
              <AccordionButton py={4} _expanded={{ bg: useColorModeValue('gray.50', 'gray.800'), color: accentColor }}>
                <Box as="span" flex='1' textAlign='left' fontWeight="medium">What payment terms do you require?</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                A <strong>deposit</strong>(typically 50%) is required to secure materials and allocate production time. The remaining balance is due only upon completion or final on-site installation.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      
    </Container>
  )
}