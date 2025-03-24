import { Bot, Workflow } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Workflow className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">AI Workflow Builder</h2>
            </div>
            <p className="text-gray-600 text-lg">
              SignalsHQ provides a powerful, customizable workflow builder that handles your specific auditing needs. Build and deploy complex processes without coding expertise.
            </p>
            <div className="space-y-8 mt-8">
              {[
                {
                  number: 1,
                  title: 'Select a Workflow Template',
                  description: 'Choose from pre-built workflow templates designed for specific auditing tasks.'
                },
                {
                  number: 2,
                  title: 'Customize for Your Needs',
                  description: 'Adjust parameters, add integrations, and tailor the workflow to your specific requirements.'
                },
                {
                  number: 3,
                  title: 'Deploy and Analyze',
                  description: 'Launch your workflow and monitor real-time analytics as the AI processes your documents.'
                }
              ].map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#14162D] text-white rounded-3xl p-8 space-y-8">
            <div className="flex items-center gap-3">
              <Bot className="w-8 h-8" />
              <h2 className="text-3xl font-bold">AI Agents for Auditors</h2>
            </div>
            <p className="text-gray-300 text-lg">
              Our specialized AI agents work alongside your team, handling repetitive tasks and flagging potential issues that require human expertise.
            </p>
            <div className="space-y-6 mt-8">
              {[
                {
                  title: 'Fraud Detection Agent',
                  description: 'Continuously monitors transactions and documents for suspicious patterns, automatically escalating potential fraud cases.'
                },
                {
                  title: 'Compliance Verification Agent',
                  description: 'Ensures all documents and processes adhere to relevant regulations and standards, from SOX to ISO.'
                },
                {
                  title: 'Document Processing Agent',
                  description: 'Extracts, categorizes, and validates information from various document types with high accuracy.'
                }
              ].map((agent, index) => (
                <div key={index} className="bg-[#1C1F3B] rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <h3 className="text-xl font-semibold">{agent.title}</h3>
                  </div>
                  <p className="text-gray-400">{agent.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;