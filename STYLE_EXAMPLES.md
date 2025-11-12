# Real Code Examples from This Project

This file contains actual working code snippets extracted from your project that demonstrate the design system in action.

---

## 🎨 COMPLETE PAGE STRUCTURE

```tsx
'use client';

import React, { useState } from 'react';
import { Zap, Brain, Users, ArrowRight } from 'lucide-react';

export default function ExamplePage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Zap className="text-amber-500 w-6 h-6" fill="currentColor" />
            BRAND
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Features</a>
            <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Pricing</a>
            <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-bold tracking-wider text-xs uppercase mb-8">
            <span className="animate-pulse">●</span> Now Available
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-8 text-white">
            Transform Your Business. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Drive Real Results.
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-3xl leading-relaxed">
            Stop settling for mediocre outcomes. Our proven framework delivers 
            measurable impact in weeks, not months.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-slate-800 text-slate-200 font-bold rounded-sm border border-slate-700 hover:border-amber-500/50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Deploy in minutes, not days' },
              { icon: Brain, title: 'AI-Powered', desc: 'Smart automation that learns' },
              { icon: Users, title: 'Team-First', desc: 'Built for collaboration' }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group">
                <feature.icon className="w-12 h-12 text-amber-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Join thousands of teams already seeing results.
          </p>
          <button className="px-10 py-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xl font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
```

---

## 🎯 COMPONENT LIBRARY

### Primary CTA Button
```tsx
<button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20 flex items-center gap-2">
  Call to Action
  <ArrowRight className="w-5 h-5" />
</button>
```

### Secondary Button
```tsx
<button className="px-6 py-3 bg-slate-800 text-slate-200 font-bold rounded-sm border border-slate-700 hover:border-amber-500/50 transition-colors">
  Secondary Action
</button>
```

### Feature Card
```tsx
<div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group relative overflow-hidden">
  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full group-hover:bg-amber-500/10 transition-colors" />
  <Zap className="w-12 h-12 text-amber-500 mb-6" />
  <h3 className="text-2xl font-bold mb-4">Feature Title</h3>
  <p className="text-slate-400 mb-8 leading-relaxed">
    Feature description goes here with plenty of breathing room.
  </p>
  <a href="#" className="text-amber-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
    Learn More <ArrowRight className="w-4 h-4" />
  </a>
</div>
```

### Elevated/Featured Card
```tsx
<div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-8 border-2 border-amber-500/30 hover:border-amber-500 transition-all duration-300 relative transform md:-translate-y-4 shadow-2xl">
  <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
    MOST POPULAR
  </div>
  <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
  <div className="text-5xl font-extrabold text-amber-500 mb-6">$99</div>
  <p className="text-slate-400 mb-8">Everything you need to scale</p>
  <button className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform">
    Get Started
  </button>
</div>
```

### Status Badge
```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-bold tracking-wider text-xs uppercase">
  <span className="animate-pulse">●</span> LIVE NOW
</div>
```

### Urgency Badge
```tsx
<div className="bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
  LIMITED TIME
</div>
```

### Input Field
```tsx
<input 
  type="text"
  placeholder="Enter your email"
  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-sm text-slate-200 placeholder:text-slate-500 focus:border-amber-500 focus:outline-none transition-colors"
/>
```

### Textarea
```tsx
<textarea 
  placeholder="Your message"
  rows={4}
  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-sm text-slate-200 placeholder:text-slate-500 focus:border-amber-500 focus:outline-none transition-colors resize-none"
/>
```

---

## 📐 LAYOUT PATTERNS

### Two-Column Hero
```tsx
<section className="py-24 md:py-32">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Content */}
      <div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-8 text-white">
          Your Headline
        </h1>
        <p className="text-xl text-slate-400 mb-8">Description</p>
        <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20">
          Get Started
        </button>
      </div>
      
      {/* Right: Visual */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
          {/* Image or visual element */}
        </div>
      </div>
    </div>
  </div>
</section>
```

### Comparison Layout (Before/After, Bad/Good)
```tsx
<div className="grid md:grid-cols-2 gap-6 relative">
  {/* VS Badge */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-800 text-slate-200 font-bold rounded-full w-12 h-12 flex items-center justify-center border-4 border-slate-950 hidden md:flex">
    VS
  </div>
  
  {/* Bad Side */}
  <div className="bg-slate-900 rounded-xl p-8 border border-red-500/30">
    <div className="flex items-center gap-2 mb-4 text-red-400">
      <XCircle className="w-5 h-5" />
      <h4 className="font-bold">The Old Way</h4>
    </div>
    <p className="text-slate-400">Slow, manual, error-prone...</p>
  </div>
  
  {/* Good Side */}
  <div className="bg-slate-900 rounded-xl p-8 border border-green-500/30">
    <div className="flex items-center gap-2 mb-4 text-green-400">
      <CheckCircle className="w-5 h-5" />
      <h4 className="font-bold">The New Way</h4>
    </div>
    <p className="text-slate-400">Fast, automated, reliable...</p>
  </div>
</div>
```

### Sidebar Layout
```tsx
<div className="flex h-screen overflow-hidden">
  {/* Sidebar */}
  <aside className="w-64 bg-slate-900 border-r border-slate-800 flex-shrink-0 flex flex-col">
    <div className="h-16 flex items-center px-6 border-b border-slate-800 font-bold">
      <Zap className="w-5 h-5 text-amber-500 mr-2" />
      Dashboard
    </div>
    <nav className="flex-1 p-4">
      {/* Nav items */}
    </nav>
  </aside>
  
  {/* Main Content */}
  <main className="flex-1 overflow-y-auto bg-slate-950">
    <div className="p-8">
      {/* Content */}
    </div>
  </main>
</div>
```

---

## ✨ SPECIAL EFFECTS

### Gradient Text
```tsx
<h1 className="text-5xl font-extrabold">
  Regular Text{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
    Gradient Accent
  </span>
</h1>
```

### Glow Effect
```tsx
<div className="bg-slate-900 rounded-xl p-8 shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/30 transition-shadow">
  Content with amber glow
</div>
```

### Decorative Orb
```tsx
<div className="relative">
  {/* Content */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[100px] -z-10" />
</div>
```

### Backdrop Blur
```tsx
<div className="bg-slate-950/90 backdrop-blur-md">
  Semi-transparent with blur
</div>
```

---

## 🎬 FRAMER MOTION EXAMPLES

### Fade In on Scroll
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  Content fades in when scrolled into view
</motion.div>
```

### Stagger Children
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.1 } }
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## 📱 RESPONSIVE PATTERNS

### Mobile Menu
```tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

<nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div className="font-bold">LOGO</div>
    
    {/* Desktop Nav */}
    <div className="hidden md:flex gap-6">
      <a href="#" className="text-slate-300 hover:text-amber-500">Link</a>
    </div>
    
    {/* Mobile Toggle */}
    <button 
      className="md:hidden"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      <Menu className="w-6 h-6" />
    </button>
  </div>
  
  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="md:hidden border-t border-slate-900 bg-slate-950">
      <a href="#" className="block px-6 py-3 hover:bg-slate-900">Link</a>
    </div>
  )}
</nav>
```

---

**Use these examples as copy-paste starting points for your next project!**

