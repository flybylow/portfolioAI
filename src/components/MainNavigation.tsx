import Link from 'next/link';

interface MainNavigationProps {
  currentPage?: 'work' | 'about' | 'blockchain' | 'contact' | 'blog';
}

export const MainNavigation = ({ currentPage }: MainNavigationProps) => {
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-lg hover:text-gray-700 transition-colors">
            Ward
          </Link>
          <div className="flex space-x-8">
            <Link 
              href="/#work" 
              className={`text-sm transition-colors ${
                currentPage === 'work' 
                  ? 'text-black font-medium' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Work
            </Link>
            <Link 
              href="/about" 
              className={`text-sm transition-colors ${
                currentPage === 'about' 
                  ? 'text-black font-medium' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              About
            </Link>
            <Link 
              href="/blockchain-ai" 
              className={`text-sm transition-colors ${
                currentPage === 'blockchain' 
                  ? 'text-black font-medium' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Blockchain & AI
            </Link>
            <Link 
              href="/blog" 
              className={`text-sm transition-colors ${
                currentPage === 'blog' 
                  ? 'text-black font-medium' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm transition-colors ${
                currentPage === 'contact' 
                  ? 'text-black font-medium' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
