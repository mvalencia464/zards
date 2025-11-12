'use client';

import React, { useState } from 'react';
import { CheckCircle2, BookOpen } from 'lucide-react';

export default function LabZLanding() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      
      {/* Main Container - Two Column Layout */}
      <div className="min-h-screen grid lg:grid-cols-2">
        
        {/* LEFT COLUMN - Opt-in Form */}
        <div className="flex flex-col justify-center px-6 py-12 lg:px-16 lg:py-20 bg-slate-950">
          <div className="max-w-xl mx-auto w-full">
            
            {/* Branding */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold tracking-tighter text-amber-500">LAB Z</h1>
              <p className="text-sm text-slate-400 mt-1">For Technical Leaders</p>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The 5 Biggest Myths of Executive Storytelling
            </h2>

            {/* Story Hook */}
            <div className="space-y-4 text-lg text-slate-300 mb-8 leading-relaxed">
              <p>You walk into the boardroom.</p>
              <p>Your slides are perfect — your data airtight.</p>
              <p>You've even studied storytelling.</p>
              <p className="text-xl font-medium text-white mt-6">
                But five minutes in, you can feel it: <span className="text-red-400">eyes glazing over</span>.
              </p>
              <p className="text-xl font-medium text-white">You're losing them.</p>
              <p className="text-2xl font-bold text-amber-500 mt-8">
                It's not your ideas — it's your story.
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Use this guide to turn your next technical presentation into a <strong className="text-white">TED-worthy story</strong> that inspires action, wins buy-in, and gets remembered.
            </p>

            {/* Opt-in Form */}
            <div className="bg-slate-900 border-2 border-amber-500/30 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Get Instant Access to Free Guide
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 text-lg font-bold rounded-lg transition-all transform hover:scale-[1.02]"
                >
                  GET INSTANT ACCESS
                </button>
              </form>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-slate-500 leading-relaxed">
              When you sign up for this free guide, I'll also send you weekly email updates on executive storytelling, leadership communication, and occasional workshop announcements. I'll always respect your privacy and data.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN - Benefits & About */}
        <div className="flex flex-col justify-center px-6 py-12 lg:px-16 lg:py-20 bg-slate-900 border-l border-slate-800">
          <div className="max-w-xl mx-auto w-full">
            
            {/* What You'll Learn Header */}
            <div className="mb-8">
              <h3 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-6">
                What You'll Learn in This Free Guide:
              </h3>

              {/* Two-column layout: Graphic left, Benefits right */}
              <div className="grid md:grid-cols-[200px_1fr] gap-6 mb-12">
                {/* Featured Image Placeholder - LEFT */}
                <div className="bg-slate-950 rounded-2xl border-2 border-amber-500/20 p-6 text-center flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center mb-3">
                    <BookOpen className="w-16 h-16 text-amber-500" />
                  </div>
                  <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">
                    The 5 Biggest Myths
                  </div>
                  <div className="inline-block px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-full">
                    FREE GUIDE
                  </div>
                </div>

                {/* Benefits List - RIGHT */}
                <div className="space-y-4 flex flex-col justify-center">
                  {[
                    "Discover the #1 mistake technical leaders make when presenting data",
                    "Learn the 5 myths that are killing your executive presence",
                    "Get proven frameworks used by Fortune 500 leaders"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-slate-300 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="border-t border-slate-800 pt-8">
              <h4 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-6">
                About Arthur Zards
              </h4>
              
              {/* Author Image Placeholder */}
              <div className="bg-slate-950 rounded-xl w-32 h-32 mb-6 border border-slate-800 flex items-center justify-center">
                <div className="text-4xl font-bold text-slate-700">AZ</div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                <strong className="text-white">Arthur Zards</strong> is your expert guide. A recognized TEDx speaker and executive storytelling coach, Arthur has trained over 4,000 technical leaders from global companies like AstraZeneca, Evanta, and Gartner C-Level Communities. His viral workshops reached 44 million+ viewers, proving the formula works for executives communicating complex ideas.
              </p>

              {/* Testimonial */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 mb-6">
                <p className="text-slate-300 italic mb-4 leading-relaxed">
                  "His content was fantastic and my team learned lots of new ideas from his session – and that's a team that works with 4,000+ speakers each year!"
                </p>
                <p className="text-sm font-bold text-amber-500">
                  — Simeon Turner, CEO Evanta (a Gartner Company)
                </p>
              </div>

              {/* Social Proof Logos */}
              <div className="flex flex-wrap items-center gap-6 opacity-50">
                <div className="text-xs font-bold tracking-wider text-slate-600">TEDx</div>
                <div className="text-xs font-bold tracking-wider text-slate-600">Gartner</div>
                <div className="text-xs font-bold tracking-wider text-slate-600">Evanta</div>
                <div className="text-xs font-bold tracking-wider text-slate-600">AstraZeneca</div>
              </div>

              {/* Additional Social Proof */}
              <div className="mt-6 text-center">
                <p className="text-sm font-medium text-slate-400">
                  Great presentation, Loved it!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

