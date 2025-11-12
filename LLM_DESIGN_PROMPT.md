# Design System Prompt for LLM

Use this prompt when asking an LLM to create a new project with this design style.

---

## PROMPT TEMPLATE

```
Create a Next.js 16+ website using TypeScript and the App Router with the following design system:

### TECH STACK
- Framework: Next.js 16.0.0 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS 4
- Icons: lucide-react
- Animations: framer-motion
- Utilities: clsx, tailwind-merge
- Fonts: Geist Sans & Geist Mono (or Inter + JetBrains Mono)

### VISUAL STYLE
**Core Philosophy:** Dark, technical, high-contrast design for executive/technical audiences. Militaristic precision with high-energy accents. Direct, urgent, action-oriented messaging.

**Color Palette:**
- Backgrounds: slate-950 (primary), slate-900 (secondary), slate-800 (tertiary)
- Accents: amber-500 (primary), orange-600 (secondary)
- Text: slate-200 (primary), slate-300 (secondary), slate-400 (muted)
- Borders: slate-800 (default), amber-500/50 (hover)
- Gradients: from-amber-500 to-orange-600

**Typography:**
- Headlines: text-5xl md:text-7xl, font-extrabold, tracking-tighter, text-white
- Gradient accents on key phrases: text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600
- Body: text-base md:text-lg, text-slate-300, leading-relaxed
- Monospace for technical elements

### COMPONENT PATTERNS

**Primary Button:**
```tsx
<button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20">
  Call to Action
</button>
```

**Card:**
```tsx
<div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300">
  {/* Content */}
</div>
```

**Hero Section:**
```tsx
<section className="py-24 md:py-32">
  <div className="max-w-7xl mx-auto px-6">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-bold tracking-wider text-xs uppercase mb-8">
      <span className="animate-pulse">●</span> STATUS LABEL
    </div>
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-8 text-white">
      Main Headline <br/>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
        Gradient Accent
      </span>
    </h1>
    <p className="text-xl text-slate-400 mb-12 max-w-3xl">
      Subheadline or description text
    </p>
    <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20">
      Primary CTA
    </button>
  </div>
</section>
```

**Feature Grid:**
```tsx
<div className="grid md:grid-cols-3 gap-8">
  <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all group">
    <IconComponent className="w-12 h-12 text-amber-500 mb-6" />
    <h3 className="text-2xl font-bold mb-4">Feature Title</h3>
    <p className="text-slate-400 leading-relaxed">Description</p>
  </div>
</div>
```

**Navigation:**
```tsx
<nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo and links */}
  </div>
</nav>
```

### LAYOUT STRUCTURE

**Page Wrapper:**
```tsx
<div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
  {/* Content */}
</div>
```

**Section Container:**
```tsx
<section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
    {/* Content */}
  </div>
</section>
```

### ANIMATION PATTERNS

**Hover Effects:**
- Scale: `hover:scale-105 transition-transform`
- Glow: `hover:shadow-lg hover:shadow-amber-500/20 transition-shadow`
- Border: `hover:border-amber-500/50 transition-colors`

**Framer Motion (for scroll animations):**
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

### KEY DESIGN RULES

1. **High Contrast:** Always use dark backgrounds (slate-950/900) with light text (slate-200/300)
2. **Amber Accents:** Use amber-500/orange-600 for ALL interactive elements and CTAs
3. **Sharp Geometry:** Use rounded-sm for buttons, rounded-xl/2xl for cards
4. **Bold Headlines:** Always use font-extrabold and tracking-tighter for headlines
5. **Gradient Text:** Apply gradient to key phrases in headlines for emphasis
6. **Subtle Borders:** Default to slate-800, animate to amber-500/50 on hover
7. **Consistent Spacing:** Use py-16 md:py-24 for sections, gap-8 for grids
8. **Responsive:** Always include md: breakpoints for major layout changes
9. **Selection Color:** Add selection:bg-amber-500/30 to body
10. **Client Components:** Add 'use client' to any component using hooks or event handlers

### PROJECT STRUCTURE

```
app/
├── layout.tsx          # Root layout with fonts and metadata
├── page.tsx            # Homepage
├── components/
│   ├── Navigation.tsx  # Reusable nav component
│   └── ...             # Other shared components
└── [routes]/
    └── page.tsx        # Individual pages
```

### CONTENT ADAPTATION

**For [YOUR INDUSTRY]:**
- Replace technical/executive messaging with [industry-appropriate] tone
- Keep the same visual hierarchy and component patterns
- Adapt icons from lucide-react to match [industry] (e.g., Briefcase, TrendingUp, Shield, etc.)
- Maintain urgency and action-oriented CTAs
- Use industry-specific terminology while keeping direct, no-fluff style

### EXAMPLE ADAPTATION

If creating for a fitness brand:
- Keep: Dark backgrounds, amber accents, bold headlines, gradient text
- Change: "Technical Leaders" → "Athletes", "Engineering" → "Training"
- Icons: Replace Brain/Terminal with Dumbbell/Activity/Heart
- Messaging: Keep urgency ("Transform in 30 days") but adapt to fitness goals

### IMPLEMENTATION CHECKLIST

- [ ] Initialize Next.js with TypeScript and App Router
- [ ] Install dependencies: lucide-react, framer-motion, clsx, tailwind-merge
- [ ] Configure Tailwind with slate and amber colors
- [ ] Set up Geist fonts (or similar technical fonts)
- [ ] Create root layout with metadata and font configuration
- [ ] Add 'use client' to components using hooks
- [ ] Implement responsive breakpoints (md:, lg:)
- [ ] Add hover states to all interactive elements
- [ ] Use max-w-7xl containers for content width
- [ ] Test dark mode appearance (should look great by default)

---

Now create a [DESCRIBE YOUR PROJECT] using this exact design system.
```

---

## QUICK REFERENCE CHEAT SHEET

### Colors
- BG: `bg-slate-950`, `bg-slate-900`, `bg-slate-800`
- Text: `text-slate-200`, `text-slate-300`, `text-slate-400`
- Accent: `text-amber-500`, `bg-amber-500`, `border-amber-500`
- Gradient: `bg-gradient-to-r from-amber-500 to-orange-600`

### Typography
- H1: `text-5xl md:text-7xl font-extrabold tracking-tighter text-white`
- H2: `text-4xl md:text-5xl font-bold tracking-tight text-white`
- Body: `text-base md:text-lg text-slate-300 leading-relaxed`
- Gradient: `text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600`

### Spacing
- Section: `py-16 md:py-24` or `py-24 md:py-32`
- Container: `max-w-7xl mx-auto px-6`
- Grid: `grid md:grid-cols-3 gap-8`

### Components
- Button: `px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20`
- Card: `bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all`
- Badge: `px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-bold text-xs uppercase`

### Effects
- Hover Scale: `hover:scale-105 transition-transform`
- Hover Glow: `hover:shadow-lg hover:shadow-amber-500/20`
- Backdrop: `bg-slate-950/90 backdrop-blur-md`
- Selection: `selection:bg-amber-500/30`

---

## USAGE EXAMPLES

### For a SaaS Product:
"Create a Next.js landing page for a B2B analytics platform using the design system above. Include hero section, feature grid, pricing cards, and testimonials."

### For an E-commerce Site:
"Create a Next.js product showcase page for premium tech gadgets using the design system above. Include product grid, detailed product cards, and checkout CTA."

### For a Portfolio:
"Create a Next.js portfolio site for a senior software engineer using the design system above. Include projects grid, skills section, and contact form."

---

**Pro Tip:** Always mention "using the exact design system from the prompt" to ensure the LLM maintains consistency with these specifications.

