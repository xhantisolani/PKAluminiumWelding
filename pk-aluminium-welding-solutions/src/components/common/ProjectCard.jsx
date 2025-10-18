import React from 'react'
import { Box, Image, Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react'

export default function ProjectCard({ image, title, desc }) {
  return (
    <Box
      rounded="xl"
      overflow="hidden"
      borderWidth="1px"
      bg={useColorModeValue('white', 'gray.800')}
      shadow="sm"
      _hover={{ shadow: 'md' }}
    >
      <Image src={image} alt={title} h="200px" w="100%" objectFit="cover" />
      <Stack p={4} spacing={2}>
        <Heading size="sm">{title}</Heading>
        <Text color={useColorModeValue('gray.600','gray.300')}>{desc}</Text>
      </Stack>
    </Box>
  )
}
