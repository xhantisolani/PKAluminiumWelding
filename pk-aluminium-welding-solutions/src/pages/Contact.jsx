import React from 'react'
import {
  Box, Container, Heading, Text, SimpleGrid, Stack, Input, Textarea, Button, FormControl, FormLabel, FormErrorMessage, Select, useToast,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { COMPANY, WEB3FORMS } from '../utils/constants'

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
  const toast = useToast()

  const onSubmit = async (formValues) => {
    const payload = {
      access_key: WEB3FORMS.ACCESS_KEY,
      subject: 'New Quote Request — PK Aluminium Welding Solutions',
      from_name: formValues.name,
      email: formValues.email,
      phone: formValues.phone || '',
      service: formValues.service,
      dimensions: formValues.dimensions,
      budget: formValues.budget || '',
      address: formValues.address || '',
      message: formValues.dimensions,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data && (data.success || res.ok)) {
        toast({ title: 'Quote submitted!', description: 'We will contact you shortly.', status: 'success', duration: 5000, isClosable: true })
        reset()
      } else {
        throw new Error(data?.message || 'Submission failed')
      }
    } catch (e) {
      toast({ title: 'Submission error', description: e.message, status: 'error', duration: 5000, isClosable: true })
    }
  }

  return (
    <Box>
      <Container maxW="4xl" py={16}>
        <Stack spacing={6}>
          <Heading>Get a Quote</Heading>
          <Text>Tell us about your project. We’ll reply with timelines and pricing. You can also call <strong>{COMPANY.phone}</strong> or WhatsApp us.</Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <FormControl isInvalid={errors.name}>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="Your name" {...register('name', { required: 'Name is required' })} />
              <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="you@example.com" {...register('email', { required: 'Email is required' })} />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.phone}>
              <FormLabel>Phone</FormLabel>
              <Input placeholder="+27 ..." {...register('phone')} />
              <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.service}>
              <FormLabel>Service</FormLabel>
              <Select placeholder="Select service" {...register('service', { required: 'Service is required' })}>
                <option>Vehicle Canopy</option>
                <option>Gate / Balustrade</option>
                <option>Furniture Frame</option>
                <option>Repair / Upgrade</option>
                <option>Other</option>
              </Select>
              <FormErrorMessage>{errors.service && errors.service.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.dimensions} gridColumn={{ md: 'span 2' }}>
              <FormLabel>Dimensions / Notes</FormLabel>
              <Textarea placeholder="Add measurements, materials (e.g., 6061 aluminium), finish (powder coat), etc."
                {...register('dimensions', { required: 'Please add details' })} />
              <FormErrorMessage>{errors.dimensions && errors.dimensions.message}</FormErrorMessage>
            </FormControl>
            <FormControl gridColumn={{ md: 'span 2' }}>
              <FormLabel>Address (optional)</FormLabel>
              <Input placeholder="Site address for installation or inspection" {...register('address')} />
            </FormControl>
            <FormControl gridColumn={{ md: 'span 2' }}>
              <FormLabel>Budget (optional)</FormLabel>
              <Input placeholder="e.g., R5,000 – R12,000" {...register('budget')} />
            </FormControl>
          </SimpleGrid>
          <Button colorScheme="teal" onClick={handleSubmit(onSubmit)} isLoading={isSubmitting}>Send Request</Button>

          {/* Quick FAQs to support conversion */}
          <Box pt={6}>
            <Heading size="md" mb={3}>Quick FAQs</Heading>
            <Accordion allowToggle reduceMotion>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'gray.100' }}>
                    <Box as="span" flex='1' textAlign='left'>How soon will I receive my quote?</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>Most quotes are issued within 1–2 business days once we have measurements and photos.</AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'gray.100' }}>
                    <Box as="span" flex='1' textAlign='left'>Do you visit site before finalising?</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>Yes. For installations we schedule a site visit in Cape Town to confirm dimensions and details.</AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'gray.100' }}>
                    <Box as="span" flex='1' textAlign='left'>What payment terms do you require?</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>A deposit secures materials and production time; balance is due on completion or installation.</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
