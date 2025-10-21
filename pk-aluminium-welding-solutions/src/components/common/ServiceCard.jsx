import React from 'react'
import { Box, Heading, Text, Stack, Icon, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// FIX: Change motion(Box) to motion.create(Box)
const MotionBox = motion.create(Box) 

export default function ServiceCard({ icon: IconCmp, title, desc, delay = 0 }) {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <MotionBox
      p={6}
      rounded="xl"
      borderWidth="1px"
      bg={useColorModeValue('white', 'gray.800')}
      shadow="md"
      // Framer Motion properties for entry animation
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      transition={{ duration: 0.5, delay: delay }}
      // Framer Motion properties for hover animation
      whileHover={{ shadow: 'lg', scale: 1.03, transition: { duration: 0.2 } }}
    >
      <Stack spacing={3} align="start">
        <Icon as={IconCmp} boxSize={8} color="blue.500" /> {/* Explicitly using blue accent */}
        <Heading size="md" color={useColorModeValue('gray.800', 'white')}>{title}</Heading>
        <Text color={useColorModeValue('gray.600', 'gray.300')}>{desc}</Text>
      </Stack>
    </MotionBox>
  )
}