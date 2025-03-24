import { Zap, CircleCheckBig , Shield, Lock, RefreshCcw, ChartNoAxesColumnIncreasing } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 " />,
    title: 'End-to-End Automation',
    description: 'Automate document processes from start to finish, eliminating manual data entry and reducing human error..'
  },
  {
    icon: <Shield className="w-6 h-6 " />,
    title: 'Compliance Integrations',
    description: 'Seamlessly integrate with SOC, ISO, and other industry standards to ensure regulatory compliance..'
  },
  {
    icon: <RefreshCcw className="w-6 h-6 " />,
    title: 'Tool Integrations',
    description: 'Connect with popular third-party tools for a smooth workflow and enhanced productivity..'
  },
  {
    icon: <ChartNoAxesColumnIncreasing className="w-6 h-6 " />,
    title: 'Anomaly Detection',
    description: 'AI-powered detection of unusual patterns and potential issues before they become problems..'
  },
  {
    icon: <CircleCheckBig className="w-6 h-6 " />,
    title: '3-way Matching',
    description: 'Automatically verify purchase orders, invoices, and receipts to prevent fraud and errors.'
  },
  {
    icon: <Lock className="w-6 h-6 " />,
    title: 'Enhanced Security',
    description: 'Enterprise-grade security protocols ensure your sensitive financial data remains protected.'
  }
];

const Features = () => {
  return (
    <div id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-400 text-xl">Everything you need to build modern web applications</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;