# PK Aluminium - Design System Reference Guide

## 🎨 Color System

### Primary Colors (Brand)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Brand 50 | `#f8fafb` | Very light grey | Background, light sections |
| Brand 100 | `#f0f4f8` | Light grey | Alternative background |
| Brand 200 | `#d9e2ec` | Grey | Borders, dividers |
| Brand 600 | `#2d3e50` | Dark blue | Primary headings, text |
| Brand 700 | `#1a2634` | Darker blue | Backgrounds, sections |

### Accent Colors (CTA, Highlights)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Accent 500 | `#ff8c00` | Burnt Orange | Primary CTA, highlights |
| Accent 600 | `#e67e00` | Dark Orange | CTA hover state |
| Accent 300 | `#ffbd4d` | Light Orange | Secondary highlights |

### Neutral Colors (Text, Backgrounds)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Gray 50 | `#f9fafb` | Off-white | Page backgrounds |
| Gray 100 | `#f3f4f6` | Light grey | Section backgrounds |
| Gray 300 | `#d1d5db` | Grey | Borders |
| Gray 600 | `#4b5563` | Dark grey | Body text |
| Gray 700 | `#374151` | Darker grey | Headings |
| Gray 800 | `#1f2937` | Very dark | Emphasis |
| Gray 900 | `#111827` | Near black | Dark backgrounds |

---

## 📝 Typography Scale

### Headings
```
Heading 4xl: 2.25rem / 36px (Hero titles)
Heading 3xl: 1.875rem / 30px (Section titles)
Heading 2xl: 1.5rem / 24px (Card titles)
Heading xl:  1.25rem / 20px (Subsections)
Heading lg:  1.125rem / 18px (Small headings)
Heading md:  1rem / 16px (Labels)
Heading sm:  0.875rem / 14px (Small labels)
```

### Body Text
```
Text lg: 1.125rem / 18px (Large body, introductions)
Text base: 1rem / 16px (Standard body text)
Text sm: 0.875rem / 14px (Secondary text, labels)
Text xs: 0.75rem / 12px (Smallest text)
```

### Font Family
```
Heading Font: Inter, -apple-system, BlinkMacSystemFont, sans-serif
Body Font: Inter, -apple-system, BlinkMacSystemFont, sans-serif
Font Weight - Regular: 400
Font Weight - Medium: 500
Font Weight - Semibold: 600
Font Weight - Bold: 700
```

---

## 🎯 Component Patterns

### Buttons

**Primary CTA** (Orange)
```jsx
<Button 
  colorScheme="accent"
  bg="accent.500"
  _hover={{ bg: 'accent.600', transform: 'translateY(-2px)' }}
>
  Get a Quote
</Button>
```

**Outline Button** (White on Dark)
```jsx
<Button 
  variant="outline" 
  borderColor="white" 
  color="white" 
  _hover={{ bgColor: "whiteAlpha.200" }}
>
  View Services
</Button>
```

**Link Button** (No background)
```jsx
<Button 
  colorScheme="accent"
  variant="link"
  rightIcon={<FaArrowRight />}
>
  Learn More
</Button>
```

### Card Component
```jsx
<Box 
  p={6} 
  rounded="2xl" 
  bg="white"
  shadow="md"
  borderLeft="4px solid"
  borderColor="accent.500"
  _hover={{ shadow: 'lg', transform: 'translateY(-4px)' }}
  transition="all 0.3s ease"
>
  {/* Content */}
</Box>
```

### Section Heading
```jsx
<Heading 
  size="2xl" 
  mb={3} 
  color="brand.700"
>
  Section Title
</Heading>
<Text 
  color="gray.600" 
  fontSize="lg" 
  mb={12}
>
  Descriptive text
</Text>
```

### Animated Box (On Scroll)
```jsx
<MotionBox
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  {/* Content */}
</MotionBox>
```

---

## 🏗 Layout Patterns

### Section with Container
```jsx
<Box bg="gray.50" py={{ base: 12, md: 16 }}>
  <Container maxW="7xl">
    {/* Content */}
  </Container>
</Box>
```

### 2-Column Layout (Responsive)
```jsx
<SimpleGrid 
  columns={{ base: 1, md: 2 }} 
  spacing={{ base: 10, md: 20 }} 
  alignItems="center"
>
  <Box>{/* Left column */}</Box>
  <Image>{/* Right image */}</Image>
</SimpleGrid>
```

