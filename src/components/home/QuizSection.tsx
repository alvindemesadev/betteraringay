import Section from '../ui/Section';

export default function QuizSection() {
  return (
    <Section className="bg-primary-700 text-white rounded-xl mx-4 md:mx-0 my-8">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs tracking-widest uppercase mb-3">
          📚 Aringay Quiz
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">
          How well do you know Aringay?
        </h2>
        <p className="text-primary-100 mt-3">
          Test your knowledge of Aringay’s 24 barangays, 1741 history, Kilawen
          Festival, Aringay River, and Lingayen Gulf heritage.
        </p>
        <a
          href="/government/departments/history-culture"
          className="inline-block mt-6 bg-white text-primary-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Explore History & Culture →
        </a>
        <p className="text-xs text-primary-200 mt-3">
          Tip: Read Barangays + History pages first — answers are there!
        </p>
      </div>
    </Section>
  );
}
