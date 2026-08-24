import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';

export default function MapSection() {
  const lat = 16.3957;
  const lng = 120.3553;
  const bbox = `${lng - 0.02},${lat - 0.02},${lng + 0.02},${lat + 0.02}`;
  const osmEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <Section>
      <Heading level={2}>Weather & Map of Aringay</Heading>
      <p className="text-muted-foreground mb-6">Find the Municipal Hall and check real-time conditions</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" /> Municipal Hall, Aringay
            </CardTitle>
            <p className="text-sm text-muted-foreground">Marcos Avenue, Poblacion, Aringay, La Union 2503 • 16.3957°N, 120.3553°E • ~20m elevation</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border bg-muted">
              <iframe
                title="Map of Aringay Municipal Hall"
                src={osmEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs text-muted-foreground">Interactive OSM — use +/− or arrow keys. Data © OpenStreetMap contributors.</p>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <a href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=15/${lat}/${lng}`} target="_blank" rel="noopener">
                  <Navigation className="h-4 w-4" /> OpenStreetMap
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`} target="_blank" rel="noopener">
                  Google Maps
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground border-primary flex flex-col overflow-hidden">
          <CardHeader>
            <CardTitle className="text-primary-foreground">Aringay & Lingayen Gulf</CardTitle>
            <p className="text-primary-foreground/80 text-sm">
              Coastal gateway to La Union — 84.54 km², Lingayen Gulf to the west, Aringay River to the south. 210 km north of Manila, 24 km south of San
              Fernando City, 25 km west of Baguio.
            </p>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <img src="/aringay-banner.jpg" alt="Aringay River" className="w-full h-48 object-cover rounded-lg" loading="lazy" />
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur">
                <div className="text-primary-foreground/70 text-xs">Municipal Center</div>
                <div className="font-semibold">16°24′N 120°21′E</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-primary-foreground/70 text-xs">Land Area</div>
                <div className="font-semibold">84.54 km²</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-primary-foreground/70 text-xs">Coastal</div>
                <div className="font-semibold">Lingayen Gulf</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-primary-foreground/70 text-xs">ZIP</div>
                <div className="font-semibold">2503</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/20 hover:bg-white/30">
                Caba 4.1km N
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
                Agoo 8.2km S
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
                San Fernando 24.8km N
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
