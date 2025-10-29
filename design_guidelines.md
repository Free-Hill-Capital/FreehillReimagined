# Freehill Capital Website Design Guidelines

## Design Approach

**Selected Approach:** Design System (Professional Corporate)
**Primary References:** Apple HIG minimalism, Stripe's restraint, combined with modern financial services aesthetics

**Rationale:** Private equity firms require credibility, trust, and professionalism. The design should convey operational excellence and stability while making the video the unmistakable focal point. Clean whitespace and structured layouts will create breathing room around the video.

## Core Design Elements

### A. Typography System

**Primary Typeface:** Inter or IBM Plex Sans (Google Fonts)
- Headings: Font weight 700, tracking tight (-0.02em)
- Body: Font weight 400, line height 1.6
- Subheadings: Font weight 600

**Type Scale:**
- Hero heading: text-5xl md:text-6xl (48-60px)
- Section headings: text-3xl md:text-4xl (30-36px)
- Subheadings: text-xl md:text-2xl (20-24px)
- Body text: text-base md:text-lg (16-18px)
- Small text/captions: text-sm (14px)

**Hierarchy Rules:**
- Maximum 3 type sizes per section
- Consistent weight progression (400 → 600 → 700)
- Generous line-height for readability (1.5-1.7 for body)

### B. Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 24
- Component internal padding: p-4 to p-8
- Section vertical spacing: py-16 md:py-24
- Container horizontal padding: px-6 md:px-8 lg:px-12
- Element gaps: gap-6 to gap-12

**Grid System:**
- Max container width: max-w-7xl (1280px)
- Content sections: max-w-6xl
- Text-heavy content: max-w-4xl
- Centered containers with mx-auto

**Responsive Breakpoints:**
- Mobile: base (< 768px)
- Tablet: md (768px+)
- Desktop: lg (1024px+)
- Wide: xl (1280px+)

### C. Component Library

#### 1. Video Hero Section (Primary Focal Point)
**Structure:**
- Full-width container with centered max-w-6xl inner wrapper
- Video container: aspect ratio 16:9, width 100% within container
- Vertical padding: py-12 md:py-16 above video, py-8 below
- Video should use modern HTML5 player with custom controls
- Floating overlay controls with backdrop-blur-md
- Responsive sizing: maintains aspect ratio across all viewports

**Layout Details:**
- Position video prominently in upper third of viewport
- Generous whitespace above (py-12) and below (py-16)
- Optional tagline/headline above video: text-2xl md:text-3xl, mb-8
- Video takes visual priority over all other elements

#### 2. Company Overview Section
**Structure:**
- Two-column layout on desktop (lg:grid-cols-2), single column mobile
- Left column: "About Free Hill Capital" heading + founding year callout
- Right column: Mission statement and company description
- Section padding: py-16 md:py-24
- Inner container: max-w-6xl
- Column gap: gap-12 md:gap-16

**Content Treatment:**
- Founding year: Large text-4xl display number with subtle treatment
- Body paragraphs: max-w-prose for optimal reading
- Line spacing: space-y-6 between paragraphs

#### 3. Focus Areas/Industries Section
**Structure:**
- Four-column grid on desktop (lg:grid-cols-4), two-column tablet (md:grid-cols-2), single mobile
- Each card: p-6, rounded corners (rounded-lg), subtle border
- Icon or graphic at top of each card
- Industry name as heading (text-xl, font-semibold)
- Brief description (text-base)

**Industries:** Construction, Technology, Healthcare, Professional Services

**Card Spacing:**
- Internal padding: p-8
- Grid gap: gap-6 md:gap-8
- Vertical spacing within card: space-y-4

#### 4. Value Proposition Section
**Structure:**
- Three-column grid (lg:grid-cols-3), single column mobile
- Each value prop: icon/symbol, heading, description
- Centered text alignment
- Section container: max-w-6xl, py-20 md:py-24

**Values to Highlight:**
- Operational Excellence
- Disciplined Growth
- Long-term Value Creation

