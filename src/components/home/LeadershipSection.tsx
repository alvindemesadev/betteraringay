import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Link } from 'react-router';
import { Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function LeadershipSection() {
  return (
    <Section className="bg-muted/50">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <Heading level={2}>Municipal Leadership</Heading>
          <p className="text-muted-foreground mt-2">Elected officials, 2025–2028 term — 100% precincts (COMELEC)</p>
        </div>
        <Button asChild variant="outline" className="hidden md:inline-flex">
          <Link to="/government/departments/executive">View All Officials →</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6 flex gap-4">
            <Avatar className="h-20 w-20 border">
              <AvatarImage src="/aringay-seal.png" alt="Seal" />
              <AvatarFallback>BS</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <Badge variant="secondary" className="text-xs tracking-widest uppercase">Municipal Mayor</Badge>
              <div className="font-bold text-lg mt-1">Hon. Benjamin O. Sibuma</div>
              <div className="text-sm text-muted-foreground">Former merchant mariner, councilor, vice mayor — SGLG awardee. Re-elected 2025 with 25,068 votes (LAKAS).</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button asChild variant="ghost" size="sm" className="h-8 px-2">
                  <a href="mailto:lgu_aringay@yahoo.com">
                    <Mail className="h-4 w-4" /> lgu_aringay@yahoo.com
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="h-8 px-2">
                  <a href="tel:0726079531">
                    <Phone className="h-4 w-4" /> (072) 607-9531
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6 flex gap-4">
            <Avatar className="h-20 w-20 border">
              <AvatarImage src="/aringay-seal.png" alt="Seal" />
              <AvatarFallback>CS</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <Badge variant="secondary" className="text-xs tracking-widest uppercase">Municipal Vice Mayor</Badge>
              <div className="font-bold text-lg mt-1">Hon. Charito C. Sibuma</div>
              <div className="text-sm text-muted-foreground">Presiding Officer, Sangguniang Bayan (8 councilors). Elected 2025 25,933 votes (PFP).</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button asChild variant="ghost" size="sm" className="h-8 px-2">
                  <a href="mailto:lgu_aringay@yahoo.com">
                    <Mail className="h-4 w-4" /> Sangguniang Bayan
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="h-8 px-2">
                  <a href="tel:0726079531">
                    <Phone className="h-4 w-4" /> (072) 607-9531
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Councilors: Maria Isabel D. Diaz, Ramsey Mangaoang, Woodrow Araojo Jr., Rachell Juloya-Martinez, Josephine Dacanay, Karl Ong, Nelda Mapile, Rolando Herrera —{' '}
        <Link to="/government/departments/legislative" className="text-primary hover:underline">
          full SB list
        </Link>
      </p>
    </Section>
  );
}
