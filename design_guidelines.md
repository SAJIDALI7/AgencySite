# Agency Website Design Guidelines

## Design Approach

**Reference-Based Approach** - Drawing inspiration from leading agency websites (Awwwards winners, BASIC Agency, Instrument, Fantasy) with focus on portfolio-first presentation and creative visual storytelling.

**Core Principles:**
- Bold, confident visual presence
- Portfolio as the hero (not buried in navigation)
- Instant conversion via WhatsApp integration
- Professional credibility through case study presentation

---

## Typography System

**Font Stack (Google Fonts):**
- **Primary:** Inter (headings, navigation, UI) - Weights: 400, 500, 600, 700
- **Secondary:** Space Grotesk (accent typography, pricing numbers) - Weights: 500, 700

**Hierarchy:**
- Hero Headlines: text-5xl to text-7xl, font-bold, tracking-tight
- Section Headers: text-4xl to text-5xl, font-semibold
- Subheadings: text-xl to text-2xl, font-medium
- Body Text: text-base to text-lg, font-normal, leading-relaxed
- Labels/Metadata: text-sm, font-medium, uppercase tracking-wider

---

## Layout System

**Spacing Primitives:** Use Tailwind units of **4, 8, 12, 16, 20, 24** (e.g., p-4, gap-8, my-12, py-20)

**Container Strategy:**
- Max-width: max-w-7xl for most sections
- Portfolio grid: max-w-screen-2xl for larger showcase
- Text content: max-w-4xl for readability

**Grid System:**
- Portfolio: 2-column on tablet (md:grid-cols-2), 3-column on desktop (lg:grid-cols-3)
- Services: 3-column grid (md:grid-cols-3)
- Pricing: 3-column cards (lg:grid-cols-3)

---

## Page-Specific Layouts

### Home Page
**Structure:**
1. **Hero Section (80vh min-height):**
   - Full-width hero image showing agency's best work in action
   - Centered headline + subheading overlay with blurred background button
   - Primary CTA: "View Our Work" + Secondary: "Message Us on WhatsApp"
   - Image: Dynamic team workspace or stunning portfolio piece

2. **Featured Portfolio Preview:**
   - 2x2 grid of best projects with hover overlays
   - Project title, category tag, brief description
   - "View Full Portfolio" CTA

3. **Services Overview:**
   - 3-column grid with icons (use Heroicons)
   - Service name, 2-sentence description per card

4. **Social Proof:**
   - Client logos marquee or grid
   - Single standout testimonial with client photo

5. **Final CTA:**
   - "Ready to start your project?" heading
   - Dual CTAs: Contact Form + WhatsApp button

### Services Page
- Hero: Medium-height (50vh) with services-related image
- Grid of service cards (3 columns) with detailed descriptions
- Each service includes: Icon, title, bullet points, "Get a Quote" button
- Bottom section: Process timeline (horizontal 4-step visual)

### Portfolio Page (PRIORITY)
**Layout Strategy:**
- NO traditional hero - lead immediately with work
- Masonry/Pinterest-style grid or staggered 2-3 column layout
- Large project cards with:
  - Full-width project image (high quality)
  - Project title, client name, category tags
  - Brief results/impact statement
  - "View Case Study" link
- Filter buttons at top: All / Web Design / Branding / Marketing / etc.
- 6-9 featured projects initially visible
- Lightbox/modal for detailed case study view

### Pricing Page
- Brief hero (40vh) with pricing-related image
- 3-tier pricing cards (side-by-side on desktop)
- Each tier: Name, price, feature list with checkmarks, CTA button
- FAQ accordion section below pricing
- Trust indicators: Money-back guarantee, testimonial snippets

### About Page
- Hero with team photo (full-width, 60vh)
- Mission statement section (centered, max-w-3xl)
- Team grid (2-3 columns):
  - Team member photos (square or circular)
  - Name, role, brief bio
- Agency values/approach section (icon + text cards)
- Timeline/milestones visual

### Contact Page
- Split layout (60/40):
  - Left: Contact form (name, email, message)
  - Right: Contact info + WhatsApp CTA prominence
- Office location if applicable
- Alternative contact methods

---

## Component Library

### Navigation
- Sticky header with logo left, nav links center/right
- Desktop: Horizontal menu with "Message Us" WhatsApp button (distinct styling)
- Mobile: Hamburger menu, WhatsApp button always visible

### WhatsApp Integration
1. **Floating Action Button:**
   - Fixed bottom-right (bottom-8, right-8)
   - Circular button with WhatsApp icon
   - Subtle pulse animation
   - Shadow for depth
   - Visible across ALL pages
   
2. **Inline CTAs:**
   - "Message Us on WhatsApp" buttons in hero, pricing, contact
   - Icon + text combination
   - Opens WhatsApp with pre-filled message

### Portfolio Cards
- Aspect ratio: 4:3 or 16:9
- Hover state: Overlay with gradient, reveals full project details
- Category tags with pill-style badges
- Smooth image zoom on hover (scale-105 transition)

### Service Cards
- Bordered cards with padding (p-8)
- Icon at top (from Heroicons - 64x64px)
- Hover: Subtle lift with shadow increase

### Pricing Cards
- Featured tier: Elevated with border accent
- List styling: Checkmark icons for included features
- Button placement: Bottom of card, full-width

### Footer
- 4-column layout: About snippet, Services links, Quick links, Contact info
- Social media icons
- Newsletter signup (email input + subscribe button)
- Copyright and legal links

---

## Images Strategy

**Required Images:**
1. **Home Hero:** Dynamic agency workspace or portfolio hero shot (1920x1080)
2. **Services Hero:** Team collaboration or strategy session (1920x800)
3. **Portfolio:** 6-9 high-quality project screenshots/mockups
4. **Pricing Hero:** Success/results imagery (1920x600)
5. **About Hero:** Team photo, professional setting (1920x900)
6. **Team Photos:** Individual headshots (400x400)
7. **Client Logos:** For social proof section

All hero images should support text overlays with blurred-background CTAs.

---

## Accessibility & Performance
- Icon library: Heroicons via CDN (single library throughout)
- Semantic HTML: proper heading hierarchy (h1 → h2 → h3)
- Focus states: Visible outlines on all interactive elements
- Alt text: Descriptive for all portfolio and team images
- Responsive images: Use srcset for different viewport sizes