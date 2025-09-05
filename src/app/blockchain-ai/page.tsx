"use client";
import { MainNavigation } from '@/components/MainNavigation';
import { Footer } from '@/components/Footer';

export default function BlockchainAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation currentPage="blockchain" />

      {/* Hero / Intro */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blockchain & AI</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            I design trustworthy AI and blockchain experiences that balance technical constraints with human understanding. Below is how I can help your team deliver clarity, adoption and measurable impact.
          </p>
        </div>
      </section>

      {/* What I Can Do For You */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 text-gray-900">What I Can Do For You</h2>
          <p className="text-xl text-center text-gray-600 max-w-4xl mx-auto mb-16">
            My approach is tailored to the unique challenges of AI and blockchain platforms, with practical solutions that work within technical constraints.
          </p>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-blue-300 text-black p-8">
              <h3 className="text-2xl font-semibold mb-2">AI/ML Interface Design</h3>
              <p>Making artificial intelligence transparent and trustworthy</p>
            </div>
            <div className="p-10">
              <ul className="space-y-5">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-4">→</span>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Explainable AI Design</div>
                    <div className="text-gray-600 text-sm">Make AI decision-making transparent and trustworthy for users</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-4">→</span>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Progressive Feature Introduction</div>
                    <div className="text-gray-600 text-sm">Gradually introduce AI capabilities as users build confidence</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-4">→</span>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Human-AI Collaboration Patterns</div>
                    <div className="text-gray-600 text-sm">Design workflows where AI augments rather than replaces human judgment</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-4">→</span>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Uncertainty Communication</div>
                    <div className="text-gray-600 text-sm">Clear visualization of AI confidence levels and limitations</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional sections */}
          <div className="mt-10 space-y-10">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-blue-300 text-black p-8">
                <h3 className="text-2xl font-semibold mb-2">Blockchain Product UX</h3>
                <p>Reducing mental load for wallets, transactions and on-chain concepts</p>
              </div>
              <div className="p-10">
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Key & Wallet Management</div>
                      <div className="text-gray-600 text-sm">Design safer non-custodial flows and recovery patterns users understand</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Transaction Clarity</div>
                      <div className="text-gray-600 text-sm">Explain fees, confirmations and risks before users sign</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Onboarding & Education</div>
                      <div className="text-gray-600 text-sm">Progressive disclosure for complex DeFi/NFT/DAO features</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Security & Permissions</div>
                      <div className="text-gray-600 text-sm">Readable signing messages and scopes to prevent costly mistakes</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-blue-300 text-black p-8">
                <h3 className="text-2xl font-semibold mb-2">Data & Ops Visualization</h3>
                <p>Make model health and system state actionable for real teams</p>
              </div>
              <div className="p-10">
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <span className="text-purple-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Model Monitoring Dashboards</div>
                      <div className="text-gray-600 text-sm">Drift, confidence and quality signals designed for fast decisions</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Human-in-the-Loop Workflows</div>
                      <div className="text-gray-600 text-sm">Labeling, triage and feedback loops integrated into operations</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Incident Response UX</div>
                      <div className="text-gray-600 text-sm">Prioritization, root-cause clues and safe rollback patterns</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Performance Explainers</div>
                      <div className="text-gray-600 text-sm">Translate metrics into narratives everyone can act on</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-blue-300 text-black p-8">
                <h3 className="text-2xl font-semibold mb-2">Research & Strategy</h3>
                <p>Align stakeholders and de-risk with evidence, not opinions</p>
              </div>
              <div className="p-10">
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <span className="text-amber-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Stakeholder Interviews</div>
                      <div className="text-gray-600 text-sm">Understand constraints across engineering, data and the business</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Opportunity Mapping</div>
                      <div className="text-gray-600 text-sm">Surface quick wins and sequence the roadmap with clarity</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Prototyping & Testing</div>
                      <div className="text-gray-600 text-sm">Rapid, realistic prototypes validated with representative users</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Success Metrics</div>
                      <div className="text-gray-600 text-sm">Define adoption and quality signals for ongoing measurement</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-blue-300 text-black p-8">
                <h3 className="text-2xl font-semibold mb-2">Team Enablement</h3>
                <p>Raise product quality by improving how your team ships</p>
              </div>
              <div className="p-10">
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Design Documentation</div>
                      <div className="text-gray-600 text-sm">Specs, flows and rationales that accelerate engineering</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Component Libraries</div>
                      <div className="text-gray-600 text-sm">Tokens and components that keep complex UIs consistent</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Design–Dev Handover</div>
                      <div className="text-gray-600 text-sm">Frictionless workflows for implementation and review</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Workshops & Training</div>
                      <div className="text-gray-600 text-sm">Upskill teams on UX for AI/ML and blockchain products</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


