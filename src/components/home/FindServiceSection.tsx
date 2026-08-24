import { Link } from 'react-router';
import { Search } from 'lucide-react';

const popular = [
  {
    label: 'Barangay Clearance',
    href: '/services/business/apply-for-barangay-clearance-and-mayors-business-permits',
  },
  {
    label: 'Business Permit',
    href: '/services/business/apply-for-barangay-clearance-and-mayors-business-permits',
  },
  {
    label: 'RHU Check-up',
    href: '/services/health-services/get-free-check-ups-basic-medicines-and-vaccines',
  },
  {
    label: 'Senior/PWD Aid',
    href: '/services/social-welfare/apply-for-senior-citizen-solo-parent-or-pwd-assistance',
  },
  {
    label: 'Agriculture Seeds',
    href: '/services/agriculture-fisheries/ask-for-free-seeds-seedlings-fertilizers-or-fingerlings',
  },
];

export default function FindServiceSection() {
  return (
    <section className="bg-white border-y border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Find a Service</h2>
            <p className="text-sm text-gray-600">
              Popular:{' '}
              {popular.map((p, i) => (
                <span key={p.label}>
                  <Link
                    to={p.href}
                    className="text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    {p.label}
                  </Link>
                  {i < popular.length - 1 ? ' • ' : ''}
                </span>
              ))}
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            <Search className="h-4 w-4" /> Browse All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
