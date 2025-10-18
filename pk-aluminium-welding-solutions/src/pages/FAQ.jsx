import React from 'react'
import { Box, Container, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'

export default function FAQ() {
  return (
    <Box>
      <Container maxW="4xl" py={16}>
        <Heading size="lg" mb={6}>Frequently Asked Questions</Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Do you work on-site?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes. For installations and larger builds we schedule on-site work in the Cape Town area.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  What materials do you use?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We specialize in aluminium for its strength-to-weight ratio and corrosion resistance. Steel options available on request.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  How do I get a quote?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Use the Contact page form. Include measurements, photos, and any sketches to speed things up.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  )
}
