"use client";

import { CaseStudy, caseStudies } from '@/data/case-studies';
import { CaseStudyCard } from './CaseStudyCard';

interface HomePageProps {
  onCaseStudyClick: (caseStudy: CaseStudy) => void;
}

export const HomePage = ({ onCaseStudyClick }: HomePageProps) => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Making tech <span className="italic">human</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
          15+ years designing interfaces that people actually like to use
        </p>
        <div className="text-gray-500">Ward • Interaction Designer • Belgium</div>
      </div>
    </div>

    {/* Featured Work */}
    <div id="work" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Selected Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Case studies showcasing how I transform complex technology into intuitive experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard 
              key={caseStudy.id}
              caseStudy={caseStudy}
              onClick={onCaseStudyClick}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
); 