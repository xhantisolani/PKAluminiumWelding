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
    q: 'What is the difference between aluminium and steel for fabrication projects?',
    a: 'Both materials have distinct advantages. <strong>Steel</strong> is stronger and heavier—ideal for high-load structural work, trailers, and applications requiring maximum tensile strength. <strong>Aluminium</strong> is lighter, naturally corrosion-resistant, and superior for coastal environments where rust is a concern. Aluminium is also easier to work with and faster to fabricate. We recommend steel for industrial, heavy-duty applications and aluminium for architectural, coastal, and weight-sensitive projects. For dual-material projects combining both, we can advise on hybrid solutions.',
    category: 'Material Selection',
  },
  {
    q: 'Why is aluminium the preferred choice for coastal installations in the Western Cape?',
    a: 'The Western Cape\'s salty, humid marine environment is harsh on materials. Steel rusts aggressively despite painting. Aluminium, however, develops a naturally protective oxide layer that prevents rust indefinitely—this is <strong>passive corrosion resistance</strong>. When paired with marine-grade alloys (5083, 6063, 7075), anodising, or powder coating, aluminium structures in coastal areas can last 25-40+ years with minimal maintenance. We\'ve installed gates, canopies, and railings in Camps Bay, Clifton, and along the peninsula that have performed flawlessly for decades without degradation.',
    category: 'Material Selection',
  },
  {
    q: 'What quality standards and certifications should I expect from a professional fabricator?',
    a: 'Professional fabricators should meet industry standards including <strong>ISO 9001</strong> (quality management), <strong>SANS 1200</strong> (South African structural welding code), and <strong>ASME</strong> standards for structural integrity. Our team ensures all custom welding meets rigorous standards: X-ray testing of critical welds, certified welders, and compliance with building regulations. We provide <strong>Material Traceability Certificates</strong> proving alloy composition, and design reviews by qualified engineers for architectural work. For any project affecting building safety (staircases, railings), expect structural calculations, drawings stamped by professionals, and site inspections.',
    category: 'Quality & Standards',
  },
  {
    q: 'How do you ensure the structural integrity of custom-welded joints?',
    a: 'Weld quality is fundamental. We use <strong>certified welders</strong> trained in multiple welding techniques (MIG, TIG, GTAW) with ongoing qualification testing. For critical joints, we conduct <strong>non-destructive testing (NDT)</strong>: ultrasonic testing, dye penetrant inspection, and X-ray analysis of sample welds. Every fabrication follows detailed <strong>work instructions and process specifications</strong>—not ad-hoc welding. Visual inspection, dimensional checks, and surface finish standards are completed before delivery. For load-bearing structures, we provide documented weld procedures and test reports. This meticulous approach is why safety-critical items like railings, gates, and structural supports hold up reliably for decades.',
    category: 'Quality & Standards',
  },
  {
    q: 'What finishes offer the best durability in harsh coastal climates?',
    a: 'Three finishes excel in coastal environments: <strong>(1) Anodising</strong>—creates a thick, protective oxide layer; available in natural silver or colours; extremely durable and low-maintenance; ideal for aluminium. <strong>(2) Powder Coating</strong>—applied electrostatically; offers superior UV protection and colour retention; available in thousands of RAL colours; suits both steel and aluminium; requires professional application but lasts 10-15 years. <strong>(3) Hot-Dip Galvanising</strong>—for steel; creates a zinc barrier; excellent corrosion resistance; industrial appearance; ideal for heavy-duty structures. For coastal projects, we recommend <strong>marine-grade powder coating</strong> on aluminium for the best combination of aesthetics, durability, and low maintenance.',
    category: 'Finishes & Protection',
  },
  {
    q: 'What is the typical lead time from design to delivery, and what factors affect it?',
    a: 'Lead times vary by project complexity: <strong>Simple items</strong> (brackets, small repairs): 3–5 working days. <strong>Standard projects</strong> (gates, railings, canopies): 2–4 weeks. <strong>Large architectural installations</strong>: 4–8 weeks. Factors affecting lead time include: design complexity, approval cycles (architects, engineers), material sourcing, fabrication time, quality testing, finishing (anodising, powder coating), and installation logistics. Rush jobs are possible but may incur a 20-30% premium. Weather also impacts powder coating (requires optimal humidity and temperature). We always provide realistic timelines upfront and keep you updated on progress.',
    category: 'Project Timelines',
  },
  {
    q: 'Do you handle the entire project end-to-end, including design and installation?',
    a: 'Yes, we provide <strong>complete project management</strong>. This includes: 1) <strong>Design & Consultation</strong>—we listen to your vision and refine it through sketches and CAD drawings. 2) <strong>Detailed Drawings</strong>—complete shop drawings, 3D mock-ups, and structural calculations (for safety-critical work). 3) <strong>Approval Process</strong>—drawings are reviewed with you and architects/engineers if needed. 4) <strong>Fabrication</strong>—precision manufacturing in our workshop. 5) <strong>Quality Inspection</strong>—testing and final checks before dispatch. 6) <strong>Delivery & Installation</strong>—professional on-site installation, fit-off, and handover. We handle logistics, coordination with site contractors, and ensure the finished product matches specifications exactly. This full-service approach eliminates coordination headaches for you.',
    category: 'Project Management',
  },
  {
    q: 'What should I know about building code compliance for gates, railings, and structural work?',
    a: 'Building code compliance is <strong>non-negotiable</strong> for safety-critical work. Railings must meet <strong>SABS requirements</strong> for minimum height, baluster spacing (max 100mm to prevent head entrapment), and load capacity (typically 1.2 kN per running metre). Gates must have proper hinges rated for weight and smooth operation without safety hazards. Structural work on buildings must follow <strong>National Building Regulations</strong> and local by-laws. For any architectural work, we obtain local authority sign-off through drawings and inspections. We liaise with municipal building inspectors, provide stamped drawings from qualified engineers, and ensure your project passes final certification. This protects your property\'s insurance and resale value.',
    category: 'Compliance & Regulations',
  },
  {
    q: 'Can you repair or reinforce existing welded structures, or must they be replaced?',
    a: 'Many structures can be <strong>repaired and reinforced</strong> without full replacement, saving significant cost. Common repairs include: re-welding cracked joints, reinforcing weak points with additional brackets or gussets, replacing corroded sections, and re-coating surfaces. We assess the damage through visual inspection and testing, then recommend repair vs. replacement. For example, a gate hinge that has failed can be re-welded or upgraded; a rusted section of a canopy can be cut out and new material spliced in. However, if structural integrity is severely compromised or repairs would cost 60%+ of replacement, replacement makes sense. We always provide honest cost-benefit analysis.',
    category: 'Repairs & Maintenance',
  },
  {
    q: 'How should I maintain fabricated aluminium and steel products to maximize lifespan?',
    a: '<strong>Aluminium</strong> requires minimal maintenance: rinse annually with fresh water to remove salt spray, inspect for corrosion, and recoat if anodising is scratched. Powder coating needs occasional washing and touch-ups if damaged. <strong>Steel</strong> requires more attention: inspect regularly for rust spots, clean and touch up paint promptly, and avoid prolonged water pooling. Store covers or shelters extend life. For coastal properties, <strong>annual professional inspection</strong> is recommended to catch issues early. We offer maintenance contracts that include inspections, minor repairs, and recoating. Proper maintenance turns a 20-year lifespan into 30-40+ years.',
    category: 'Maintenance & Longevity',
  },
  {
    q: 'What warranty coverage do you provide, and what does it exclude?',
    a: 'We provide <strong>comprehensive workmanship warranty</strong>: all welding defects and structural failures due to our fabrication are covered for <strong>3 years</strong> from installation. This includes weld cracks, joint failures, and defects in craftsmanship. <strong>Finish warranties</strong> (powder coating, anodising) are typically <strong>5-10 years</strong> against peeling, fading, or coating failure under normal use. <strong>Exclusions</strong>: damage from accidents or misuse, modifications made without our approval, lack of maintenance, exposure to unusual chemical environments, and normal wear. For high-end projects, we offer <strong>extended warranties</strong> (up to 10-15 years) as an add-on. All warranty terms are documented in your contract upfront.',
    category: 'Warranty & Guarantees',
  },
  {
    q: 'Can you work with architects and engineers on my project?',
    a: 'Absolutely—we collaborate seamlessly with design professionals. Our process: 1) Architects/engineers provide design specifications and drawings. 2) We review for fabrication feasibility and cost optimization. 3) We produce detailed <strong>shop drawings</strong> showing all joints, materials, tolerances, and finishes. 4) These are approved by the design team before fabrication begins. 5) We provide <strong>Certificates of Compliance</strong>, weld test reports, and material certificates. 6) We coordinate inspections if required. This professional workflow is standard for commercial, architectural, and structural projects. We\'ve worked successfully with leading architectural firms across the Cape.',
    category: 'Professional Collaboration',
  },
  {
    q: 'What is the difference between mill finish, anodised, and powder-coated aluminium?',
    a: '<strong>Mill Finish</strong>: Raw aluminium straight from supplier—shiny silver, no additional coating. Develops natural patina over time but can oxidize. Best for hidden/structural applications. <strong>Anodised</strong>: Electro-chemically thickened oxide layer; extremely durable; available in natural silver or colours (bronze, black, gold); elegant appearance; ideal for architectural work; lasts 20-30+ years in coastal conditions. <strong>Powder Coat</strong>: Factory-applied paint-like coating in any RAL colour; highest aesthetic control; durability of 10-15 years; requires surface prep and professional application; UV-resistant and colour-stable. For visible coastal work, we recommend <strong>anodised for classic durability</strong> or <strong>powder coat for modern colours</strong>.',
    category: 'Finishes & Protection',
  },
  {
    q: 'How do you handle urgent repairs and emergency welding jobs?',
    a: 'We understand emergencies. Our team offers <strong>24/7 emergency contact</strong> for critical situations—gates that won\'t close, structural failures, machinery breakdowns. For urgent repairs: 1) We respond within 2-4 hours during business hours, 24-hour response for genuine emergencies. 2) We dispatch our fully equipped <strong>mobile welding unit</strong> to your site. 3) Temporary fixes are applied immediately if needed. 4) Permanent solutions are scheduled quickly. 5) We provide emergency invoicing with clear documentation. Rush fees apply (typically 30-50% premium) but we get your project back online fast. Many clients maintain standing emergency agreements with us for peace of mind.',
    category: 'Emergency Services',
  },
  {
    q: 'What equipment and technology do you use for precision fabrication?',
    a: 'Our workshop features: <strong>CNC cutting machines</strong> (plasma and water jet) for precise shapes and minimal waste. <strong>Advanced TIG/MIG welding systems</strong> with inverter technology for consistency across all materials. <strong>Precision bending and rolling equipment</strong> for curves and custom shapes. <strong>Laser measurement and alignment systems</strong> for tolerances ±0.5mm on large structures. <strong>CAD design software</strong> (AutoCAD, Fusion 360) for detailed drawings and 3D visualization before fabrication. <strong>Testing equipment</strong>: ultrasonic thickness gauges, angle grinders for finishing, and surface quality inspection tools. This modern equipment combined with experienced operators means your project is built to exacting standards, not approximated.',
    category: 'Technology & Equipment',
  },
  {
    q: 'How do you approach design optimization to reduce costs without compromising quality?',
    a: 'Cost optimization is part of our service. During the design phase, we analyze: material efficiency (minimizing waste), joint configurations (simplifying complex intersections), weight reduction (switching from steel to aluminium where viable), and finish selection (balancing durability vs. cost). For example, a railing might be designed with fewer complex welds by using standard sections and pre-fabricated components. We present options: "Budget option ($X) with standard finish," "Mid-range ($X+30%) with enhanced durability," and "Premium ($X+60%) with premium aesthetics." You choose the balance that fits your needs and budget. We never compromise safety for cost—only explore smart design alternatives.',
    category: 'Cost & Value',
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
                      dangerouslySetInnerHTML={{ __html: item.a }}
                    />
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
          <Heading size="xl" mb={3} color={"white"}>
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
