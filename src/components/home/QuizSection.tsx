import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function QuizSection() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#0a2a7a] rounded-2xl px-6 py-10 md:px-10 md:py-12 text-center shadow-lg border border-white/10">
          <Badge variant="secondary" className="bg-white/15 text-white border-white/20 hover:bg-white/20 mb-4">
            <span aria-hidden>🧩</span> Aringay Quiz
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">How well do you know Aringay?</h2>
          <p className="text-blue-100 mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Test your knowledge of Aringay’s 24 barangays, 1741 history, Kilawen Festival, Aringay River, and Lingayen Gulf heritage.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-[#0a2a7a] hover:bg-white/90 shadow">
            <Link to="/quiz">Take the Quiz <ArrowRight className="ml-1.5 h-4 w-4 inline" /></Link>
          </Button>
          <p className="text-blue-200 text-xs mt-3">8 questions • 2 minutes • Instant score + share</p>
        </div>
      </div>
    </section>
  );
}
