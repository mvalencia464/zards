# Quick Start Template

Copy-paste these files to start a new project with this design system.

---

## 1. Initialize Project

```bash
npx create-next-app@latest my-project --typescript --tailwind --app
cd my-project
npm install lucide-react framer-motion clsx tailwind-merge
```

---

## 2. package.json Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "next": "^16.0.0",
    "lucide-react": "^0.468.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "framer-motion": "^11.15.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "postcss": "^8",
    "tailwindcss": "^4.0.0"
  }
}
```

---

## 3. tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Slate scale is built-in
        // Amber scale is built-in
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 4. app/layout.tsx

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

---

## 5. app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-geist-sans: 'Geist Sans', system-ui, sans-serif;
  --font-geist-mono: 'Geist Mono', monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-geist-sans);
  background-color: rgb(2 6 23); /* slate-950 */
  color: rgb(226 232 240); /* slate-200 */
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgb(15 23 42); /* slate-900 */
}

::-webkit-scrollbar-thumb {
  background: rgb(51 65 85); /* slate-700 */
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(245 158 11); /* amber-500 */
}
```

---

## 6. app/page.tsx (Starter Template)

```tsx
import Link from "next/link";
import { Zap, ArrowRight, Brain, Users, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
            <Zap className="text-amber-500 w-6 h-6" fill="currentColor" />
            YOUR BRAND
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-slate-300 hover:text-amber-500 transition-colors">Features</a>
            <a href="#pricing" className="text-slate-300 hover:text-amber-500 transition-colors">Pricing</a>
            <a href="#contact" className="text-slate-300 hover:text-amber-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-bold tracking-wider text-xs uppercase mb-8">
            <span className="animate-pulse">●</span> Now Available
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-white">
            Transform Your Business. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Drive Real Results.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop settling for mediocre outcomes. Our proven framework delivers 
            measurable impact in weeks, not months.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
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

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Why Choose Us
          </h2>
          <p className="text-xl text-slate-400 mb-16 text-center max-w-2xl mx-auto">
            Everything you need to succeed, built with precision.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: 'Lightning Fast', 
                desc: 'Deploy in minutes, not days. Get up and running instantly with our streamlined onboarding.' 
              },
              { 
                icon: Brain, 
                title: 'AI-Powered', 
                desc: 'Smart automation that learns from your workflow and adapts to your needs.' 
              },
              { 
                icon: Users, 
                title: 'Team-First', 
                desc: 'Built for collaboration with real-time sync and powerful team management.' 
              }
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

## 7. app/components/Navigation.tsx (Reusable Component)

```tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
            <Zap className="text-amber-500 w-6 h-6" fill="currentColor" />
            YOUR BRAND
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href
                    ? 'text-amber-500 font-bold'
                    : 'text-slate-300 hover:text-amber-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-900 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 transition-colors ${
                  pathname === link.href
                    ? 'text-amber-500 font-bold'
                    : 'text-slate-300 hover:text-amber-500'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
```

---

## 8. Run the Project

```bash
npm run dev
```

Visit http://localhost:3000

---

## Next Steps

1. Replace placeholder content with your actual content
2. Add more pages in `app/[route]/page.tsx`
3. Create reusable components in `app/components/`
4. Customize colors in `tailwind.config.ts` if needed
5. Add your logo and branding
6. Deploy to Vercel with `vercel deploy`

---

**You now have a fully functional Next.js app with the design system! 🚀**

