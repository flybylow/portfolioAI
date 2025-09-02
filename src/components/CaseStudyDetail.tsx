"use client";

import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { CaseStudy } from '@/data/case-studies';
import { Button } from '@/components/ui/button';
import { Footer } from './Footer';

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  onBack: () => void;
}

export const CaseStudyDetail = ({ caseStudy, onBack }: CaseStudyDetailProps) => (
  <div className="min-h-screen bg-white">
    {/* Header */}
    <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors p-0 h-auto"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to work
        </Button>
      </div>
    </div>

    {/* Hero Section */}
    <div className={`${caseStudy.heroImage} py-24`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center text-white">
          <div className="text-sm font-medium opacity-80 mb-4">{caseStudy.year}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">{caseStudy.subtitle}</p>
        </div>
      </div>
    </div>

    {/* Project Overview */}
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="text-sm text-gray-500">Role</div>
            <div className="font-bold text-lg">{caseStudy.role}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Duration</div>
            <div className="font-bold text-lg">{caseStudy.duration}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Client</div>
            <div className="font-bold text-lg">{caseStudy.client}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Team</div>
            <div className="font-bold text-lg">{caseStudy.team.join(', ')}</div>
          </div>
        </div>


      </div>
    </div>

    {/* Challenge & Solution */}
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Challenge</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{caseStudy.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Solution</h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
          </div>
        </div>

        {/* Business Context - Full Width Spanning 2 Columns */}
        {caseStudy.businessContext && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Business Context</h3>
            <div className="flex items-start gap-4">
              {/* Company/Client Logo */}
              <div className="flex-shrink-0">
                {caseStudy.logo ? (
                  <div className="w-20 h-20 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                    <Image src={caseStudy.logo} alt={`${caseStudy.client} logo`} width={80} height={80} className="object-contain" />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-xs text-center">Client Logo</span>
                  </div>
                )}
              </div>
              {/* Business Context Text */}
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">{caseStudy.businessContext}</p>
              </div>
            </div>
          </div>
        )}

        {/* Problem Breakdown with ASCII */}
        {caseStudy.problemBreakdown && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Problem Analysis</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap font-mono">
{caseStudy.problemBreakdown}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Research & Discovery */}
    {caseStudy.researchMethods && (
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Research & Discovery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {caseStudy.researchMethods.map((method, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border">
                <p className="text-sm text-gray-700">{method}</p>
              </div>
            ))}
          </div>

          {caseStudy.keyInsight && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Key Insight</h3>
              <p className="text-blue-800 italic">{caseStudy.keyInsight}</p>
            </div>
          )}
        </div>
      </div>
    )}

    {/* Design Solutions */}
    {caseStudy.solutions && (
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Design Solutions</h2>
          
          <div className="space-y-12">
            {caseStudy.solutions.map((solution, index) => (
              <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-4">
                      <span className="text-sm font-medium text-red-600">Problem:</span>
                      <p className="text-gray-700 mt-1">{solution.problem}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-green-600">Solution:</span>
                      <p className="text-gray-700 mt-1">{solution.solution}</p>
                    </div>
                  </div>
                  
                  {solution.diagram && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <pre className="text-xs text-gray-800 overflow-x-auto whitespace-pre-wrap font-mono">
{solution.diagram}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

    {/* Implementation & Results */}
    {caseStudy.implementationResults && (
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Implementation & Results</h2>
          
          <div className="bg-white p-6 rounded-lg">
            <pre className="text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap font-mono">
{caseStudy.implementationResults}
            </pre>
          </div>

          {/* Testimonials */}
          {caseStudy.testimonials && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6">User Feedback</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-800 italic">{testimonial}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact Metrics - Moved here and made horizontal */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {caseStudy.impact.map((metric, index) => (
                <div key={index} className="bg-white border border-gray-200 px-4 py-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{metric.split(' ')[0]}</div>
                  <div className="text-sm font-medium text-gray-700 leading-tight">{metric.split(' ').slice(1).join(' ')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Innovation & Technical Details */}
    {caseStudy.technologyStack && (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Innovation & Technical Details</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <pre className="text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap font-mono">
{caseStudy.technologyStack}
            </pre>
          </div>

          {caseStudy.designPrinciples && (
            <div>
              <h3 className="text-xl font-bold mb-4">Design Principles Developed</h3>
              <ul className="space-y-2">
                {caseStudy.designPrinciples.map((principle, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )}

    {/* Key Takeaway */}
    <div className="py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Key Takeaway</h2>
        <p className="text-lg leading-relaxed opacity-90">
          {caseStudy.keyTakeaway || 'This project demonstrates how thoughtful UX design can bridge the gap between complex technology and human needs, making powerful tools accessible without sacrificing their capabilities.'}
        </p>
      </div>
    </div>

    {/* Back to Work Link */}
    <div className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center mx-auto text-gray-700 hover:text-gray-900 border-gray-300 hover:border-gray-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Button>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
); 