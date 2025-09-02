import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';

export default function ContactPage() {
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

      {/* Contact Information */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a href="mailto:ward@example.com" className="text-gray-600 hover:text-black transition-colors">
                    ward@example.com
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
                  <p className="text-gray-600">Belgium</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Experience</h3>
                  <p className="text-gray-600">15+ years in UX design and leadership</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Tell me about your project or question..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
