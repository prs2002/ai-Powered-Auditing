import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ForAuditors from './components/ForAuditors';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ForAuditors />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;