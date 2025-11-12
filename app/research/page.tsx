'use client';

import React from 'react';
import { Zap, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-bold tracking-wider text-xs uppercase mb-8">
            <span className="animate-pulse">●</span> Research & Validation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6 text-white">
            Proven Results for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Securing Buy-In
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            The Swarm Effect® doesn't just inform—it transforms how leaders earn commitment, secure budgets, and drive action across organizations.
          </p>
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

      {/* Featured Stat with Case Study */}
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
        </div>
      </section>

      {/* Buy-In Content from Workshop - Two Column Layout */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
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
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Most leaders communicate through information, not narrative. Facts inform. Stories move people. The Swarm Effect® gives executives a practical way to turn complex, technical content into messages that earn trust and spark action.
              </p>

              {/* Context */}
              <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-4">Why it matters now</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Not only has traditional communication shifted, AI is accelerating change across teams, tools, and expectations. None of it works without buy-in.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  The Swarm Effect® teaches leaders to craft buy-in narratives that help people understand, care, and commit.
                </p>
              </div>
            </div>

            {/* Right Column - Comparison Table */}
            <div className="flex items-start">
              <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl w-full">
                <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 bg-slate-900/50">
                  <div className="p-4 flex items-center gap-2">
                    <span className="text-red-500">✕</span> Conventional Corporate
                  </div>
                  <div className="p-4 flex items-center gap-2 text-amber-500 bg-amber-500/5">
                    <CheckCircle2 className="w-4 h-4" /> Swarm Effect®
                  </div>
                </div>
                <div className="divide-y divide-slate-900">
                  <div className="grid grid-cols-2 text-sm">
                    <div className="p-6 text-slate-400 flex flex-col">
                      <span className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Goal</span>
                      Passive Information Transfer
                    </div>
                    <div className="p-6 text-white font-medium bg-amber-500/5 flex flex-col">
                      <span className="text-xs uppercase tracking-widest font-bold text-amber-500/50 mb-2">Goal</span>
                      Actionable Impact & Propagation
                    </div>
                  </div>
                  <div className="grid grid-cols-2 text-sm">
                    <div className="p-6 text-slate-400 flex flex-col">
                      <span className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Format</span>
                      Lecture / Slide-Driven
                    </div>
                    <div className="p-6 text-white font-medium bg-amber-500/5 flex flex-col">
                      <span className="text-xs uppercase tracking-widest font-bold text-amber-500/50 mb-2">Format</span>
                      Conversational / Story-Driven
                    </div>
                  </div>
                  <div className="grid grid-cols-2 text-sm">
                    <div className="p-6 text-slate-400 flex flex-col">
                      <span className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Lifespan</span>
                      Dies after applause
                    </div>
                    <div className="p-6 text-white font-medium bg-amber-500/5 flex flex-col">
                      <span className="text-xs uppercase tracking-widest font-bold text-amber-500/50 mb-2">Lifespan</span>
                      Lives & thrives to transform
                    </div>
                  </div>
                  <div className="grid grid-cols-2 text-sm">
                    <div className="p-6 text-slate-400 flex flex-col">
                      <span className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-2">Engagement</span>
                      Passive Absorption
                    </div>
                    <div className="p-6 text-white font-medium bg-amber-500/5 flex flex-col">
                      <span className="text-xs uppercase tracking-widest font-bold text-amber-500/50 mb-2">Engagement</span>
                      Audience 'Swarming'
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Story Table Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            {/* Left Column - Image */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                How The Swarm Effect gets buy-in
              </h2>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/msgsndr/aepeJbIzCty08ITHJycY/media/6914cc32b4acab3f2457cbf3.webp"
                  alt="Arthur Zards speaking at a TedX event"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-slate-400 text-sm italic">
                Arthur Zards speaking at a TedX event
              </p>
            </div>

            {/* Right Column - Story Table */}
            <div>
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
                  <div className="grid grid-cols-2 text-sm">
                    <div className="p-6 text-slate-400">Exchange information</div>
                    <div className="p-6 text-white font-medium bg-amber-500/5">Inspire and Transform</div>
                  </div>
                  <div className="grid grid-cols-2 text-sm">
                    <div className="p-6 text-slate-400">Data Driven</div>
                    <div className="p-6 text-white font-medium bg-amber-500/5">Story Driven</div>
                  </div>
                  <div className="grid grid-cols-2 text-sm">
                    <div className="p-6 text-slate-400">Task Completion / Efficiency</div>
                    <div className="p-6 text-white font-medium bg-amber-500/5">Transformation / Personal Growth</div>
                  </div>
                  <div className="grid grid-cols-2 text-sm">
                    <div className="p-6 text-slate-400">Process-Oriented</div>
                    <div className="p-6 text-white font-medium bg-amber-500/5">Purpose-Driven</div>
                  </div>
                  <div className="grid grid-cols-2 text-sm">
                    <div className="p-6 text-slate-400">Static, Predictable Energy</div>
                    <div className="p-6 text-white font-medium bg-amber-500/5">Dynamic, Adaptive Energy</div>
                  </div>
                  <div className="grid grid-cols-2 text-sm">
                    <div className="p-6 text-slate-400">Logical-Only Approach</div>
                    <div className="p-6 text-white font-medium bg-amber-500/5">Logic + Emotional Connection</div>
                  </div>
                  <div className="grid grid-cols-2 text-sm">
                    <div className="p-6 text-slate-400">Tells the Audience a Story</div>
                    <div className="p-6 text-white font-medium bg-amber-500/5">Guides the Audience to Live the Story</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Outcomes - Full Width Below */}
          <h3 className="text-3xl font-bold text-white mb-8">You will learn how to:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                Turn complex updates into messages people remember
              </h4>
              <p className="text-slate-400 ml-7">
                Transform technical information into narratives that stick in your audience's mind long after the presentation ends.
              </p>
            </div>
            
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                Communicate change in a way that feels human and believable
              </h4>
              <p className="text-slate-400 ml-7">
                Bridge the gap between data-driven insights and human connection to make change initiatives resonate.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                Build trust through clarity, contrast, and authenticity
              </h4>
              <p className="text-slate-400 ml-7">
                Use proven narrative structures to establish credibility and earn stakeholder confidence.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                Guide audiences from data to decision
              </h4>
              <p className="text-slate-400 ml-7">
                Create clear pathways that move people from understanding information to taking action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-2xl p-8 md:p-12 border border-amber-500/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The result</h2>
            <p className="text-2xl text-slate-300 leading-relaxed mb-4">
              When leaders use story, people do not just understand.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-white mb-4">
              They believe.
            </p>
            <p className="text-xl text-slate-400">
              Belief is what turns change into progress.
            </p>
          </div>
        </div>
      </section>

      {/* Validation Stats */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            The Swarm Effect® in Numbers
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-amber-500 mb-2">15+</div>
              <div className="text-slate-400">Years of Research</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-amber-500 mb-2">0.001%</div>
              <div className="text-slate-400">Top Tier TEDx Talks</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-amber-500 mb-2">C-Suite</div>
              <div className="text-slate-400">Trusted by Executives Globally</div>
            </div>
          </div>

          <div className="bg-slate-950 p-8 rounded-xl border border-slate-800">
            <p className="text-xl text-slate-300 italic leading-relaxed mb-4">
              "The methodology challenged me to go outside of my comfort zone and develop something much more thought-provoking and impactful than I would have done on my own."
            </p>
            <div className="text-amber-500 font-bold">— Executive Client</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to secure buy-in for your next initiative?
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Schedule a conversation to explore how the Swarm Effect® can transform communication across your organization.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-amber-500/20 inline-flex items-center gap-2">
            Schedule Discovery Call
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
