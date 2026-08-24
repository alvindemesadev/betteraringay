import Section from '../ui/Section';
import { Heading } from '../ui/Heading';

export default function MapSection() {
  const lat = 16.3957;
  const lng = 120.3553;
  const bbox = `${lng - 0.02},${lat - 0.02},${lng + 0.02},${lat + 0.02}`;
  const osmEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <Section>
      <Heading level={2}>Weather & Map of Aringay</Heading>
      <p className="text-gray-600 mb-6">
        Find the Municipal Hall and check real-time conditions
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">
            Municipal Hall, Aringay
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Marcos Avenue, Poblacion, Aringay, La Union 2503 • 16.3957°N,
            120.3553°E • ~20m elevation
          </p>
          <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-gray-300 bg-white">
            <iframe
              title="Map of Aringay Municipal Hall"
              src={osmEmbed}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Interactive OSM — use +/− or arrow keys. Data © OpenStreetMap
            contributors.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=15/${lat}/${lng}`}
              target="_blank"
              rel="noopener"
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Open in OpenStreetMap →
            </a>
            <span className="text-gray-300">|</span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
              target="_blank"
              rel="noopener"
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Google Maps →
            </a>
          </div>
        </div>
        <div className="bg-primary-700 text-white rounded-xl p-6 flex flex-col">
          <h3 className="font-semibold text-white mb-2">
            Aringay & Lingayen Gulf
          </h3>
          <p className="text-primary-100 text-sm mb-4">
            Coastal gateway to La Union — 84.54 km², Lingayen Gulf to the west,
            Aringay River to the south. 210 km north of Manila, 24 km south of
            San Fernando City, 25 km west of Baguio.
          </p>
          <img
            src="/aringay-banner.jpg"
            alt="Aringay River"
            className="w-full h-48 object-cover rounded-lg mb-4"
            loading="lazy"
          />
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-primary-100 text-xs">Municipal Center</div>
              <div className="font-semibold">16°24′N 120°21′E</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-primary-100 text-xs">Land Area</div>
              <div className="font-semibold">84.54 km²</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-primary-100 text-xs">Coastal</div>
              <div className="font-semibold">Lingayen Gulf</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-primary-100 text-xs">ZIP</div>
              <div className="font-semibold">2503</div>
            </div>
          </div>
          <p className="text-xs text-primary-200 mt-4">
            Nearest towns: Caba 4.1km N, Agoo 8.2km S, Tubao 8.2km SE, San
            Fernando 24.8km N
          </p>
        </div>
      </div>
    </Section>
  );
}
