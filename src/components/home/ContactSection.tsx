import { useState } from 'react';
import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export default function ContactSection() {
  const [open, setOpen] = useState(false);
  return (
    <Section>
      <Heading level={2}>Contact Information</Heading>
      <p className="text-muted-foreground mb-6">Visit, call, or email the Municipality of Aringay</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <div className="flex gap-2 justify-center mt-3">
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <a href="mailto:lgu_aringay@yahoo.com">Send Email</a>
              </Button>
              <Button size="sm" className="rounded-full" onClick={() => setOpen(true)}>
                <Send className="h-4 w-4" /> Message
              </Button>
            </div>
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send a Message to LGU Aringay</DialogTitle>
            <DialogDescription>We’ll forward your message to lgu_aringay@yahoo.com. For emergencies, call (072) 607-9531.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Juan Dela Cruz" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="juan@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="How can we help you?" rows={4} />
            </div>
            <Button
              onClick={() => {
                setOpen(false);
                alert('Message sent (demo) — in production this would email lgu_aringay@yahoo.com');
              }}
            >
              <Send className="h-4 w-4" /> Send Message
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Card className="mt-8 bg-muted/30 border-dashed">
        <CardHeader>
          <CardTitle className="text-base">Office Hours</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Municipal Hall open Mon–Fri 8AM–5PM. For after-hours emergencies, contact MDRRMO 0917 800 1605 or PNP 0926 616 8181. Follow{' '}
          <a href="https://www.facebook.com/lgu.aringay.official" target="_blank" rel="noopener" className="text-primary hover:underline">
            facebook.com/lgu.aringay.official
          </a>{' '}
          for class suspensions and advisories.
        </CardContent>
      </Card>
    </Section>
  );
}
