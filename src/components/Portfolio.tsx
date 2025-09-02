"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CaseStudy, caseStudies } from '@/data/case-studies';
import { HomePage } from './HomePage';
import { CaseStudyDetail } from './CaseStudyDetail';
import { Footer } from './Footer';
import { MainNavigation } from './MainNavigation';

export const Portfolio = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const searchParams = useSearchParams();

  // Handle URL parameters for direct case study linking
  useEffect(() => {
    const caseStudyId = searchParams.get('case-study');
    if (caseStudyId) {
      const caseStudy = caseStudies.find(cs => cs.id === caseStudyId);
      if (caseStudy) {
        setSelectedCaseStudy(caseStudy);
        // Update URL without the parameter to keep it clean
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, [searchParams]);

  const handleCaseStudyClick = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setSelectedCaseStudy(null);
    window.scrollTo(0, 0);
  };

  if (selectedCaseStudy) {
    return <CaseStudyDetail caseStudy={selectedCaseStudy} onBack={handleBackClick} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <MainNavigation currentPage="work" />

      {/* Content */}
      <HomePage onCaseStudyClick={handleCaseStudyClick} />

      {/* Footer */}
      <Footer />
    </div>
  );
}; 