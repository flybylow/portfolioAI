"use client";

import { CaseStudy, caseStudies } from '@/data/case-studies';
import { CaseStudyCard } from './CaseStudyCard';
import Link from 'next/link';
import Image from 'next/image';

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

    {/* Welcome Section */}
    <div className="py-8">
      <Link href="/about" className="block">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-xl border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow bg-white">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="shrink-0">
                <Image
                  src="/home/face.png"
                  alt="Ward De Muynck portrait"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-3">Welcome</h2>
                <p className="text-gray-600 mb-5">
                  I'm Ward, an interaction designer helping teams make complex tech understandable and trusted.
                </p>
                <span className="inline-block text-blue-600 hover:text-blue-700 font-medium">
                  Learn more about me →
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
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