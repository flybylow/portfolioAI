"use client";
import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutPage() {
  const [aiOpen, setAiOpen] = useState(false);
  const [web3Open, setWeb3Open] = useState(false);
  const [leadershipOpen, setLeadershipOpen] = useState(false);
  const [benefit1Open, setBenefit1Open] = useState(false);
  const [benefit2Open, setBenefit2Open] = useState(false);
  const [benefit3Open, setBenefit3Open] = useState(false);
  const [benefit4Open, setBenefit4Open] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <MainNavigation currentPage="about" />

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image src="/home/face.png" alt="Ward Demeyer" width={96} height={96} className="w-24 h-24 rounded-full border border-gray-200 shadow-sm" />
          </div>
          <h3 className="text-2xl md:text-4xl font-bold mb-6">
          I design 
          </h3>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            interfaces that people <div className="italic text-blue-300">understand and trust</div>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            15+ years helping organizations make complex technology accessible, trusted, and profitable through user-centered design.
          </p>
        </div>
      </section>

      {/* Who is Ward */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/home/profiel.jpg"
                alt="Ward Demeyer speaking during a workshop"
                width={1024}
                height={1536}
                className="w-[70%] h-auto rounded-xl border border-gray-200 shadow-sm object-cover mx-auto"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Who is Ward?</h2>
              <p className="text-lg text-gray-700 mb-4">
                I’m a UX strategist and product designer focused on turning complex technology into
                interfaces people understand and trust. For more than a decade I’ve partnered with
                engineers, data scientists and product leaders to deliver clear, production‑ready
                designs in high‑stakes environments.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                My sweet spot is where human factors meet technical constraints: AI/ML platforms,
                manufacturing systems and crypto products. I run lean research, shape the
                information architecture, and collaborate closely with development to get working
                software into the hands of real users.
              </p>
              <p className="text-lg text-gray-700">
                Outside of work I’m a dad, foil-surfer and lifelong learner—always curious how technology can be made more humane.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 text-gray-900">
            Benefits I Deliver
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            <div
              className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-blue-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setBenefit1Open((v) => !v)}
              role="button"
              aria-expanded={benefit1Open}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-300 rounded-full flex items-center justify-center text-2xl text-black mb-6">
                📈
              </div>
              <h3 className="text-xl font-semibold mb-4 italic text-blue-300">User Adoption & Trust</h3>
              <p className={`text-gray-600 transition-all duration-300 ${benefit1Open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}> 
                Transform complex AI and blockchain concepts into intuitive experiences that users can confidently navigate, reducing onboarding time and increasing platform engagement.
              </p>
            </div>
            
            <div
              className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-blue-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setBenefit2Open((v) => !v)}
              role="button"
              aria-expanded={benefit2Open}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-300 rounded-full flex items-center justify-center text-2xl text-black mb-6">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-4 italic text-blue-300">Faster Time-to-Market</h3>
              <p className={`text-gray-600 transition-all duration-300 ${benefit2Open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                Proven design frameworks specifically for emerging technology that accelerate development cycles while maintaining quality and user focus.
              </p>
            </div>
            
            <div
              className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-blue-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setBenefit3Open((v) => !v)}
              role="button"
              aria-expanded={benefit3Open}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-300 rounded-full flex items-center justify-center text-2xl text-black mb-6">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-4 italic text-blue-300">Reduced Support Burden</h3>
              <p className={`text-gray-600 transition-all duration-300 ${benefit3Open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                Interfaces designed to prevent user errors and confusion, dramatically reducing support tickets and allowing your team to focus on innovation.
              </p>
            </div>
            
            <div
              className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-blue-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setBenefit4Open((v) => !v)}
              role="button"
              aria-expanded={benefit4Open}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-300 rounded-full flex items-center justify-center text-2xl text-black mb-6">
                💼
              </div>
              <h3 className="text-xl font-semibold mb-4 italic text-blue-300">Stakeholder Confidence</h3>
              <p className={`text-gray-600 transition-all duration-300 ${benefit4Open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                Clear design documentation and user research that helps secure funding, align technical teams, and demonstrate ROI to leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section (moved above Services) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 text-gray-900">
            How We'll Work Together
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-4xl mx-auto mb-16">
            I understand that every project has unique constraints and requirements. 
            My process adapts to your environment while maintaining focus on user outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-300 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 italic text-blue-300">Discovery & Strategy</h3>
              <div className="text-gray-600">
                <p>Deep dive into your technology stack, user types, and business constraints. Stakeholder interviews across technical and business teams.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-300 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 italic text-blue-300">Design & Validation</h3>
              <div className="text-gray-600">
                <p>Rapid prototyping within technical limitations. User testing frameworks adapted for complex technical products.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-300 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 italic text-blue-300">Implementation & Measurement</h3>
              <div className="text-gray-600">
                <p>Close collaboration with development teams. Design documentation that bridges UX vision and technical execution.</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-10">
            <Image src="/home/workshop.png" alt="Co-creation workshop with operators, engineers and designers" width={1600} height={900} className="w-full h-auto rounded-xl border border-gray-200" />
          </div>
        </div>
      </section>

      {/* Services Section moved to /blockchain-ai */}

      {/* Background Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-8">My Background</h2>
              <p className="text-lg mb-8">
                I'm a UX strategist and researcher with 15 years of experience making complex technology accessible to real users. My work spans enterprise software, AI/ML platforms, and blockchain applications.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="font-semibold mb-2">Core Expertise</div>
                  <div>User research for specialized technical audiences</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="font-semibold mb-2">Technical Focus</div>
                  <div>Interface design for AI/ML and blockchain applications</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="font-semibold mb-2">Leadership Experience</div>
                  <div>Stakeholder alignment in technical organizations</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-5">Recent Projects</h3>
              <ul className="space-y-4 mb-10">
                <li className="bg-white/5 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="font-semibold text-green-400 mb-1">Bisq.network</div>
                  <div>Redesigned P2P Bitcoin exchange interface, achieving 83% reduction in user onboarding time</div>
                </li>
                <li className="bg-white/5 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="font-semibold text-green-400 mb-1">Robovision AI Platform</div>
                  <div>Simplified machine learning model training interface for non-technical users</div>
                </li>
                <li className="bg-white/5 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="font-semibold text-green-400 mb-1">Enterprise Blockchain Integration</div>
                  <div>Led UX strategy for supply chain transparency platform adoption</div>
                </li>
              </ul>
              
              <h3 className="text-2xl font-semibold mb-5">Unique Value</h3>
              <p className="text-lg">
                Unlike generalist UX designers, I understand the technical constraints and user psychology specific to AI and blockchain platforms. I've worked directly with DAO communities, enterprise AI teams, and crypto-native users to create solutions that respect both technical requirements and human limitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Make Your Technology More Human?</h2>
          <p className="text-xl mb-10 max-w-4xl mx-auto">
            Whether you're launching an AI startup, building enterprise blockchain solutions, or leading UX at a technical company, I can help you create experiences that users actually want to use.
          </p>
          
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="bg-white/10 p-8 rounded-xl border border-white/20">
              <div className="font-semibold text-lg mb-3">Project-Based Work</div>
              <p className="text-sm">Specific deliverables with clear timelines for product launches or major redesigns</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl border border-white/20">
              <div className="font-semibold text-lg mb-3">Fractional UX Leadership</div>
              <p className="text-sm">Ongoing strategic support for growing technical teams who need senior UX guidance</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl border border-white/20">
              <div className="font-semibold text-lg mb-3">Research & Strategy</div>
              <p className="text-sm">Deep user research and UX strategy development for complex technical products</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl border border-white/20">
              <div className="font-semibold text-lg mb-3">Team Development</div>
              <p className="text-sm">Training and process implementation to build UX capability within technical organizations</p>
            </div>
          </div>
          
          <p className="text-lg italic">
            Ready to start the conversation? Let's discuss how human-centered design can accelerate your AI or blockchain product's success.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
