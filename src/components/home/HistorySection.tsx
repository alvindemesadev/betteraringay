import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Link } from 'react-router';

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
      <div className="flex justify-between items-end mb-8">
        <div>
          <Heading level={2}>Brief History of Aringay</Heading>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Coastal river-mouth settlement to municipality — mouth of the
            Aringay River, Lingayen Gulf.
          </p>
        </div>
        <Link
          to="/government/departments/history-culture"
          className="hidden md:inline text-primary-600 hover:text-primary-700 font-medium"
        >
          Full History →
        </Link>
      </div>
      <div className="relative border-l-2 border-primary-100 ml-3 md:ml-6 space-y-6">
        {timeline.map(item => (
          <div key={item.year} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow" />
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-primary-200 hover:shadow-sm transition">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="bg-primary-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {item.year}
                </span>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
          <strong className="text-primary-700">Name Origin:</strong> Folk tale
          of datu’s daughter <em>Aring</em> rescued as lover cried{' '}
          <em>“Aring, ay!”</em> — call that became Aringay.
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <strong className="text-amber-700">Gold Trail:</strong> Historic
          Aringay–Tonglo–Balatok gold trail terminus — maritime trading center
          for Ilocano and Pangasinense settlers.
        </div>
      </div>
    </Section>
  );
}
