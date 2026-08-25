import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Gem } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <Section className="bg-muted/30">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <Heading level={2}>Brief History of Aringay</Heading>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            From a coastal river-mouth settlement at the mouth of the Aringay
            River, Lingayen Gulf — to the municipality of today.
          </p>
        </div>
        <Button asChild variant="outline" className="hidden md:inline-flex shrink-0">
          <Link to="/government/departments/history-culture">
            Full History <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Editorial two-column timeline — year left, story right */}
      <div className="max-w-4xl">
        {timeline.map((item, i) => (
          <div
            key={item.year}
            className={cn(
              'group grid grid-cols-[72px_1fr] md:grid-cols-[110px_1fr] gap-x-4 md:gap-x-10 py-5 border-b border-border/60 hover:bg-background rounded-lg px-2 -mx-2 transition-colors',
              i === timeline.length - 1 && 'border-b-0',
            )}
          >
            <div className="text-right">
              <span className="font-['Figtree'] font-bold text-primary text-lg md:text-2xl tracking-tight tabular-nums">
                {item.year}
              </span>
            </div>
            <div>
              <h3 className="font-semibold tracking-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Origin facts */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        <div className="flex gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5">
          <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div className="text-sm">
            <div className="font-semibold text-primary">Name Origin</div>
            <p className="text-muted-foreground mt-1 leading-relaxed">
              Folk tale of a datu’s daughter, <em>Aring</em>, rescued from drowning as
              her lover cried <em>“Aring, ay!”</em> — the call that became Aringay.
            </p>
          </div>
        </div>
        <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50/60 p-5">
          <Gem className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <div className="font-semibold text-amber-700">The Gold Trail</div>
            <p className="text-muted-foreground mt-1 leading-relaxed">
              Historic Aringay–Tonglo–Balatok gold trail terminus — a maritime
              trading center for Ilocano and Pangasinense settlers.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
