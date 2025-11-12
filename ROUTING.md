# The Swarm Effect - Multi-Page Site Structure

This Next.js application showcases different perspectives of "The Swarm Effect" narrative engineering framework across multiple pages.

## 🗺️ Site Map

### Homepage
- **URL**: `/`
- **File**: `app/page.tsx`
- **Description**: Landing page with navigation to all sections

### Page Routes

| Route | URL | Source File | Description |
|-------|-----|-------------|-------------|
| **Speaker** | `/speaker` | `app/speaker/page.tsx` | Alex Vance TEDx Speaker landing page with services, testimonials, and booking |
| **Landing** | `/landing` | `app/landing/page.tsx` | Main "Swarm Effect" landing page - focused on getting swarmed vs applause |
| **Experience** | `/experience` | `app/experience/page.tsx` | Interactive scroll-based landing with animated mechanism visualizer |
| **Program** | `/program` | `app/program/page.tsx` | In-depth program details about The Swarm Effect4 Protocol |
| **Design** | `/design` | `app/design/page.tsx` | Complete design system with tokens, components, and patterns |
| **Toolkit** | `/toolkit` | `app/toolkit/page.tsx` | SwarmOS dashboard with AI tools, visual assets, and action triggers |
| **Mechanics** | `/mechanics` | `app/mechanics/page.tsx` | Action mechanics - the precise engineering of audience movement |

## 🎨 Design System

All pages follow a consistent dark theme with:
- **Primary Color**: Amber (#f59e0b)
- **Background**: Slate-950 (#020617)
- **Typography**: Geist Sans & Geist Mono
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the homepage with navigation to all pages.

## 📦 Dependencies

- **Next.js 16.0.0** - React framework with App Router
- **React 19.2.0** - UI library
- **Tailwind CSS 4** - Utility-first CSS
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **clsx & tailwind-merge** - Utility for conditional classes

## 🏗️ Project Structure

```
app/
├── page.tsx                 # Homepage with navigation
├── layout.tsx              # Root layout
├── globals.css             # Global styles
├── speaker/
│   └── page.tsx           # Speaker landing page
├── landing/
│   └── page.tsx           # Main landing page
├── experience/
│   └── page.tsx           # Animated experience
├── program/
│   └── page.tsx           # Program details
├── design/
│   └── page.tsx           # Design system
├── toolkit/
│   └── page.tsx           # Resources & tools
└── mechanics/
    └── page.tsx           # Action mechanics
```

## 🎯 Key Features by Page

### Speaker (`/speaker`)
- Professional speaker bio
- TEDx talk showcase
- Service tiers (Keynote, Workshop, Coaching)
- Testimonials
- Contact form

### Landing (`/landing`)
- "Polite Failure" problem statement
- Engineered Narrative Architecture
- Social proof & metrics
- Service offerings
- FAQ section

### Experience (`/experience`)
- Scroll-triggered animations
- 3-Phase Neuro-Linguistic Repatterning System
- Interactive mechanism visualizer
- Qualification quiz modal

### Program (`/program`)
- Crisis of executive communication
- Idea to Actualization Model
- Core strategies breakdown
- Stoic philosophy integration
- Validation metrics

### Design (`/design`)
- Color architecture
- Typography protocol
- Component library
- Narrative patterns
- Voice & tone guidelines

### Toolkit (`/toolkit`)
- Core operating principles
- AI narrative validator tool
- Cognitive visual assets
- Kinetic action triggers

### Mechanics (`/mechanics`)
- Kinetic gap explanation
- Side-by-side comparisons
- Opening, data, and closing protocols
- Micro-commitment principle

## 🔧 Customization

Each page is self-contained and can be customized independently. The design system (`/design`) provides guidelines for maintaining consistency across all pages.

## 📝 Notes

- All pages use the same global layout defined in `app/layout.tsx`
- The design follows the "Swarm Effect" aesthetic with dark backgrounds and amber accents
- Interactive elements use Framer Motion for smooth animations
- All pages are fully responsive and mobile-friendly

