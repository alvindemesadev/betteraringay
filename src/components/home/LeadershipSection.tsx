import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Link } from 'react-router';
import { Mail, Phone } from 'lucide-react';

export default function LeadershipSection() {
  return (
    <Section className="bg-gray-50">
      <div className="flex justify-between items-end mb-8">
        <div>
          <Heading level={2}>Municipal Leadership</Heading>
          <p className="text-gray-600 mt-2">
            Elected officials, 2025–2028 term — 100% precincts (COMELEC)
          </p>
        </div>
        <Link
          to="/government/departments/executive"
          className="hidden md:inline text-primary-600 hover:text-primary-700 font-medium"
        >
          View All Officials →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 flex gap-4 hover:shadow-md transition">
          <img
            src="/aringay-seal.png"
            alt="Seal"
            className="w-20 h-20 object-contain bg-gray-50 rounded-full p-2 border"
          />
          <div className="flex-1">
            <div className="text-xs text-gray-500 uppercase tracking-widest">
              Municipal Mayor
            </div>
            <div className="font-bold text-gray-900 text-lg">
              Hon. Benjamin O. Sibuma
            </div>
            <div className="text-sm text-gray-600">
              Former merchant mariner, councilor, vice mayor — SGLG awardee.
              Re-elected 2025 with 25,068 votes (LAKAS).
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:lgu_aringay@yahoo.com"
                className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700"
              >
                <Mail className="h-4 w-4" /> lgu_aringay@yahoo.com
              </a>
              <a
                href="tel:0726079531"
                className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700"
              >
                <Phone className="h-4 w-4" /> (072) 607-9531
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 flex gap-4 hover:shadow-md transition">
          <img
            src="/aringay-seal.png"
            alt="Seal"
            className="w-20 h-20 object-contain bg-gray-50 rounded-full p-2 border"
          />
          <div className="flex-1">
            <div className="text-xs text-gray-500 uppercase tracking-widest">
              Municipal Vice Mayor
            </div>
            <div className="font-bold text-gray-900 text-lg">
              Hon. Charito C. Sibuma
            </div>
            <div className="text-sm text-gray-600">
              Presiding Officer, Sangguniang Bayan (8 councilors). Elected 2025
              25,933 votes (PFP).
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:lgu_aringay@yahoo.com"
                className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700"
              >
                <Mail className="h-4 w-4" /> Sangguniang Bayan
              </a>
              <a
                href="tel:0726079531"
                className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700"
              >
                <Phone className="h-4 w-4" /> (072) 607-9531
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        Councilors: Maria Isabel D. Diaz, Ramsey Mangaoang, Woodrow Araojo Jr.,
        Rachell Juloya-Martinez, Josephine Dacanay, Karl Ong, Nelda Mapile,
        Rolando Herrera —{' '}
        <Link
          to="/government/departments/legislative"
          className="text-primary-600 hover:underline"
        >
          full SB list
        </Link>
      </p>
    </Section>
  );
}
