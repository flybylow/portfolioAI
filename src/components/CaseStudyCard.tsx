"use client";

import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '@/data/case-studies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onClick: (caseStudy: CaseStudy) => void;
}

export const CaseStudyCard = ({ caseStudy, onClick }: CaseStudyCardProps) => (
  <div 
    className="group cursor-pointer bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
    onClick={() => onClick(caseStudy)}
  >
    <div className={`h-64 ${caseStudy.heroImage} flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      <div className="relative text-center text-white z-10">
        <div className="text-xs font-medium opacity-80 mb-2">{caseStudy.year}</div>
        <h3 className="text-lg font-semibold mb-1">{caseStudy.title}</h3>
        <div className="text-sm opacity-90">{caseStudy.subtitle}</div>
      </div>
    </div>
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-3">
        {caseStudy.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{caseStudy.client}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
); 