### 3-Column Service Grid
```jsx
<SimpleGrid 
  columns={{ base: 1, md: 3 }} 
  spacing={8}
>
  {items.map((item) => (
    <ServiceCard key={item.id} {...item} />
  ))}
</SimpleGrid>
```

### Hero Section
```jsx
<Box 
  bg="brand.600" 
  py={{ base: 20, md: 32 }} 
  color="white"
  position="relative" 
  overflow="hidden"
>
  <Box aria-hidden inset={0} bgImage="url(/image.webp)" opacity={0.2} />
  <Container maxW="7xl" position="relative" zIndex="2">
    {/* Hero content */}
  </Container>
</Box>
```

---

## 🎬 Animation Patterns

### Entrance Animation
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.6, delay: 0.1 }}
```

### Hover Animation
```jsx
whileHover={{ scale: 1.05, shadow: 'lg' }}
transition={{ duration: 0.2 }}
```

### Staggered List Animation
```jsx
{items.map((item, i) => (
  <MotionBox
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1, duration: 0.5 }}
  >
    {item}
  </MotionBox>
))}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Size | Usage |
|------------|------|-------|
| base | Mobile | Default mobile styling |
| sm | 640px | Tablets, small devices |
| md | 768px | Medium tablets |
| lg | 1024px | Desktops |

### Responsive Props Example
```jsx
<Box
  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
  p={{ base: 4, md: 6, lg: 8 }}
  columns={{ base: 1, md: 2, lg: 3 }}
/>
```

---

## 🎨 Color Usage Guide

### When to Use Each Color

**Brand Colors** (Steel Grey)
- Page backgrounds
- Section backgrounds
- Heading text (dark areas)
- Navigation
- Footers

**Accent Colors** (Burnt Orange)
- Primary CTAs ("Get a Quote")
- Icon highlights
- Active states
- Important highlights
- Borders on cards

**Gray Colors**
- Body text (gray.600 on light, gray.300 on dark)
- Borders (gray.200 on light, gray.700 on dark)
- Secondary text (gray.500)
- Disabled states (gray.400)

**White**
- Card backgrounds
- Text on dark backgrounds
- Highlights

**Dark (Gray.900 or brand.800)**
- Dark section backgrounds
- Footer backgrounds
- Text emphasis

---

## ✅ Design Checklist for New Pages

When creating a new page:

- [ ] Import Chakra components from '@chakra-ui/react'
- [ ] Create MotionBox = motion.create(Box) for animations
- [ ] Use Container maxW="7xl" for content width
- [ ] Apply responsive breakpoints (base, md, lg)
- [ ] Use brand colors for headings/sections
- [ ] Use accent colors for CTAs
- [ ] Add animations on scroll (viewport={{ once: true }})
- [ ] Include hover effects on interactive elements
- [ ] Test on mobile, tablet, desktop
- [ ] Verify color contrast (WCAG AA standard)
- [ ] Add proper spacing (p, m, gap using Chakra scale)
- [ ] Use consistent rounded corners (xl or 2xl)
- [ ] Apply shadows for depth (shadow="md" or "lg")

---

## 🔧 Common Tailoring Tasks

### Change Hero Background Color
```jsx
<Box bg="brand.700" py={32}>  // Change to brand.600, brand.800, etc.
```

### Change CTA Button Color
```jsx
<Button colorScheme="accent" bg="accent.600">  // Change to accent.400, etc.
```

### Adjust Section Padding
```jsx
<Box py={{ base: 12, md: 16 }}>  // Change values: 16, 20, 24
```

### Change Grid Columns
```jsx
<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}>
  // 1 column mobile, 2 tablet, 4 desktop
```

---

## 📊 Design Tokens Summary

| Token | Value | Usage |
|-------|-------|-------|
| Border Radius | `lg` (8px), `xl` (12px), `2xl` (16px) | Rounded corners |
| Shadow | `md`, `lg`, `xl` | Depth/elevation |
| Spacing | 4, 6, 8, 12, 16, 20, 24 | Padding, margins, gaps |
| Font Weight | 400, 500, 600, 700 | Text hierarchy |
| Line Height | 1.5, 1.6, 1.7, 2 | Text readability |
| Transition | `all 0.3s ease` | Smooth animations |

---

**Last Updated**: 2025
**Design System Version**: 1.0
**Status**: Production Ready ✅
