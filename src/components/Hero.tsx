import { ArrowRight, Timer, TrendingUp, ShieldCheck, Grid, Package, ClipboardCheck, Receipt } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-black">AI-Powered</span><br />
              <span className="text-blue-600">Auditing</span><br />
              <span className="text-gray-400 text-4xl">for the Modern CPA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Automate document processes end-to-end, ensuring accuracy, efficiency, and compliance across critical business operations.
            </p>
            
            <div className="flex gap-8 mb-12">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Reduce Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-green-600" />
                <span>Save Time</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-600" />
                <span>Ensure Compliance</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition flex items-center gap-2"
              >
                Schedule a Meeting <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#features" className="border border-gray-200 hover:border-gray-300 px-6 py-3 rounded-lg transition">
                Discover Features
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">AI does the work, you decide</h2>
              <p className="text-gray-600">Deploy AI Risk Agents to streamline audit processes</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Grid className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Anomaly Detection</h3>
                  <p className="text-sm text-gray-600">Spot outliers before they escalate</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Receipt className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Receipt Matching</h3>
                  <p className="text-sm text-gray-600">Automate verification processes</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <ClipboardCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">SOX Validation</h3>
                  <p className="text-sm text-gray-600">Ensure regulatory compliance</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Package className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Expense Audits</h3>
                  <p className="text-sm text-gray-600">Streamline approval processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-gray-600 text-lg">
            Reduce risk, minimize OPEX, and accelerate workflows with our powerful AI-driven auditing tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;