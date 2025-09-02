import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <MainNavigation currentPage="about" />

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 text-gray-900">
            Benefits I Deliver
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white mb-6">
                📈
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">User Adoption & Trust</h3>
              <p className="text-gray-600">
                Transform complex AI and blockchain concepts into intuitive experiences that users can confidently navigate, reducing onboarding time and increasing platform engagement.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white mb-6">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Faster Time-to-Market</h3>
              <p className="text-gray-600">
                Proven design frameworks specifically for emerging technology that accelerate development cycles while maintaining quality and user focus.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white mb-6">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Reduced Support Burden</h3>
              <p className="text-gray-600">
                Interfaces designed to prevent user errors and confusion, dramatically reducing support tickets and allowing your team to focus on innovation.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white mb-6">
                💼
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Stakeholder Confidence</h3>
              <p className="text-gray-600">
                Clear design documentation and user research that helps secure funding, align technical teams, and demonstrate ROI to leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 text-gray-900">
            What I Can Do For You
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-4xl mx-auto mb-16">
            My approach is tailored to the unique challenges of AI and blockchain platforms, with practical solutions that work within technical constraints.
          </p>
          
          <div className="space-y-12">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8">
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

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8">
                <h3 className="text-2xl font-semibold mb-2">Blockchain & Web3 UX</h3>
                <p>Simplifying decentralized technology for mainstream adoption</p>
              </div>
              <div className="p-10">
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Progressive Decentralization Framework</div>
                      <div className="text-gray-600 text-sm">Introduce Web3 concepts gradually using familiar patterns</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Trust System Design</div>
                      <div className="text-gray-600 text-sm">Build reputation and verification systems for peer-to-peer environments</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Wallet Integration UX</div>
                      <div className="text-gray-600 text-sm">Seamless connection flows that don't intimidate newcomers</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Transaction Flow Optimization</div>
                      <div className="text-gray-600 text-sm">Clear status communication for blockchain interactions</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8">
                <h3 className="text-2xl font-semibold mb-2">Strategic UX Leadership</h3>
                <p>Aligning teams around user-centered technology adoption</p>
              </div>
              <div className="p-10">
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Product Strategy Consulting</div>
                      <div className="text-gray-600 text-sm">Connect user needs to business goals and technical capabilities</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Team Building & Processes</div>
                      <div className="text-gray-600 text-sm">Establish UX practices within technical organizations</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Usability Auditing</div>
                      <div className="text-gray-600 text-sm">Comprehensive review of AI/blockchain interfaces with actionable recommendations</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-4">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Design ROI Demonstration</div>
                      <div className="text-gray-600 text-sm">Metrics and frameworks that prove UX impact to technical stakeholders</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 text-gray-900">
            How We'll Work Together
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-4xl mx-auto mb-16">
            I understand that AI and blockchain projects have unique constraints and stakeholder requirements. My process adapts to your technical environment while maintaining focus on user outcomes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Discovery & Strategy</h3>
              <div className="text-gray-600">
                <p>Deep dive into your technology stack, user types, and business constraints. Stakeholder interviews across technical and business teams.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Design & Validation</h3>
              <div className="text-gray-600">
                <p>Rapid prototyping within technical limitations. User testing frameworks adapted for complex technical products.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Implementation & Measurement</h3>
              <div className="text-gray-600">
                <p>Close collaboration with development teams. Design documentation that bridges UX vision and technical execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-xl">
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p>your-email@domain.com</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-xl">
              <h4 className="text-lg font-semibold mb-2">LinkedIn</h4>
              <p>Connect with me</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-xl">
              <h4 className="text-lg font-semibold mb-2">Location</h4>
              <p>Global remote work</p>
            </div>
          </div>

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
