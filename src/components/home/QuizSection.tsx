import { Link } from 'react-router';

export default function QuizSection() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#0a2a7a] rounded-2xl px-6 py-10 md:px-10 md:py-12 text-center shadow-lg">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            <span aria-hidden>🧩</span> Aringay Quiz
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            How well do you know Aringay?
          </h2>
          <p className="text-blue-100 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Test your knowledge of Aringay’s 24 barangays, 1741 history, Kilawen
            Festival, Aringay River, and Lingayen Gulf heritage.
          </p>
          <Link
            to="/quiz"
            className="inline-block mt-6 bg-white text-[#0a2a7a] font-semibold px-7 py-3 rounded-xl shadow hover:bg-gray-100 transition"
          >
            Take the Quiz →
          </Link>
          <p className="text-blue-200 text-xs mt-3">
            5 questions • 1 minute • Instant score + share
          </p>
        </div>
      </div>
    </section>
  );
}
