import Section from '../ui/Section';
import { Heading } from '../ui/Heading';

export default function UpdatesSection() {
  return (
    <Section className="bg-gray-50">
      <div className="flex justify-between items-end mb-6">
        <div>
          <Heading level={2}>Latest Updates</Heading>
          <p className="text-gray-600">
            Real-time updates from the Municipality
          </p>
        </div>
        <a
          href="https://facebook.com/lgu.aringay.official"
          target="_blank"
          rel="noopener"
          className="hidden md:inline text-primary-600 hover:text-primary-700 font-medium"
        >
          Visit Facebook →
        </a>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-start gap-4">
          <img
            src="/aringay-seal.png"
            alt="Seal"
            className="w-12 h-12 object-contain bg-gray-50 rounded-full p-1 border"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">
              Official Facebook — Real-time updates
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Follow the Municipality of Aringay and BetterAringay.org for
              announcements, advisories, Kilawen Festival schedules, class
              suspensions, and community programs — posted as they happen.
            </p>
            <ul className="text-sm text-gray-600 mt-3 list-disc list-inside space-y-1">
              <li>Official announcements & advisories</li>
              <li>Kilawen Festival & barangay fiesta programs</li>
              <li>Disaster alerts via MDRRMO (0917 800 1605)</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/lgu.aringay.official"
                target="_blank"
                rel="noopener"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition"
              >
                LGU Aringay on Facebook
              </a>
              <a
                href="https://www.facebook.com/lgu.aringay.official"
                target="_blank"
                rel="noopener"
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition"
              >
                BetterAringay (mirror)
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Can't see the feed?{' '}
              <a
                href="https://www.facebook.com/lgu.aringay.official"
                target="_blank"
                rel="noopener"
                className="text-primary-600 hover:underline"
              >
                Open on Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
