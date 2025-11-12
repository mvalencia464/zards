'use client';

import React from 'react';
import { Brain, Target, Zap, BookOpen, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-bold tracking-wider text-xs uppercase mb-8">
            <BookOpen className="w-4 h-4" />
            SWARM EFFECT<sup>4</sup>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6 text-white">
            The Crisis of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Executive Communication
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Don't just inform. Propagate.
          </p>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            The Swarm Effect<sup>4</sup> is not a public speaking course. It is an Idea Propagation System engineered for executives who need their strategic vision to survive contact with the audience.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-amber-500 mb-2">42M+</div>
            <div className="text-slate-400">Views Generated</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-amber-500 mb-2">15+</div>
            <div className="text-slate-400">Years Research</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-amber-500 mb-2">Stoic-Backed</div>
            <div className="text-slate-400">Psychological Certainty Protocol</div>
          </div>
        </div>
      </section>

      {/* Crisis Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-amber-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">I. The Crisis of Executive Communication</h2>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Modern corporate communication is failing. Traditional "corporate speak" results in ideas that "die before the audience applause ends."
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            The market demanded a high-efficiency solution: a model that could convert limited executive time into maximum return on communication capital. The Swarm Effect<sup>4</sup> emerged from the TED revolution to meet this need distilling 15 years of world-class communication analysis into a rapid-mastery framework.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            System Analysis: Executive Communication
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-amber-500">
                  <th className="text-left p-4 text-slate-400 font-bold uppercase text-sm tracking-wider">Dimension</th>
                  <th className="text-left p-4 text-red-400 font-bold uppercase text-sm tracking-wider">Conventional Corporate</th>
                  <th className="text-left p-4 text-amber-500 font-bold uppercase text-sm tracking-wider">Swarm Effect<sup>4</sup></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-bold text-white">Goal</td>
                  <td className="p-4 text-slate-400">Passive Information Transfer</td>
                  <td className="p-4 text-slate-300">Actionable Impact & Propagation</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-bold text-white">Format</td>
                  <td className="p-4 text-slate-400">Lecture / Slide-Driven</td>
                  <td className="p-4 text-slate-300">Conversational / Story-Driven</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-bold text-white">Lifespan</td>
                  <td className="p-4 text-slate-400">Dies after applause</td>
                  <td className="p-4 text-slate-300">Lives & thrives to transform</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-bold text-white">Engagement</td>
                  <td className="p-4 text-slate-400">Passive Absorption</td>
                  <td className="p-4 text-slate-300">Audience 'Swarming'</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mechanism Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Brain className="w-8 h-8 text-amber-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Mechanism of Transformation</h2>
          </div>
          <h3 className="text-2xl font-bold text-amber-500 mb-8">The Idea to Actualization Model</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-12">
            A proprietary framework ensuring executive ideas move rigorously from raw concept to sustained organizational impact.
          </p>

          <div className="space-y-8">
            {/* Phase I */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20">
                  <span className="text-amber-500 font-bold text-xl">I</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Discovery Protocol</h4>
                  <p className="text-amber-500 font-bold mb-3">The 'Deeper Truth'</p>
                  <p className="text-slate-300 leading-relaxed">
                    We interrogate your idea until we find the singular core element that matters. Anchored in Stoic philosophy to build unshakeable internal certainty.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase II */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20">
                  <span className="text-amber-500 font-bold text-xl">II</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Narrative Architecture</h4>
                  <p className="text-amber-500 font-bold mb-3">Structure & Arc</p>
                  <p className="text-slate-300 leading-relaxed">
                    Leveraging the 'Storytelling Creation Toolbox' to structure the idea for maximum resonance without needing to become a 'professional storyteller'.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase III */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20">
                  <span className="text-amber-500 font-bold text-xl">III</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Actualization Delivery</h4>
                  <p className="text-amber-500 font-bold mb-3">Swarm Execution</p>
                  <p className="text-slate-300 leading-relaxed">
                    Converting the refined idea into a powerful presentation that triggers the 'Swarm'—immediate, widespread organizational adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strategies */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            III. Core Strategies: The "How-To-Swarm" Blueprint
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold text-amber-500 mb-3">Conversational Mastery</h3>
              <p className="text-slate-300 leading-relaxed">
                Breaking definitively from rigid formal structures. A versatile style applicable not just to keynotes, but to high-stakes board meetings and sales pitches.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold text-amber-500 mb-3">The Engagement Toolkit</h3>
              <p className="text-slate-300 leading-relaxed">
                Solving the 'visually flat' presentation problem. Learn to use powerful visual tools that exist outside the standard slide deck without needing graphic design skills.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold text-amber-500 mb-3">AI as Strategic Collaborator</h3>
              <p className="text-slate-300 leading-relaxed">
                Using AI not as a replacement for thought, but as a 'new communication muse' to dramatically increase content creation velocity.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold text-amber-500 mb-3">Flow State Activation</h3>
              <p className="text-slate-300 leading-relaxed">
                Cultivating peak performance through focused preparation. The psychological mechanism that guarantees authentic connection and delivery mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophical Anchor */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">THE PHILOSOPHICAL ANCHOR</h2>
          <h3 className="text-2xl font-bold text-amber-500 mb-6">Stoicism: The Bedrock of Executive Certainty</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Most programs teach surface-level performance skills. We teach mental mastery.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            By integrating Stoic principles<sup>1</sup>specifically distinguishing "what is within and without our control"<sup>1</sup>we build unshakeable psychological security. This internal certainty is what allows an executive to be perceived as competent, authentic, and tough under pressure.
          </p>
          <div className="bg-slate-900 rounded-xl p-8 border-l-4 border-amber-500 mt-8">
            <p className="text-xl font-bold text-white mb-2">Certainty Protocol</p>
            <p className="text-slate-300 italic">
              "Psychological security is not a passive state, but the mind's expression of a degree of certainty in its situation."
            </p>
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            IV. Validation: The Swarm in Action
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">Measurable Reach</div>
              <div className="text-4xl font-extrabold text-white mb-2">42 Million+</div>
              <p className="text-slate-400">Collective online views generated by Swarm Effect<sup>4</sup> coached speakers.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">Elite Clientele</div>
              <div className="text-xl font-bold text-white mb-2">Billionaires, Olympians, Astronauts, & C-Suite Leaders</div>
              <p className="text-slate-400">Universally adaptable methodology across the highest echelons.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">Immediate ROI</div>
              <div className="text-xl font-bold text-white mb-2">"Able to apply immediately"</div>
              <p className="text-slate-400">Client feedback consistently highlights rapid applicability for busy schedules.</p>
            </div>
          </div>

          <div className="bg-slate-950 p-8 rounded-xl border border-slate-800">
            <p className="text-xl text-slate-300 italic leading-relaxed mb-6">
              "[Arthur] challenged me to go outside of my comfort zone and develop something much more thought provoking and controversial than I would have done on my own."
            </p>
            <div className="text-amber-500 font-bold">Executive Client</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to engineer your Idea Propagation System?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            The Swarm Effect<sup>4</sup> is available as an intensive Executive Sprint for leaders who need rapid mastery.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20 inline-flex items-center gap-2">
            Book Executive Sprint
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

