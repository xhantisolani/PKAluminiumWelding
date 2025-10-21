import React, { useEffect } from 'react';
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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

// --- Custom Motion Components (FIXED DEPRECATION) ---
const MotionBox = motion.create(Box); // FIX applied
const MotionHeading = motion.create(Heading); // FIX applied

// --- FAQ Data (Expanded for Depth and SEO) ---
const faqData = [
  {
    q: 'What is the standard lead time for custom aluminium fabrication projects in Cape Town?',
    a: 'Lead times vary significantly based on project complexity and our current production schedule. For smaller items (e.g., repairs, simple frames), expect **3 to 7 working days**. For large architectural installations like custom gates, balustrades, or canopies, the process typically takes **3 to 6 weeks**. This includes the site visit, detailed CAD/shop drawing approvals, material procurement, fabrication in our Maitland workshop, and final installation scheduling.',
    category: 'Project Logistics',
  },
  {
    q: 'Why do you specialize in TIG welding for aluminium structures?',
    a: 'We primarily use **Tungsten Inert Gas (TIG)** welding because it offers superior control, resulting in the **highest quality, strongest, and most aesthetically pleasing welds**. TIG produces a clean, narrow weld bead with minimal splatter or distortion, which is critical for custom architectural pieces where visual quality is as important as structural integrity. We use MIG welding only for specific structural, non-aesthetic applications where speed is prioritized.',
    category: 'Technical',
  },
  {
    q: 'Is aluminium suitable for the harsh coastal environment of the Western Cape?',
    a: 'Absolutely. Aluminium is inherently **corrosion-resistant** due to the natural oxide layer it forms. Unlike steel, it will not rust. For maximum durability in marine and coastal areas, we specify **marine-grade alloy series (e.g., 5000 or 6000 series)** and apply professional finishes like **anodising or high-grade powder coating**, guaranteeing decades of performance with minimal maintenance.',
    category: 'Technical',
  },
  {
    q: 'What information do I need to provide to get an accurate quote?',
    a: 'To expedite your quote, please provide as much detail as possible: **1) Project type** (e.g., balustrade, gate, canopy). **2) Approximate dimensions or measurements.** **3) Location** for installation. **4) Reference photos or design sketches.** If you have professional drawings (CAD/PDF), please attach them. The more detail you provide, the faster and more precise our initial estimate will be.',
    category: 'Quotes & Pricing',
  },
  {
    q: 'Do you offer on-site aluminium welding, repairs, and installation?',
    a: 'Yes, our service is comprehensive. We conduct **on-site structural welding, repairs, and precision fit-offs** across the Cape Peninsula. Our fully equipped mobile welding unit handles necessary fixes, assembly of large components, and final installation, ensuring the entire structure is completed to specification at your location.',
    category: 'Project Logistics',
  },
  {
    q: 'What specific finishes and materials do you use for your products?',
    a: 'We primarily use **structural aluminium alloys (6061 and 6082)** for strength and workability. Finish options include: **Mill finish** (raw aluminium); **Brushed/Polished**; **Anodising** (for corrosion resistance and colour); and **Powder Coating** in any RAL colour, which provides a durable, weather-resistant, and aesthetically flexible surface.',
    category: 'Technical',
  },
  {
    q: 'Do you provide design and technical drawings for approval?',
    a: 'Yes. For all custom architectural and structural projects, our process includes providing detailed **shop drawings and 3D mock-ups** (if required) for client and architect approval before any material cutting or fabrication begins. This guarantees the final product meets your exact design and regulatory specifications.',
    category: 'Quotes & Pricing',
  },
  {
    q: 'What are your warranty terms on fabricated aluminium products?',
    a: 'We provide a **comprehensive workmanship warranty** covering all welding and structural integrity defects for a specified period (typically 1-3 years). Furthermore, all high-quality powder coating and anodising finishes come with a separate **supplier warranty** against peeling or fading, which we will confirm upfront in your quote.',
    category: 'Quotes & Pricing',
  },
];

export default function FAQ() {
  useEffect(() => {
    document.title = 'FAQ | PK Aluminium Welding Solutions';
  }, []);

  const accentColor = useColorModeValue('blue.600', 'blue.500');

  // Simple animation for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Grouping questions by category
  const groupedFAQs = faqData.reduce((acc, faq) => {
    (acc[faq.category] = acc[faq.category] || []).push(faq);
    return acc;
  }, {});

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.800', 'gray.100')}>
      
      {/* 1. HERO SECTION: Clean & Focused */}
      <Box bg="gray.800" py={{ base: 20, md: 28 }} color="white">
        <Container maxW="4xl">
          <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Heading size={{ base: '2xl', md: '3xl' }} mb={3} fontWeight="extrabold">
              Questions Answered. Projects Simplified.
            </Heading>
            <Text color="gray.300" fontSize="xl">
              Find detailed technical and logistical information about our custom aluminium fabrication process.
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* 2. FAQ CONTENT: Grouped Accordion */}
      <Container maxW="4xl" py={{ base: 16, md: 24 }}>
        <VStack spacing={12} align="stretch">
          {Object.entries(groupedFAQs).map(([category, faqs], index) => (
            <MotionBox
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
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
              <Accordion allowMultiple defaultIndex={[0]} reduceMotion>
                {faqs.map((item, i) => (
                  <MotionItem 
                    key={i} 
                    variants={itemVariants}
                    transition={{ delay: i * 0.1 }}
                  >
                    <AccordionItem 
                        borderTopWidth="1px" 
                        borderColor={useColorModeValue('gray.300', 'gray.700')}
                        _last={{ borderBottomWidth: '1px' }}
                    >
                      <h2>
                        <AccordionButton py={4} _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}>
                          <Box as="span" flex="1" textAlign="left" fontWeight="semibold" fontSize="lg">
                            {item.q}
                          </Box>
                          <AccordionIcon color={accentColor} />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={6} color={useColorModeValue('gray.600', 'gray.300')}>
                        {item.a}
                      </AccordionPanel>
                    </AccordionItem>
                  </MotionItem>
                ))}
              </Accordion>
            </MotionBox>
          ))}
        </VStack>
      </Container>
      
      {/* 3. FINAL CTA */}
      <Box bg={accentColor} color="white" py={16} textAlign="center">
        <Container maxW="5xl">
          <Heading size="xl" mb={3}>
            Still Have Questions?
          </Heading>
          <Text fontSize="lg" mb={6} color="blue.100">
            For specific project inquiries or urgent questions, contact our team directly.
          </Text>
          <Button
            as={RouterLink}
            to="/contact"
            size="lg"
            leftIcon={<Icon as={FaPhoneAlt} />}
            bg="white"
            color={accentColor}
            rounded="full"
            px={10}
            _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
          >
            Contact a Specialist
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

// Utility component to apply Framer Motion to AccordionItem (FIX applied)
const MotionItem = motion.create(Box);