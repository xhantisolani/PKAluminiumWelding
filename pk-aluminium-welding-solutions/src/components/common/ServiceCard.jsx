import React from 'react'
import { Box, Heading, Text, Stack, Icon, useColorModeValue } from '@chakra-ui/react'

export default function ServiceCard({ icon: IconCmp, title, desc }) {
  return (
    <Box
      p={6}
      rounded="xl"
      borderWidth="1px"
      bg={useColorModeValue('white', 'gray.800')}
      shadow="sm"
      _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
      transition="all 0.2s ease"
    >
      <Stack spacing={3} align="start">
        <Icon as={IconCmp} boxSize={8} color="teal.500" />
        <Heading size="md">{title}</Heading>
        <Text color={useColorModeValue('gray.600','gray.300')}>{desc}</Text>
      </Stack>
    </Box>
  )
}
