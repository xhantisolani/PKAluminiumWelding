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
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

// --- Framer Motion Components ---
const MotionBox = motion.create(Box); 
const MotionHeading = motion.create(Heading); 
const MotionItem = motion.create(AccordionItem);

// Updated FAQ Data with <strong> tags
const faqData = [
  {
    q: 'What is the standard lead time for custom aluminium fabrication projects in Cape Town?',
    a: 'Lead times vary significantly based on project complexity and our current production schedule. For smaller items (e.g., repairs, simple frames), expect <strong>3 to 7 working days</strong>. For large architectural installations like custom gates, balustrades, or canopies, the process typically takes <strong>3 to 6 weeks</strong>. This includes the site visit, detailed CAD/shop drawing approvals, material procurement, fabrication in our Maitland workshop, and final installation scheduling.',
    category: 'Project Logistics',
  },
  {
    q: 'Why do you specialize in TIG welding for aluminium structures?',
    a: 'We primarily use <strong>Tungsten Inert Gas (TIG)</strong> welding because it offers superior control, resulting in the <strong>highest quality, strongest, and most aesthetically pleasing welds</strong>. TIG produces a clean, narrow weld bead with minimal splatter or distortion, which is critical for custom architectural pieces where visual quality is as important as structural integrity. We use MIG welding only for specific structural, non-aesthetic applications where speed is prioritized.',
    category: 'Technical',
  },
  {
    q: 'Is aluminium suitable for the harsh coastal environment of the Western Cape?',
    a: 'Absolutely. Aluminium is inherently <strong>corrosion-resistant</strong> due to the natural oxide layer it forms. Unlike steel, it will not rust. For maximum durability in marine and coastal areas, we specify <strong>marine-grade alloy series (e.g., 5000 or 6000 series)</strong> and apply professional finishes like <strong>anodising or high-grade powder coating</strong>, guaranteeing decades of performance with minimal maintenance.',
    category: 'Technical',
  },
  {
    q: 'What information do I need to provide to get an accurate quote?',
    a: 'To expedite your quote, please provide as much detail as possible: <strong>1) Project type</strong> (e.g., balustrade, gate, canopy). <strong>2) Approximate dimensions or measurements.</strong> <strong>3) Location</strong> for installation. <strong>4) Reference photos or design sketches.</strong> If you have professional drawings (CAD/PDF), please attach them. The more detail you provide, the faster and more precise our initial estimate will be.',
    category: 'Quotes & Pricing',
  },
  {
    q: 'Do you offer on-site aluminium welding, repairs, and installation?',
    a: 'Yes, our service is comprehensive. We conduct <strong>on-site structural welding, repairs, and precision fit-offs</strong> across the Cape Peninsula. Our fully equipped mobile welding unit handles necessary fixes, assembly of large components, and final installation, ensuring the entire structure is completed to specification at your location.',
    category: 'Project Logistics',
  },
  {
    q: 'What specific finishes and materials do you use for your products?',
    a: 'We primarily use <strong>structural aluminium alloys (6061 and 6082)</strong> for strength and workability. Finish options include: <strong>Mill finish</strong> (raw aluminium); <strong>Brushed/Polished</strong>; <strong>Anodising</strong> (for corrosion resistance and colour); and <strong>Powder Coating</strong> in any RAL colour, which provides a durable, weather-resistant, and aesthetically flexible surface.',
    category: 'Technical',
  },
  {
    q: 'Do you provide design and technical drawings for approval?',
    a: 'Yes. For all custom architectural and structural projects, our process includes providing detailed <strong>shop drawings and 3D mock-ups</strong> (if required) for client and architect approval before any material cutting or fabrication begins. This guarantees the final product meets your exact design and regulatory specifications.',
    category: 'Quotes & Pricing',
  },
  {
    q: 'What are your warranty terms on fabricated aluminium products?',
    a: 'We provide a <strong>comprehensive workmanship warranty</strong> covering all welding and structural integrity defects for a specified period (typically 1-3 years). Furthermore, all high-quality powder coating and anodising finishes come with a separate <strong>supplier warranty</strong> against peeling or fading, which we will confirm upfront in your quote.',
    category: 'Quotes & Pricing',
  },
];

// Replaces plain 'aesthetically' with <strong>aesthetically</strong> in the text
const processedFaqData = faqData.map(item => ({
    ...item,
    a: item.a.replace(/aesthetically/g, '<strong>aesthetically</strong>'),
}));


export default function FAQ() {
  useEffect(() => {
    document.title = 'FAQ | PK Aluminium Welding Solutions';
  }, []);

  const accentColor = useColorModeValue('blue.600', 'blue.500');
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Simple animation for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  // Grouping questions by category
  const groupedFAQs = processedFaqData.reduce((acc, faq) => {
    (acc[faq.category] = acc[faq.category] || []).push(faq);
    return acc;
  }, {});

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.800', 'gray.100')}>
      
      {/* 1. HERO SECTION: Image Background & Overlay */}
      <Box
        position="relative"
        bg="gray.900" 
        py={{ base: 20, md: 28 }}
        overflow="hidden"
        minHeight={isMobile ? '250px' : '350px'}
      >
        {/* Background Image */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="full"
          h="full"
          bgImage="url('pk-welding.webp')" // Using the specified image
          bgSize="cover"
          bgPosition="center 60%" 
          opacity={0.3} 
          zIndex={0}
        />
        
        {/* Content (Text & Motion) */}
        <Container maxW="4xl" position="relative" zIndex={1}>
          <MotionBox 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            color="white"
          >
            <Heading size={{ base: '2xl', md: '3xl' }} mb={3} fontWeight="extrabold">
              Questions Answered. Projects Simplified.
            </Heading>
            <Text color="gray.200" fontSize="xl" maxW="lg">
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
              p={6}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="xl"
              shadow="lg"
            >
              <MotionHeading 
                size="xl" 
                mb={6} 
                color={accentColor}
                borderBottom="2px solid"
                borderColor={useColorModeValue('blue.100', 'blue.700')}
                pb={2}
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
                    transition={{ delay: i * 0.05 }}
                    borderTopWidth="1px" 
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    _last={{ borderBottomWidth: '1px' }}
                  >
                    
                    <h2>
                      <AccordionButton py={4} _hover={{ bg: useColorModeValue('blue.50', 'gray.700') }}>
                        <Box as="span" flex="1" textAlign="left" fontWeight="semibold" fontSize="lg">
                          {item.q}
                        </Box>
                        <AccordionIcon color={accentColor} />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={6} color={useColorModeValue('gray.600', 'gray.300')}>
                      {/* Render content with HTML tags using dangerouslySetInnerHTML */}
                      <Text dangerouslySetInnerHTML={{ __html: item.a }} />
                    </AccordionPanel>
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
            transition="all 0.2s"
          >
            Contact a Specialist
          </Button>
        </Container>
      </Box>
    </Box>
  );
}