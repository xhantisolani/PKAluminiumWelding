import React, { useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  useColorModeValue,
  VStack,
  Button,
  Icon,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

const MotionBox = motion.create(Box)
const MotionHeading = motion.create(Heading)

const faqData = [
  {
    q: 'What is the standard lead time for custom aluminium fabrication projects?',
    a: 'Lead times vary based on project complexity and current production schedule. For smaller items: **3–7 working days**. For architectural installations (gates, balustrades, canopies): **3–6 weeks**, including site visit, CAD approvals, fabrication, and installation scheduling.',
    category: 'Project Logistics',
  },
  {
    q: 'Why do you specialize in TIG welding for aluminium structures?',
    a: 'We use **Tungsten Inert Gas (TIG)** welding because it offers superior control, resulting in the **highest quality, strongest, and most aesthetically pleasing welds**. TIG produces a clean, narrow weld bead with minimal splatter or distortion, which is critical for custom architectural pieces where visual quality matches structural integrity.',
    category: 'Technical',
  },
  {
    q: 'Is aluminium suitable for the harsh coastal environment of the Western Cape?',
    a: 'Absolutely. Aluminium is inherently **corrosion-resistant** due to the natural oxide layer it forms. Unlike steel, it will not rust. For maximum durability in marine and coastal areas, we specify **marine-grade alloy series** and apply **anodising or high-grade powder coating**, guaranteeing decades of performance with minimal maintenance.',
    category: 'Technical',
  },
  {
    q: 'What information do I need to provide to get an accurate quote?',
    a: 'Please provide: **1) Project type** (e.g., balustrade, gate, canopy). **2) Approximate dimensions or measurements.** **3) Location** for installation. **4) Reference photos or design sketches.** **5) Preferred finish** (powder coat colour, anodised, etc.). Professional drawings (CAD/PDF) expedite quotes significantly.',
    category: 'Quotes & Pricing',
  },
  {
    q: 'Do you offer on-site aluminium welding, repairs, and installation?',
    a: 'Yes, our service is comprehensive. We conduct **on-site structural welding, repairs, and precision fit-offs** across the Cape Peninsula. Our fully equipped mobile welding unit handles necessary fixes, assembly of large components, and final installation, ensuring the entire structure is completed to specification at your location.',
    category: 'Project Logistics',
  },
  {
    q: 'What specific finishes and materials do you use for your products?',
    a: 'We primarily use **structural aluminium alloys (6061 and 6082)** for strength and workability. Finish options include: **Mill finish** (raw aluminium); **Brushed/Polished**; **Anodising** (for corrosion resistance and colour); and **Powder Coating** in any RAL colour, providing a durable, weather-resistant, and aesthetically flexible surface.',
    category: 'Technical',
  },
  {
    q: 'Do you provide design and technical drawings for approval?',
    a: 'Yes. For all custom architectural and structural projects, our process includes providing detailed **shop drawings and 3D mock-ups** for client and architect approval before any material cutting or fabrication begins. This guarantees the final product meets your exact design and regulatory specifications.',
    category: 'Quotes & Pricing',
  },
  {
    q: 'What are your warranty terms on fabricated aluminium products?',
    a: 'We provide a **comprehensive workmanship warranty** covering all welding and structural integrity defects for a specified period (typically 1–3 years). Furthermore, all high-quality powder coating and anodising finishes come with a separate **supplier warranty** against peeling or fading, which we confirm upfront in your quote.',
    category: 'Quotes & Pricing',
  },
]

export default function FAQ() {
  useEffect(() => {
    document.title = 'FAQ | PK Aluminium Welding Solutions'
  }, [])

  const accentColor = useColorModeValue('accent.500', 'accent.400')
  const sectionBg = useColorModeValue('gray.50', 'gray.900')

  const groupedFAQs = faqData.reduce((acc, faq) => {
    (acc[faq.category] = acc[faq.category] || []).push(faq)
    return acc
  }, {})

  return (
    <Box bg={sectionBg}>
      {/* Hero */}
      <Box bg="brand.600" py={{ base: 20, md: 28 }} color="white">
        <Container maxW="7xl">
          <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Heading size={{ base: '2xl', md: '4xl' }} mb={4} fontWeight="extrabold" color={"white"}>
              Questions Answered. Projects Simplified.
            </Heading>
            <Text fontSize="xl" color="blue.50">
              Find detailed technical and logistical information about our custom aluminium fabrication process.
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* FAQ Content */}
      <Container maxW="4xl" py={{ base: 16, md: 24 }}>
        <VStack spacing={12} align="stretch">
          {Object.entries(groupedFAQs).map(([category, faqs], index) => (
            <MotionBox
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <MotionHeading 
                size="xl" 
                mb={6} 
                color={accentColor}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {category}
              </MotionHeading>

              <Accordion allowMultiple defaultIndex={[0]}>
                {faqs.map((item, i) => (
                  <AccordionItem 
                    key={i}
                    borderTopWidth="1px"
                    borderColor={useColorModeValue('gray.300', 'gray.700')}
                    _last={{ borderBottomWidth: '1px' }}
                  >
                    <h2>
                      <AccordionButton 
                        py={4} 
                        px={4}
                        _hover={{ bg: useColorModeValue('gray.100', 'gray.800') }}
                        rounded="md"
                      >
                        <Box as="span" flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                          {item.q}
                        </Box>
                        <AccordionIcon color={accentColor} />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel 
                      pb={6} 
                      px={4}
                      color={useColorModeValue('gray.700', 'gray.300')}
                      fontSize="md"
                      lineHeight="relaxed"
                    >
                      {item.a}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </MotionBox>
          ))}
        </VStack>
      </Container>

      {/* CTA */}
      <Box bg={accentColor} color="white" py={{ base: 16, md: 20 }} textAlign="center">
        <Container maxW="5xl">
          <Heading size="xl" mb={3}>
            Still Have Questions?
          </Heading>
          <Text fontSize="lg" mb={8} color="whiteAlpha.900">
            For specific project inquiries or urgent questions, contact our team directly.
          </Text>
          <Button
            as={RouterLink}
            to="/contact"
            size="lg"
            leftIcon={<Icon as={FaPhoneAlt} />}
            bg="white"
            color={accentColor}
            rounded="lg"
            px={10}
            _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
          >
            Contact a Specialist
          </Button>
        </Container>
      </Box>
    </Box>
  )
}
