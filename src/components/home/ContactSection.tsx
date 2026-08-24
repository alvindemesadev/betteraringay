import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <Section>
      <Heading level={2}>Contact Information</Heading>
      <p className="text-gray-600 mb-6">
        Visit, call, or email the Municipality of Aringay
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="tel:0726079531"
          className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg hover:border-primary-200 transition group"
        >
          <div className="mx-auto w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-3 group-hover:bg-red-600 group-hover:text-white transition">
            <Phone className="h-6 w-6" />
          </div>
          <div className="font-semibold text-gray-900">Phone</div>
          <div className="text-primary-600 font-bold mt-1">(072) 607 9531</div>
          <div className="text-xs text-gray-500">
            Mon–Fri 8AM–5PM • Emergency 24/7
          </div>
          <div className="text-xs text-gray-400 mt-1">
            (072) 607 1986 alternate
          </div>
        </a>
        <a
          href="mailto:lgu_aringay@yahoo.com"
          className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg hover:border-primary-200 transition group"
        >
          <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition">
            <Mail className="h-6 w-6" />
          </div>
          <div className="font-semibold text-gray-900">Email</div>
          <div className="text-primary-600 font-bold mt-1">
            lgu_aringay@yahoo.com
          </div>
          <div className="text-xs text-gray-500">
            We’ll respond within 24 hours
          </div>
          <div className="text-xs text-gray-400 mt-1">
            hrmoaringay21@gmail.com
          </div>
        </a>
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-3">
            <MapPin className="h-6 w-6" />
          </div>
          <div className="font-semibold text-gray-900">Address</div>
          <div className="text-gray-700 text-sm mt-1">
            Municipal Hall, Marcos Avenue
          </div>
          <div className="text-gray-700 text-sm">
            Poblacion, Aringay, La Union 2503
          </div>
          <a
            href="https://www.openstreetmap.org/?mlat=16.3957&mlon=120.3553#map=15/16.3957/120.3553"
            target="_blank"
            rel="noopener"
            className="text-xs text-primary-600 hover:text-primary-700 mt-2 inline-block"
          >
            View on Map →
          </a>
        </div>
      </div>
    </Section>
  );
}
