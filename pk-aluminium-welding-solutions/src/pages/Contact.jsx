import React from 'react'
import {
  Box, Container, Heading, Text, SimpleGrid, Stack, Input, Textarea, Button, FormControl, FormLabel, FormErrorMessage, Select, useToast
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
  const toast = useToast()

  const onSubmit = async (data) => {
    console.log('Quote request:', data)
    toast({
      title: 'Quote request sent.',
      description: 'Thanks! We will contact you shortly. (This demo logs to console.)',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    reset()
  }

  return (
    <Box>
      <Container maxW="4xl" py={16}>
        <Stack spacing={6}>
          <Heading>Get a Quote</Heading>
          <Text>Tell us about your project. We’ll reply with timelines and pricing.</Text>
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
              <FormLabel>Budget (optional)</FormLabel>
              <Input placeholder="e.g., R5,000 – R12,000" {...register('budget')} />
            </FormControl>
          </SimpleGrid>
          <Button colorScheme="teal" onClick={handleSubmit(onSubmit)} isLoading={isSubmitting}>Send Request</Button>
        </Stack>
      </Container>
    </Box>
  )
}
