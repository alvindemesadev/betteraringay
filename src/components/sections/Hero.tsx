import { useTranslation } from 'react-i18next';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="relative bg-gradient-to-r from-primary-700 to-primary-600 text-white py-12 md:py-20 overflow-hidden">
      {/* Subtle banner watermark */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/aringay-banner.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary-700/95 to-primary-600/80"
        aria-hidden="true"
      />
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <Text
              transform="uppercase"
              className="text-primary-100 tracking-widest text-sm"
            >
              Welcome to
            </Text>
            <Heading className="text-white mt-2">
              {import.meta.env.VITE_GOVERNMENT_NAME}
            </Heading>
            <Text className="text-primary-50 mt-4 text-lg max-w-xl">
              {t('hero.subtitle')}
            </Text>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow">
                <Link to="/services">
                  Browse Services <span aria-hidden>→</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:text-white"
              >
                <Link to="/government/departments/executive">Contact Us</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="bg-white/15 backdrop-blur px-3 py-1.5 rounded-full">
                📍 16°24′N 120°21′E • Lingayen Gulf
              </span>
              <span className="bg-white/15 backdrop-blur px-3 py-1.5 rounded-full">
                🏘️ 24 Barangays
              </span>
              <span className="bg-white/15 backdrop-blur px-3 py-1.5 rounded-full">
                🌊 Aringay Beach • Kilawen Festival
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-4 shadow-xl max-w-sm w-full">
              <img
                src="/aringay-seal.png"
                alt="Official Seal of the Municipality of Aringay, La Union"
                className="w-32 h-32 mx-auto object-contain"
                loading="eager"
              />
              <img
                src="/aringay-town.jpg"
                alt="Aringay Town Proper"
                className="mt-4 w-full h-40 object-cover rounded-xl"
                loading="lazy"
              />
              <p className="text-center text-gray-600 text-xs mt-3">
                Coastal gateway to La Union — Established 1741 • 50,380 citizens
                (2020)
              </p>
              <p className="text-center text-gray-400 text-[10px] mt-1">
                Images: Wikipedia Commons (CC BY-SA)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
