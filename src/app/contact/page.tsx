import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';

export default function ContactPage({ searchParams }: { searchParams?: { sent?: string } }) {
  const sent = searchParams?.sent === '1';
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <MainNavigation currentPage="contact" />

      {/* Hero Section */}
      <div className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Interested in working together or have a question about my approach to UX design?
          </p>
        </div>
      </div>

      {sent && (
        <div className="max-w-4xl mx-auto px-6 -mt-6">
          <div className="rounded-md bg-green-50 text-green-800 p-4 border border-green-200">
            Thanks! I’ll get back to you soon.
          </div>
        </div>
      )}

      {/* Contact Information */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
              <div className="space-y-6">
              <div>
                  <h3 className="font-semibold text-lg mb-2">Ward De Muynck</h3>
                 
                  
                </div> <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a href="mailto:warddem@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                  warddem AT gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/warddem" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    linkedin.com/in/warddem
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-gray-600">Bruges, Belgium</p>
                </div>
              </div>
            </div>

            {/* Contact Form (temporarily hidden) */}
            <div></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
