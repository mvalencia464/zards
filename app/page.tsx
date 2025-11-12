'use client';

import React from 'react';
import { Users, Target, CheckCircle2, ArrowRight, Zap, BookOpen, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 text-center text-sm font-bold tracking-wide">
        Now booking Q3 2025 Executive Workshops. Limited slots remaining.
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-bold tracking-wider text-xs uppercase mb-8">
            <span className="animate-pulse">●</span> Executive Workshop
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6 text-white">
            The Swarm Effect®: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Win Buy-In Fast.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Build executive confidence and get everyone aligned in days, not months.
          </p>

          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20">
            Schedule a Discovery Call
          </button>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="py-8 border-y border-slate-900 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-slate-500 mb-6 font-medium">Trusted by leaders at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="text-2xl md:text-3xl font-bold tracking-tighter text-slate-300">ASTRAZENECA</div>
            <div className="text-2xl md:text-3xl font-bold tracking-tighter text-slate-300">RED BULL</div>
            <div className="text-2xl md:text-3xl font-bold tracking-tighter text-slate-300">MICROSOFT</div>
            <div className="text-2xl md:text-3xl font-bold tracking-tighter text-slate-300">NASA</div>
          </div>
        </div>
      </section>

      {/* Impact Metrics - 44M+ Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Stat */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold text-xs uppercase tracking-wider mb-6">
                <TrendingUp className="w-4 h-4" />
                Impact Metrics
              </div>
              <div className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 mb-4">
                44M+
              </div>
              <div className="text-2xl font-bold text-white mb-6">
                Views Generated
              </div>
              <p className="text-lg text-slate-400 leading-relaxed">
                Collective reach achieved by speakers coached using The Swarm Effect® methodology
              </p>
            </div>

            {/* Case Study */}
            <div className="bg-slate-900 rounded-2xl p-8 md:p-10 border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-xs uppercase tracking-widest font-bold text-amber-500">Featured Case Study</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Daryl Davis: The Power of Strategic Narrative
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Coached using The Swarm Effect® principles, Daryl Davis's TEDx talk became one of the <strong className="text-white">top 0.001% of all TEDx talks globally</strong>, generating millions of views and sparking international dialogue on transformational communication.
              </p>
              
              {/* Video Thumbnail Link */}
              <a 
                href="https://www.ted.com/talks/daryl_davis_why_i_as_a_black_man_attend_kkk_rallies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="relative overflow-hidden rounded-lg border border-slate-800 group-hover:border-amber-500/50 transition-all flex-shrink-0 w-32 h-18">
                  <img 
                    src="https://i3.ytimg.com/vi/ORp3q1Oaezw/maxresdefault.jpg"
                    alt="Daryl Davis TEDx Talk"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center gap-2 text-amber-500 font-bold">
                  Watch the Talk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>

          {/* CTA Button #2 */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20">
              Schedule a Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* Build the Buy-In Narrative - Full Width */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Build the Buy-In Narrative Your Organization Needs
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-4">
              Every company talks about innovation and change.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-4">
              Very few get people to believe in it.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Most leaders communicate through information, not narrative. Facts inform. Stories move people. The Swarm Effect® gives executives a practical way to turn complex, technical content into messages that earn trust and spark action.
            </p>
          </div>

          {/* Context - With Image */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-slate-950 rounded-2xl p-8 md:p-10 border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-4">Why it matters now</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Not only has traditional communication shifted, AI is accelerating change across teams, tools, and expectations. None of it works without buy-in.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The Swarm Effect® teaches leaders to craft buy-in narratives that help people understand, care, and commit.
              </p>
            </div>
            
            <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-xl">
              <img 
                src="https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f0003f86941de710770f.png"
                alt="Why it matters now"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How The Swarm Effect Gets Buy-In */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            How The Swarm Effect Gets Buy-In
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - Image as Cover with Overlay */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl min-h-[600px] flex items-end">
              <img 
                src="https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a95141a8abb9ac79f8.webp"
                alt="Arthur Zards speaking at a TedX event"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              <div className="relative z-10 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  The Methodology in Action
                </h3>
                <p className="text-slate-300 leading-relaxed mb-3">
                  Arthur demonstrates the core principles of transformational speaking—moving beyond data delivery to create genuine audience connection and commitment.
                </p>
                <p className="text-slate-200 font-medium mb-4">
                  The same frameworks used in this TEDx talk are now available to executives who need their strategic messages to drive immediate organizational action.
                </p>
                <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-sm text-amber-400 text-xs font-bold uppercase tracking-wider">
                  Live Demonstration
                </div>
              </div>
            </div>

            {/* Right Column - Comparison Table */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 bg-slate-900/50">
                <div className="p-4 flex items-center gap-2">
                  <span className="text-red-500">✕</span> Conventional Corporate
                </div>
                <div className="p-4 flex items-center gap-2 text-amber-500 bg-amber-500/5">
                  <CheckCircle2 className="w-4 h-4" /> Swarm Effect4
                </div>
              </div>
              <div className="divide-y divide-slate-900">
                <ComparisonRow label="Goal" oldWay="Passive Information Transfer" newWay="Actionable Impact & Propagation" />
                <ComparisonRow label="Format" oldWay="Lecture / Slide-Driven" newWay="Conversational / Story-Driven" />
                <ComparisonRow label="Lifespan" oldWay="Dies after applause" newWay="Lives & thrives to transform" />
                <ComparisonRow label="Engagement" oldWay="Passive Absorption" newWay="Audience 'Swarming'" />
              </div>
            </div>
          </div>

          {/* CTA Button #3 */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20">
              Schedule a Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* Lab Z - Comparison Table Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold tracking-wider text-xs uppercase mb-6">
              <BookOpen className="w-4 h-4" />
              LAB Z
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transactional vs. Transformational Speaking
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Key distinctions we'll explore in the workshop
            </p>
          </div>

          {/* STORY Category */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wider">Story</h3>
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 bg-slate-900/50">
                <div className="p-4 flex items-center gap-2">
                  <span className="text-red-500">✕</span> Transactional Speaking
                </div>
                <div className="p-4 flex items-center gap-2 text-amber-500 bg-amber-500/5">
                  <CheckCircle2 className="w-4 h-4" /> Transformational Speaking
                </div>
              </div>
              <div className="divide-y divide-slate-900">
                <ComparisonRow label="" oldWay="Exchange information" newWay="Inspire and Transform" />
                <ComparisonRow label="" oldWay="Data Driven" newWay="Story Driven" />
                <ComparisonRow label="" oldWay="Task Completion / Efficiency" newWay="Transformation / Personal Growth" />
                <ComparisonRow label="" oldWay="Process-Oriented" newWay="Purpose-Driven" />
                <ComparisonRow label="" oldWay="Static, Predictable Energy" newWay="Dynamic, Adaptive Energy" />
                <ComparisonRow label="" oldWay="Logical-Only Approach" newWay="Logic + Emotional Connection" />
                <ComparisonRow label="" oldWay="Tells the Audience a Story" newWay="Guides the Audience to Live the Story" />
              </div>
            </div>
          </div>

          {/* WORDS/AUTHENTICITY Category */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wider">Words/Authenticity</h3>
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 bg-slate-900/50">
                <div className="p-4 flex items-center gap-2">
                  <span className="text-red-500">✕</span> Transactional Speaking
                </div>
                <div className="p-4 flex items-center gap-2 text-amber-500 bg-amber-500/5">
                  <CheckCircle2 className="w-4 h-4" /> Transformational Speaking
                </div>
              </div>
              <div className="divide-y divide-slate-900">
                <ComparisonRow label="" oldWay="Memorize / Script (Recite and Deliver)" newWay="Believe It (Internalize and Embody)" />
                <ComparisonRow label="" oldWay="Solves Tasks" newWay="Inspires Ownership and Action" />
                <ComparisonRow label="" oldWay="Underestimate Audience Capacity (Dumb)" newWay="Respect Audience Intelligence (Smart)" />
                <ComparisonRow label="" oldWay="All About Me (Speaker Centered)" newWay="All About You (Audience Centered)" />
                <ComparisonRow label="" oldWay="Detached - Professional" newWay="Authentic - Relatable" />
              </div>
            </div>
          </div>

          {/* RELATIONSHIP Category */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wider">Relationship</h3>
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 bg-slate-900/50">
                <div className="p-4 flex items-center gap-2">
                  <span className="text-red-500">✕</span> Transactional Speaking
                </div>
                <div className="p-4 flex items-center gap-2 text-amber-500 bg-amber-500/5">
                  <CheckCircle2 className="w-4 h-4" /> Transformational Speaking
                </div>
              </div>
              <div className="divide-y divide-slate-900">
                <ComparisonRow label="" oldWay="Authority Focused" newWay="Connection Focused" />
                <ComparisonRow label="" oldWay="Speaker Owns the Idea" newWay="Audience Feels Ownership of the Idea" />
                <ComparisonRow label="" oldWay="Monologue" newWay="Dialogue or Interaction" />
                <ComparisonRow label="" oldWay="Connection: Detached - Professional" newWay="Connection: Authentic - Relatable" />
              </div>
            </div>
          </div>

          {/* MORE Category */}
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wider">Impact & Outcomes</h3>
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 bg-slate-900/50">
                <div className="p-4 flex items-center gap-2">
                  <span className="text-red-500">✕</span> Transactional Speaking
                </div>
                <div className="p-4 flex items-center gap-2 text-amber-500 bg-amber-500/5">
                  <CheckCircle2 className="w-4 h-4" /> Transformational Speaking
                </div>
              </div>
              <div className="divide-y divide-slate-900">
                <ComparisonRow label="" oldWay="No Lasting Impact" newWay="Lasting Impact – Memorable" />
                <ComparisonRow label="" oldWay="Short-Term Focus" newWay="Long-Term Impact" />
                <ComparisonRow label="" oldWay="Motivate to Buy" newWay="Motivate to Change" />
                <ComparisonRow label="" oldWay="No Action" newWay="Drives Action" />
                <ComparisonRow label="" oldWay="Surface-Level Change" newWay="Deep and Sustainable Change" />
                <ComparisonRow label="" oldWay="No Gift" newWay="A Gift" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with workshop content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* The Outcomes */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-8 h-8 text-amber-500" />
              <h3 className="text-2xl font-bold text-white">The Outcomes</h3>
            </div>
            <h4 className="text-xl font-bold text-white mb-6">You will learn how to:</h4>
            
            <div className="space-y-6">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h5 className="font-bold text-white mb-2">Turn complex updates into messages people remember</h5>
                <p className="text-slate-400">
                  Transform technical information into narratives that stick in your audience's mind long after the presentation ends.
                </p>
              </div>
              
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h5 className="font-bold text-white mb-2">Communicate change in a way that feels human and believable</h5>
                <p className="text-slate-400">
                  Bridge the gap between data-driven insights and human connection to make change initiatives resonate.
                </p>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h5 className="font-bold text-white mb-2">Build trust through clarity, contrast, and authenticity</h5>
                <p className="text-slate-400">
                  Use proven narrative structures to establish credibility and earn stakeholder confidence.
                </p>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h5 className="font-bold text-white mb-2">Guide audiences from data to decision</h5>
                <p className="text-slate-400">
                  Create clear pathways that move people from understanding information to taking action.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button #4 */}
          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20">
              Schedule a Discovery Call
            </button>
          </div>

          {/* The Audience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-amber-500" />
              <h3 className="text-2xl font-bold text-white">The Audience</h3>
            </div>
            <h4 className="text-xl font-bold text-white mb-6">Who it helps</h4>

            <div className="space-y-6">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h5 className="font-bold text-white mb-2">Executives who want communication that creates momentum</h5>
                <p className="text-slate-400">
                  Leaders who need their messages to drive immediate action, not just polite acknowledgment.
                </p>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h5 className="font-bold text-white mb-2">Technical and data leaders who need influence, not more slides</h5>
                <p className="text-slate-400">
                  Engineers and analysts who must translate complex insights into compelling business cases.
                </p>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h5 className="font-bold text-white mb-2">Change makers who must align cross-functional teams</h5>
                <p className="text-slate-400">
                  Innovators who need to build consensus and commitment across diverse stakeholder groups.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-bold tracking-wider text-xs uppercase mb-6">
              <Users className="w-4 h-4" />
              Workshop in Action
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience The Swarm Effect® Workshop
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              See how executives transform their communication through hands-on practice and real-time coaching
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914cc32b4acab3f2457cbf3.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f0003f86941de710770f.png',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a90dfdd201d4aea542.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a90dfdd2fed5aea53e.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a9227ff71bba715258.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a926049e5cf7d5c968.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a926049e6d0ad5c967.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a92f13301024853c22.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a92f13301312853c1c.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a92f13303583853c1e.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a92f13306c3a853c1d.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a92f1330b348853c23.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a93f86946685137776.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a94a60b50608863cf4.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a94a60b5081b863cf8.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a95141a8a53aac79f7.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a95141a8abb9ac79f8.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a95141a8f8a1ac7a02.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a993f9db194e424cdb.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a993f9dbb58f424cdc.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a993f9dbd203424cda.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a9b4acab2deb6b5daf.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a9b4acabaa646b5dae.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a9fb51414f4bb4ce8e.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a9fb514161afb4ce83.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a9fb51417500b4ce81.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a9fb5141bfc4b4ce7f.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a9fb5141caffb4ce80.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a9fb5141d9f6b4ce82.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5a9fb5141ead4b4ce84.webp',
              'https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914f5aa2f133071d5853c54.webp',
            ].map((image, idx) => (
              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all group cursor-pointer">
                <img 
                  src={image}
                  alt={`Workshop moment ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Let's build your buy-in narrative
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Schedule a short conversation to explore how the Swarm Effect® can raise the level of communication across your team.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20 inline-flex items-center gap-2">
            Schedule a 20-Minute Discovery Call
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-600 text-center text-sm border-t border-slate-900">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <Zap className="w-5 h-5" />
          <span className="font-bold tracking-tighter">SWARM EFFECT</span>
        </div>
        <p>© {new Date().getFullYear()} The Swarm Effect®. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* --- HELPER COMPONENTS --- */

function ComparisonRow({ label, oldWay, newWay }: { label: string, oldWay: string, newWay: string }) {
  return (
    <div className="grid grid-cols-2 text-sm">
      <div className="p-6 text-slate-400 flex flex-col">
        <span className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">{label}</span>
        {oldWay}
      </div>
      <div className="p-6 text-white font-medium bg-amber-500/5 flex flex-col">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-500/50 mb-2">{label}</span>
        {newWay}
      </div>
    </div>
  );
}
