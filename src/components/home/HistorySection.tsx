import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Link } from 'react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const timeline = [
  {
    year: '1741',
    title: 'Founded as Municipality',
    desc: 'Created under Pangasinan (Bishopric of Nueva Segovia). Don Pablo Vergara first gobernadorcillo. Settled by fishermen along Carayan Lucsin (Aringay River).',
  },
  {
    year: '1850',
    title: 'Founding Town of La Union',
    desc: 'When La Union was founded, Aringay became one of its founding towns — balance of coastal fishing and upland farmlands (rice, tobacco).',
  },
  {
    year: '1903',
    title: 'Merged with Caba (Seat)',
    desc: 'Philippine Commission merged Aringay & Caba into one municipality; Aringay seat of government.',
  },
  {
    year: '1907',
    title: 'Caba Separated',
    desc: 'Caba separated again; Aringay retained current boundaries (84.54 km², 24 barangays).',
  },
  {
    year: '1913',
    title: 'Centennial (Sallapak) Tunnel',
    desc: '500m PNR tunnel in Poblacion/Salapak built in American era — intended Baguio rail, abandoned in WWII, now century-old landmark.',
  },
  {
    year: '1945',
    title: 'Liberation',
    desc: 'Battle of Bacsil Ridge nearby marked liberation of La Union from Japanese occupation; Aringay served as coastal trading hub.',
  },
  {
    year: '2014',
    title: 'Proposed Agoo-Aringay City',
    desc: 'HB 4644 proposed merging Agoo + Aringay into component city (not enacted) — highlighted growth pressure.',
  },
  {
    year: 'Today',
    title: 'Coastal Agri-Fishery Hub',
    desc: '2nd-class municipality, 24 barangays, 50,380 people — milkfish (bangus) pens (400+ operators), oyster, corn husk crafts, Kilawen Festival, Aringay Beach.',
  },
];

export default function HistorySection() {
  return (
    <Section className="bg-white">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <Heading level={2}>Brief History of Aringay</Heading>
          <p className="text-muted-foreground mt-2 max-w-2xl">Coastal river-mouth settlement to municipality — mouth of the Aringay River, Lingayen Gulf.</p>
        </div>
        <Button asChild variant="outline" className="hidden md:inline-flex">
          <Link to="/government/departments/history-culture">
            Full History <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="relative border-l-2 border-primary/10 ml-3 md:ml-6 space-y-6">
        {timeline.map(item => (
          <div key={item.year} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-primary rounded-full border-4 border-background shadow" />
            <Card className="hover:shadow-md hover:border-primary/20 transition">
              <CardContent className="p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary">{item.year}</Badge>
                  <h3 className="font-semibold tracking-tight">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4 text-sm">
            <strong className="text-primary">Name Origin:</strong> Folk tale of datu’s daughter <em>Aring</em> rescued as lover cried <em>“Aring, ay!”</em> — call that became Aringay.
          </CardContent>
        </Card>
        <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950/20">
          <CardContent className="p-4 text-sm">
            <strong className="text-amber-700 dark:text-amber-400">Gold Trail:</strong> Historic Aringay–Tonglo–Balatok gold trail terminus — maritime trading center for Ilocano and Pangasinense settlers.
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
