'use client';

import React, { useState } from 'react';
import {
  Phone,
  Star,
  Shield,
  Clock,
  Award,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';

export default function RomeroDecksLanding() {
  const [formData, setFormData] = useState({
    deckWork: '',
    squareFootage: '',
    timeline: '',
    quoteMethod: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">

      {/* Top Banner - Limited Time Offer */}
      <div className="bg-gradient-to-r from-red-600 to-slate-950 text-white px-4 py-3 text-center text-sm md:text-base font-bold tracking-wide">
        Up to $500 OFF - Limited Time Offer! 
        <button 
          onClick={scrollToQuote}
          className="ml-4 underline hover:text-amber-500 transition-colors"
        >
          CLAIM NOW
        </button>
      </div>

      {/* Header/Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tighter text-white">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-sm" />
              <span>ROMERO DECKS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
              <a href="#areas" className="hover:text-amber-500 transition-colors">Service Areas</a>
              <a href="#process" className="hover:text-amber-500 transition-colors">Our Process</a>
              <a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a>
              <a href="#reviews" className="hover:text-amber-500 transition-colors">Reviews</a>
            </div>

            {/* Contact CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-slate-400">Call now for an instant quote</div>
                <a href="tel:5095551234" className="text-lg font-bold text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (509) 555-1234
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-slate-300 hover:text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 blur-[150px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Review Rating */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <span className="text-sm text-slate-400 font-medium">
              Rated 4.9 (132 Google Reviews)
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-6 text-center text-white">
            From Worn to Wow.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
              Premium Composite Decks
            </span>
            <br />
            in Just 5 Days, Guaranteed!
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto text-center leading-relaxed mb-12">
            Spokane's trusted experts in custom deck building, repair and restoration. 
            Transforming your outdoor space with precision, speed and lasting quality.
          </p>

          {/* Deck Image */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
              <img
                src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d34d33ef40ca44a9cbba9f.webp"
                alt="Beautiful composite deck by Romero Decks"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToQuote}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-slate-950 text-white text-lg font-bold rounded-sm hover:scale-105 transition-transform shadow-xl shadow-red-600/20 flex items-center justify-center gap-2 group"
            >
              Get My Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="tel:5095551234"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-sm border-2 border-slate-800 hover:border-amber-500 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (509) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="services" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
            Why Customers Choose Us
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            We don't just build decks—we create outdoor living spaces that last a lifetime.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value Point 1 */}
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                25 Years Experience + Fully Insured
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Licensed professionals with comprehensive coverage. Your project is protected from start to finish.
              </p>
            </div>

            {/* Value Point 2 */}
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Fast 5-Day Completion Guarantee
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Most decks completed within a week or less. We respect your time and deliver on our promises.
              </p>
            </div>

            {/* Value Point 3 */}
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Lifetime Warranty on Materials
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Premium composite materials backed by industry-leading warranties. Your investment is protected for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section id="quote-form" className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Get Your Deck Quote
            </h2>
            <p className="text-lg text-slate-400">
              Tell us what you need and we'll provide a custom quote—fast, accurate and hassle-free.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-800 shadow-2xl">
            <div className="space-y-6">
              {/* Field 1 */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  What deck work do you need? <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.deckWork}
                  onChange={(e) => setFormData({...formData, deckWork: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-sm p-4 text-white focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="">Please Choose</option>
                  <option value="new">New Deck Construction</option>
                  <option value="repair">Deck Repair</option>
                  <option value="restoration">Deck Restoration</option>
                  <option value="replacement">Deck Replacement</option>
                </select>
              </div>

              {/* Field 2 */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  Estimated square footage of your project? <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.squareFootage}
                  onChange={(e) => setFormData({...formData, squareFootage: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-sm p-4 text-white focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="">Please Choose</option>
                  <option value="small">Under 200 sq ft</option>
                  <option value="medium">200-400 sq ft</option>
                  <option value="large">400-600 sq ft</option>
                  <option value="xlarge">Over 600 sq ft</option>
                </select>
              </div>

              {/* Field 3 */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  How soon do you need help? <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-sm p-4 text-white focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="">Please Choose</option>
                  <option value="urgent">ASAP / Emergency</option>
                  <option value="soon">Within 2 weeks</option>
                  <option value="month">Within a month</option>
                  <option value="planning">Just planning ahead</option>
                </select>
              </div>

              {/* Field 4 */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  How would you like to get your quote? <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.quoteMethod}
                  onChange={(e) => setFormData({...formData, quoteMethod: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-sm p-4 text-white focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="">Please Choose</option>
                  <option value="phone">Phone Call</option>
                  <option value="email">Email</option>
                  <option value="text">Text Message</option>
                  <option value="visit">In-Person Visit</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-5 bg-gradient-to-r from-red-600 to-slate-950 text-white text-xl font-bold rounded-sm hover:scale-[1.02] transition-transform shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 group mt-8"
              >
                Get My Deck Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Fine Print */}
              <p className="text-xs text-slate-500 text-center mt-4">
                By submitting, you agree to receive communications about your project. We respect your{' '}
                <a href="#" className="underline hover:text-amber-500 transition-colors">privacy</a>.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 font-bold">
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Hi there, have a question? Text us here.</span>
          <span className="sm:hidden">Chat</span>
        </button>
      </div>

    </div>
  );
}

