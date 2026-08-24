import { useState } from 'react';
import { Link } from 'react-router';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Phone, Mail, MapPin, Send, Shield, TriangleAlert, ExternalLink, Clock } from 'lucide-react';

const offices = [
  {
    name: 'Municipal Hall (Trunkline)',
    role: 'General inquiries, routing to all offices',
    phone: '(072) 607 9531',
    tel: '0726079531',
    alt: '(072) 607 1986',
  },
  {
    name: 'MDRRMO — Disaster Response',
    role: 'Rescue, evacuation, early warning',
    phone: '0917 800 1605',
    tel: '09178001605',
    alt: 'PDRRMO La Union: 0998 561 1519',
  },
  {
    name: 'PNP Aringay — Police',
    role: 'Peace and order, emergencies',
    phone: '0926 616 8181',
    tel: '09266168181',
    alt: 'Emergency: 911',
  },
  {
    name: 'RHU / MHO — Health',
    role: 'Check-ups, referrals, health programs',
    phone: '(072) 607 9531',
    tel: '0726079531',
    alt: 'Ask for Rural Health Unit',
  },
];

export default function Contact() {
  const [open, setOpen] = useState(false);
  const lat = 16.3957;
  const lng = 120.3553;
  const bbox = `${lng - 0.02},${lat - 0.02},${lng + 0.02},${lat + 0.02}`;
  const osmEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <>
      <SEO
        title="Contact Us — Municipality of Aringay"
        description="Contact the Municipality of Aringay, La Union — Municipal Hall (072) 607-9531, MDRRMO 0917 800 1605, PNP 0926 616 8181. Marcos Avenue, Poblacion, Aringay 2503."
        keywords="Aringay contact, Municipal Hall Aringay, MDRRMO Aringay, PNP Aringay, LGU Aringay contact number"
      />
      <main className="flex-grow">
        <Section className="p-3 pt-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Contact Us</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Heading level={1}>Contact Us</Heading>
          <p className="text-muted-foreground text-lg max-w-2xl mt-2">
            Reach the Municipality of Aringay — by phone, email, or a visit to the
            Municipal Hall at Marcos Avenue, Poblacion.
          </p>

          {/* Primary channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="text-center hover:shadow-lg hover:border-primary/20 transition group">
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-3 group-hover:bg-red-600 group-hover:text-white transition">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="font-semibold">Phone</div>
                <div className="text-primary font-bold mt-1">(072) 607 9531</div>
                <div className="text-xs text-muted-foreground">Mon–Fri 8AM–5PM • Emergency 24/7</div>
                <div className="text-xs text-muted-foreground/70 mt-1">(072) 607 1986 alternate</div>
                <Button asChild variant="outline" size="sm" className="mt-3 rounded-full">
                  <a href="tel:0726079531">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg hover:border-primary/20 transition group">
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="font-semibold">Email</div>
                <div className="text-primary font-bold mt-1">lgu_aringay@yahoo.com</div>
                <div className="text-xs text-muted-foreground">We’ll respond within 24 hours</div>
                <div className="text-xs text-muted-foreground/70 mt-1">hrmoaringay21@gmail.com</div>
                <Button asChild variant="outline" size="sm" className="mt-3 rounded-full">
                  <a href="mailto:lgu_aringay@yahoo.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg hover:border-primary/20 transition group">
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-3 group-hover:bg-green-600 group-hover:text-white transition">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="font-semibold">Address</div>
                <div className="text-sm text-muted-foreground mt-1">Municipal Hall, Marcos Avenue</div>
                <div className="text-sm text-muted-foreground">Poblacion, Aringay, La Union 2503</div>
                <Button asChild variant="outline" size="sm" className="mt-3 rounded-full">
                  <a href="https://www.openstreetmap.org/?mlat=16.3957&mlon=120.3553#map=15/16.3957/120.3553" target="_blank" rel="noopener">
                    View on Map
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Office directory */}
          <div className="mt-12">
            <Heading level={2}>Office Directory & Hotlines</Heading>
            <p className="text-muted-foreground mb-6">Direct lines for the offices residents contact most</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offices.map(o => (
                <Card key={o.name} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      {o.name.includes('MDRRMO') ? (
                        <TriangleAlert className="h-5 w-5" />
                      ) : o.name.includes('PNP') ? (
                        <Shield className="h-5 w-5" />
                      ) : o.name.includes('RHU') ? (
                        <Phone className="h-5 w-5" />
                      ) : (
                        <MapPin className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold">{o.name}</div>
                      <div className="text-xs text-muted-foreground">{o.role}</div>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <a href={`tel:${o.tel}`}>
                          <Badge variant="secondary" className="font-normal hover:bg-primary hover:text-primary-foreground transition">
                            {o.phone}
                          </Badge>
                        </a>
                        <span className="text-xs text-muted-foreground">{o.alt}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map + message */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" /> Find the Municipal Hall
                </CardTitle>
                <p className="text-sm text-muted-foreground">Marcos Avenue, Poblacion, Aringay, La Union 2503 • 16.3957°N, 120.3553°E</p>
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
                <Button asChild variant="outline" size="sm">
                  <a href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`} target="_blank" rel="noopener">
                    Open in Google Maps <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <p className="text-sm text-muted-foreground">For non-emergency inquiries — we’ll forward this to lgu_aringay@yahoo.com</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="c-name">Name</Label>
                  <Input id="c-name" placeholder="Juan Dela Cruz" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="c-email">Email</Label>
                  <Input id="c-email" type="email" placeholder="juan@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="c-msg">Message</Label>
                  <Textarea id="c-msg" placeholder="How can we help you?" rows={5} />
                </div>
                <Button onClick={() => setOpen(true)} className="w-full">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
                <p className="text-xs text-muted-foreground">
                  For emergencies, do not use this form — call MDRRMO <a href="tel:09178001605" className="text-primary hover:underline">0917 800 1605</a> or 911.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Office hours */}
          <Card className="mt-12 bg-muted/30 border-dashed">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Office Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Municipal Hall: Monday–Friday, 8:00 AM – 5:00 PM (weekends and holidays closed).</p>
              <p>
                After-hours emergencies: MDRRMO <a href="tel:09178001605" className="text-primary hover:underline">0917 800 1605</a> or PNP{' '}
                <a href="tel:09266168181" className="text-primary hover:underline">0926 616 8181</a>.
              </p>
              <p>
                Class suspensions and advisories:{' '}
                <a href="https://www.facebook.com/lgu.aringay.official" target="_blank" rel="noopener" className="text-primary hover:underline">
                  facebook.com/lgu.aringay.official
                </a>
              </p>
            </CardContent>
          </Card>

          <Separator className="my-10" />

          <div className="text-sm text-muted-foreground">
            Looking for a specific service?{' '}
            <Link to="/services" className="text-primary hover:underline font-medium">
              Browse all services →
            </Link>{' '}
            or meet the officials on the{' '}
            <Link to="/government/departments/executive" className="text-primary hover:underline font-medium">
              Executive page →
            </Link>
          </div>
        </Section>
      </main>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Send</DialogTitle>
            <DialogDescription>
              Demo form — in production this would email lgu_aringay@yahoo.com. For urgent matters, call (072) 607-9531.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>OK</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
