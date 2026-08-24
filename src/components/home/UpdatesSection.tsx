import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function UpdatesSection() {
  return (
    <Section className="bg-muted/50">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <Heading level={2}>Latest Updates</Heading>
          <p className="text-muted-foreground">Real-time updates from the Municipality</p>
        </div>
        <Button asChild variant="ghost" className="hidden md:inline-flex">
          <a href="https://www.facebook.com/lgu.aringay.official" target="_blank" rel="noopener">
            Visit Facebook <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <img src="/aringay-seal.png" alt="Seal" className="w-12 h-12 object-contain bg-muted rounded-full p-1 border shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold">Official Facebook — Real-time updates</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Follow the Municipality of Aringay and BetterAringay.org for announcements, advisories, Kilawen Festival schedules, class suspensions, and community
                programs — posted as they happen.
              </p>
              <ul className="text-sm text-muted-foreground mt-3 list-disc list-inside space-y-1">
                <li>Official announcements & advisories</li>
                <li>Kilawen Festival & barangay fiesta programs</li>
                <li>Disaster alerts via MDRRMO (0917 800 1605)</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="https://www.facebook.com/lgu.aringay.official" target="_blank" rel="noopener">
                    LGU Aringay on Facebook
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Can’t see the feed?{' '}
                <a href="https://www.facebook.com/lgu.aringay.official" target="_blank" rel="noopener" className="text-primary hover:underline">
                  Open on Facebook
                </a>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
