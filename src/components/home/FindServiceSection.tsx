import { Link } from 'react-router';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const popular = [
  { label: 'Barangay Clearance', href: '/services/business/apply-for-barangay-clearance-and-mayors-business-permits' },
  { label: 'Business Permit', href: '/services/business/apply-for-barangay-clearance-and-mayors-business-permits' },
  { label: 'RHU Check-up', href: '/services/health-services/get-free-check-ups-basic-medicines-and-vaccines' },
  { label: 'Senior/PWD Aid', href: '/services/social-welfare/apply-for-senior-citizen-solo-parent-or-pwd-assistance' },
  { label: 'Agriculture Seeds', href: '/services/agriculture-fisheries/ask-for-free-seeds-seedlings-fertilizers-or-fingerlings' },
];

export default function FindServiceSection() {
  return (
    <section className="bg-card border-y py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold tracking-tight font-['Figtree']">Find a Service</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {popular.map(p => (
                <Link key={p.label} to={p.href}>
                  <Badge variant="secondary" className="font-normal hover:bg-primary hover:text-primary-foreground transition cursor-pointer">
                    {p.label}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[420px]">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search services..." className="pl-9" aria-label="Search services" onKeyDown={e => {
                if (e.key === 'Enter') {
                  const v = (e.target as HTMLInputElement).value.trim();
                  if (v) window.location.href = `/services?q=${encodeURIComponent(v)}`;
                }
              }} />
            </div>
            <Button asChild className="shrink-0">
              <Link to="/services">
                <Search className="h-4 w-4" /> Browse All
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
