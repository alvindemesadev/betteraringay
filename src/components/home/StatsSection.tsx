import { Link } from 'react-router';
import { Users, MapPinned, Building2, Ruler } from 'lucide-react';
import Section from '../ui/Section';
import { Heading } from '../ui/Heading';

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: '50,380',
      sub: '2020 Census',
      label: 'Population',
      href: '/government/departments/barangays',
      note: '50,786 (2024 POPCEN)',
    },
    {
      icon: MapPinned,
      value: '24',
      sub: 'Barangays',
      label: 'Administrative Units',
      href: '/government/departments/barangays',
      note: '13% urban, 87% rural',
    },
    {
      icon: Building2,
      value: '2nd Class',
      sub: 'Municipality',
      label: 'Income Classification',
      href: '/government/departments/transparency',
      note: 'Coastal, Lingayen Gulf',
    },
    {
      icon: Ruler,
      value: '84.54 km²',
      sub: 'Land Area',
      label: 'Total Municipal Area',
      href: '/government/departments/history-culture',
      note: '5.64% of La Union',
    },
  ];

  return (
    <Section className="bg-gray-50">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <Heading level={2}>Aringay at a Glance</Heading>
          <p className="text-gray-600 mt-2">
            Key facts about the Municipality of Aringay
          </p>
        </div>
        <Link
          to="/government/departments/barangays"
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          View 24 Barangays →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(s => {
          const Icon = s.icon;
          return (
            <Link key={s.label} to={s.href} className="group">
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg hover:border-primary-200 transition h-full">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-3 group-hover:bg-primary-600 group-hover:text-white transition">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {s.value}
                </div>
                <div className="text-xs text-gray-500">{s.sub}</div>
                <div className="text-sm font-medium text-gray-700 mt-1">
                  {s.label}
                </div>
                <div className="text-xs text-gray-400 mt-1">{s.note}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
