import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
  { q: 'Where is the Municipal Hall?', a: 'Marcos Avenue, Poblacion, Aringay, La Union 2503 — open Mon–Fri 8AM–5PM. Trunk (072) 607-9531 / 607-1986, email lgu_aringay@yahoo.com.' },
  { q: 'How do I get a barangay clearance?', a: 'Visit your barangay hall (24 barangays) Mon–Fri 8AM–5PM with valid ID and proof of residency. Business clearance is separate from personal clearance — ask for business type.' },
  { q: 'What is the MDRRMO hotline?', a: 'MDRRMO Aringay — 0917 800 1605 (also 0998 561 1519 PDRRMO La Union). For emergencies dial 911 or (072) 607-9531.' },
  { q: 'How to join the Aringay Quiz?', a: 'Click “Take the Quiz” in the blue section or visit /quiz — 8 questions about barangays, 1741 history, Kilawen Festival, and Lingayen Gulf. All answers are in Barangays + History pages.' },
];

export default function FAQSection() {
  return (
    <Section className="bg-white">
      <Heading level={2} className="text-center">Frequently Asked Questions</Heading>
      <p className="text-center text-muted-foreground mb-8">Quick answers for Aringay residents and visitors</p>
      <div className="max-w-3xl mx-auto">
        <Accordion>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
