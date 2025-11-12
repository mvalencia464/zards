'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, Users, BookOpen, Mic2, ArrowRight, BarChart3 } from 'lucide-react';

export default function NavigationHub() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      {/* Header */}
      <nav className="border-b border-slate-900 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
            <Zap className="text-amber-500 w-6 h-6" fill="currentColor" />
            <span>SWARM EFFECT</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/20 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6 text-white">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Swarm Effect®</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-16">
            Choose your path to mastering strategic communication
          </p>

          {/* Navigation Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {/* Landing Page */}
            <Link href="/landing">
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group cursor-pointer h-full">
                <div className="bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-amber-500 transition-colors">
                  <Zap className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Landing Page</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Discover the methodology and how The Swarm Effect transforms technical communication
                </p>
                <div className="flex items-center gap-2 text-amber-500 font-medium group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Program Details */}
            <Link href="/program">
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group cursor-pointer h-full">
                <div className="bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-amber-500 transition-colors">
                  <BookOpen className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Program Details</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Deep dive into the Swarm Effect4 methodology and core strategies
                </p>
                <div className="flex items-center gap-2 text-amber-500 font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Workshop */}
            <Link href="/workshop2">
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group cursor-pointer h-full">
                <div className="bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-amber-500 transition-colors">
                  <Users className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Workshop</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Executive workshop for designing strategic narratives that earn buy-in
                </p>
                <div className="flex items-center gap-2 text-amber-500 font-medium group-hover:gap-3 transition-all">
                  View Details <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Speaker Page */}
            <Link href="/speaker">
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group cursor-pointer h-full">
                <div className="bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-amber-500 transition-colors">
                  <Mic2 className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Speaker</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Book Arthur Zards for keynotes, workshops, and executive coaching
                </p>
                <div className="flex items-center gap-2 text-amber-500 font-medium group-hover:gap-3 transition-all">
                  Book Now <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Research Page */}
            <Link href="/research">
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group cursor-pointer h-full">
                <div className="bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-amber-500 transition-colors">
                  <BarChart3 className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Research</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Proven results and social proof for securing buy-in and budget approval
                </p>
                <div className="flex items-center gap-2 text-amber-500 font-medium group-hover:gap-3 transition-all">
                  View Research <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-600 text-center text-sm border-t border-slate-900 mt-20">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <Zap className="w-5 h-5" />
          <span className="font-bold tracking-tighter">SWARM EFFECT</span>
        </div>
        <p>© {new Date().getFullYear()} The Swarm Effect®. All rights reserved.</p>
      </footer>
    </div>
  );
}
