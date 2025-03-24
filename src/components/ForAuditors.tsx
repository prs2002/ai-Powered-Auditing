import { CircleCheckBig , ArrowRight } from 'lucide-react';

const ForAuditors = () => {
  return (
    <div id="for-auditors" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">For Auditors</h2>
          <p className="text-gray-600 text-xl">Streamline your auditing process with SignalHQ</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mx-auto">
          <div className=" bg-white p-6 rounded-lg shadow-lg space-y-6">
            <h3 className="text-2xl font-bold bg-gray-100 px-5 py-5 rounded-lg">For CPAs & Audit Firms</h3>
            <p className="text-gray-600">
            Handle more clients with the same team size and deliver higher quality audits. Streamline your processes and focus on strategic analysis rather than manual data processing.
            </p>
            <ul className="space-y-3">
              {['Process client documents 10x faster with AI-powered automation',
               'Identify high-risk areas automatically for focused attention',
                'Ensure compliance with latest AICPA standards and regulations',
                 'Reduce time spent on routine verification tasks by 70%'].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CircleCheckBig  className="w-5 h-5 text-green-500 " />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a className='transition hover:bg-gray-900 inline-flex items-center gap-1 bg-black text-white rounded-lg px-6 py-3 cursor-pointer'>
              Learn More <ArrowRight className='w-5 h-5' />
            </a>
          </div>

          <div className=" bg-white p-6 rounded-lg shadow-lg space-y-6">
            <h3 className="text-2xl font-bold bg-gray-100 px-5 py-5 rounded-lg ">For Corporate Audit Teams</h3>
            <p className="text-gray-600">
            Strengthen your organization's internal controls and streamline compliance processes. Handle more audit responsibilities with your existing team while improving quality.
            </p>
            <ul className="space-y-3">
              {['Automate SOX compliance verification and reporting',
               'Monitor 100% of transactions instead of sampling',
                'Generate comprehensive audit trails automatically',
                 'Integrate with existing ERP and financial systems'].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CircleCheckBig  className="w-5 h-5 text-green-500 " />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a className='transition hover:bg-gray-900 inline-flex items-center gap-1 bg-black text-white rounded-lg px-6 py-3 cursor-pointer'>
              Learn More <ArrowRight className='w-5 h-5' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForAuditors;