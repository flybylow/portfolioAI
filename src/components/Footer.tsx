"use client";

import Link from 'next/link';
import { caseStudies } from '@/data/case-studies';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Ward</h3>
            <p className="text-gray-300 mb-4">
              Human-centered interface designer.
            </p>
            <div className="text-gray-400 text-sm">
              Interaction Designer • Belgium • 15+ years experience
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#work" className="text-gray-300 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="font-semibold mb-4">Case Studies</h4>
            <ul className="space-y-2">
              {caseStudies.map((caseStudy) => (
                <li key={caseStudy.id}>
                  <Link 
                    href={`/?case-study=${caseStudy.id}`} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {caseStudy.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Ward - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