**Visual Treatment:**
- Large icons (w-12 h-12 md:w-16 h-16)
- Icon container: mb-6
- Heading: text-xl md:text-2xl, font-semibold, mb-4
- Description: text-base, leading-relaxed

#### 5. Navigation Header
**Structure:**
- Fixed or sticky positioning: sticky top-0
- Horizontal flex layout: justify-between items-center
- Height: h-16 md:h-20
- Padding: px-6 md:px-12
- Backdrop blur with subtle border-bottom

**Elements:**
- Logo/Company name: text-xl md:text-2xl, font-bold
- Right-aligned social links: flex gap-6
- Minimal, clean aesthetic

#### 6. Footer
**Structure:**
- Multi-column layout on desktop (lg:grid-cols-4), stacked mobile
- Comprehensive footer with company info, quick links, contact, social
- Background treatment: subtle separation from main content
- Padding: py-12 md:py-16

**Columns:**
- Company info + tagline
- Quick navigation links (if applicable)
- Contact information/CTA
- Social media icons (Facebook, Twitter, Pinterest, Tumblr)

**Footer Details:**
- Social icons: w-6 h-6, displayed as flex gap-4
- Copyright notice: text-sm, centered or left-aligned
- Links: text-base, space-y-2 stacking

## Component Enrichment

### Video Section Enhancements
- Add video title/caption below player (text-lg, text-center, mt-6)
- Include video duration indicator
- Custom play button overlay before playback
- Share functionality icons below video
- Transcript or description toggle (optional expansion)

### Social Proof Elements
- Add client logos section (if available): 6-8 logos in grid, grayscale treatment
- Section heading: "Trusted Partners" or "Portfolio Companies"
- Logo sizing: h-12 md:h-16, consistent spacing

### Call-to-Action Component
- Prominent CTA section before footer
- Centered layout with max-w-4xl
- Heading: text-3xl md:text-4xl
- Subheading: text-xl, mb-8
- Primary button: px-8 py-4, text-lg, rounded-lg
- Secondary contact info or alternative action

## Accessibility & Interaction

- All interactive elements have min-height of 44px touch target
- Video controls keyboard accessible
- Focus states clearly visible with consistent outline treatment
- ARIA labels for icon-only buttons
- Semantic HTML5 structure (header, main, section, footer)
- Alt text for all decorative elements

## Page Structure Flow

1. **Header Navigation** (sticky, minimal)
2. **Video Hero Section** (primary focal point, py-12 md:py-16)
3. **Company Overview** (two-column, py-16 md:py-24)
4. **Focus Areas/Industries** (four-column cards, py-16 md:py-24)
5. **Value Propositions** (three-column, py-20 md:py-24)
6. **Call-to-Action** (centered, py-16 md:py-20)
7. **Footer** (comprehensive, py-12 md:py-16)

## Images

**Hero Section:**
- No hero image - video is the primary visual element
- White background creates clean canvas for video player

**Industry/Focus Areas Cards:**
- Small icons or graphic elements representing each industry
- Placement: Top of each card, centered
- Size: 48x48px to 64x64px
- Style: Line icons or simple geometric representations

**Value Proposition Icons:**
- Abstract geometric shapes or line icons
- Represent: stability, growth, excellence
- Centered above each value prop description

**Optional Client Logos Section:**
- Grayscale treatment of partner/portfolio company logos
- Consistent sizing and spacing in grid layout
- Subtle presentation maintaining professional aesthetic

## Animation Principles

**Minimal, Purposeful Motion:**
- Video player controls: smooth fade in/out on hover
- Section entrance: subtle fade-up on scroll (opacity + transform)
- Button interactions: built-in states only
- Avoid distracting scroll effects or parallax
- Page load: simple fade-in for main content

**Performance Priority:**
- No heavy animations or transitions
- Focus on content clarity and video performance
- Smooth scrolling behavior for anchor links

This design creates a sophisticated, video-first experience that positions Freehill Capital as a modern, professional private equity firm while maintaining clarity and trustworthiness essential to the financial services industry.