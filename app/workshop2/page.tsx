'use client';

import React from 'react';
import { Calendar, Users, Target, CheckCircle2, ArrowRight, Zap, BookOpen } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function Workshop2Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      <Navigation />

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
              Designing Strategic Narratives for Buy-In
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Where strategy meets story
          </p>

          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20">
            Schedule a Discovery Call
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* Build the Buy-In Narrative */}
          <div>
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

          {/* The Context */}
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-amber-500" />
              <h3 className="text-2xl font-bold text-white">The Context</h3>
            </div>
            <h4 className="text-xl font-bold text-amber-500 mb-4">Why it matters now</h4>
            <p className="text-slate-300 leading-relaxed mb-4">
              Not only has traditional communication shifted, AI is accelerating change across teams, tools, and expectations. None of it works without buy-in.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The Swarm Effect® teaches leaders to craft buy-in narratives that help people understand, care, and commit.
            </p>
            <div className="mt-6 inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-sm text-amber-500 font-bold text-sm">
              Accelerating Change
            </div>
          </div>

        </div>
      </section>

      {/* Conventional Corporate vs Swarm Effect Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
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
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-amber-500">
                    <th className="text-left p-4 text-red-400 font-bold uppercase text-sm tracking-wider w-1/2">Transactional Speaking</th>
                    <th className="text-left p-4 text-amber-500 font-bold uppercase text-sm tracking-wider w-1/2">Transformational Speaking</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Exchange information</td>
                    <td className="p-4 text-slate-300">Inspire and Transform</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Data Driven</td>
                    <td className="p-4 text-slate-300">Story Driven</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Task Completion / Efficiency</td>
                    <td className="p-4 text-slate-300">Transformation / Personal Growth</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Process-Oriented</td>
                    <td className="p-4 text-slate-300">Purpose-Driven</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Static, Predictable Energy</td>
                    <td className="p-4 text-slate-300">Dynamic, Adaptive Energy</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Logical-Only Approach</td>
                    <td className="p-4 text-slate-300">Logic + Emotional Connection</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Tells the Audience a Story</td>
                    <td className="p-4 text-slate-300">Guides the Audience to Live the Story</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* WORDS/AUTHENTICITY Category */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wider">Words/Authenticity</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-amber-500">
                    <th className="text-left p-4 text-red-400 font-bold uppercase text-sm tracking-wider w-1/2">Transactional Speaking</th>
                    <th className="text-left p-4 text-amber-500 font-bold uppercase text-sm tracking-wider w-1/2">Transformational Speaking</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Memorize / Script (Recite and Deliver)</td>
                    <td className="p-4 text-slate-300">Believe It (Internalize and Embody)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Solves Tasks</td>
                    <td className="p-4 text-slate-300">Inspires Ownership and Action</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Underestimate Audience Capacity (Dumb)</td>
                    <td className="p-4 text-slate-300">Respect Audience Intelligence (Smart)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">All About Me (Speaker Centered)</td>
                    <td className="p-4 text-slate-300">All About You (Audience Centered)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Detached - Professional</td>
                    <td className="p-4 text-slate-300">Authentic - Relatable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* RELATIONSHIP Category */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wider">Relationship</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-amber-500">
                    <th className="text-left p-4 text-red-400 font-bold uppercase text-sm tracking-wider w-1/2">Transactional Speaking</th>
                    <th className="text-left p-4 text-amber-500 font-bold uppercase text-sm tracking-wider w-1/2">Transformational Speaking</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Authority Focused</td>
                    <td className="p-4 text-slate-300">Connection Focused</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Speaker Owns the Idea</td>
                    <td className="p-4 text-slate-300">Audience Feels Ownership of the Idea</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Monologue</td>
                    <td className="p-4 text-slate-300">Dialogue or Interaction</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Connection: Detached - Professional</td>
                    <td className="p-4 text-slate-300">Connection: Authentic - Relatable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* MORE Category */}
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wider">Impact & Outcomes</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-amber-500">
                    <th className="text-left p-4 text-red-400 font-bold uppercase text-sm tracking-wider w-1/2">Transactional Speaking</th>
                    <th className="text-left p-4 text-amber-500 font-bold uppercase text-sm tracking-wider w-1/2">Transformational Speaking</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">No Lasting Impact</td>
                    <td className="p-4 text-slate-300">Lasting Impact – Memorable</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Short-Term Focus</td>
                    <td className="p-4 text-slate-300">Long-Term Impact</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Motivate to Buy</td>
                    <td className="p-4 text-slate-300">Motivate to Change</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">No Action</td>
                    <td className="p-4 text-slate-300">Drives Action</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">Surface-Level Change</td>
                    <td className="p-4 text-slate-300">Deep and Sustainable Change</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-400">No Gift</td>
                    <td className="p-4 text-slate-300">A Gift</td>
                  </tr>
                </tbody>
              </table>
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

          {/* The Result */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-2xl p-8 md:p-12 border border-amber-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">The result</h3>
            <p className="text-xl text-slate-300 leading-relaxed mb-4">
              When leaders use story, people do not just understand.
            </p>
            <p className="text-2xl font-bold text-white">
              They believe.
            </p>
            <p className="text-lg text-slate-400 mt-4">
              Belief is what turns change into progress.
            </p>
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
