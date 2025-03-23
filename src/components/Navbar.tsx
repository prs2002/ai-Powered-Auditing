import { Calendar } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">SignalHQ</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How It Works</a>
            <a href="#for-auditors" className="text-gray-600 hover:text-gray-900 transition">For Auditors</a>
            <a
              href="#schedule"
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Schedule a meeting
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar