import { Calendar, Users, ClipboardCheck } from 'lucide-react';

const Schedule = () => {
  return (
    <div id="schedule" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Schedule a Meeting</h1>
          <p className="text-xl text-gray-600">
            Learn how SignalsHQ can transform your auditing processes with a personalized demonstration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-black text-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-8">What to Expect</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Calendar className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">30-Minute Session</h3>
                  <p className="text-gray-400">A focused demonstration tailored to your specific needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
                  <p className="text-gray-400">Meet with our audit technology specialists who understand your industry.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <ClipboardCheck className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">No Obligation</h3>
                  <p className="text-gray-400">Learn about our solutions with no pressure or commitment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Demo</h2>
            <p className="text-gray-600 mb-8">
              Choose a convenient time for your personalized demonstration using our scheduling tool.
            </p>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition"
            >
              <Calendar className="w-5 h-5" />
              Schedule Online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;