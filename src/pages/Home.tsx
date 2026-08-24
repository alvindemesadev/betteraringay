import Hero from '../components/sections/Hero';
import ServicesSection from '../components/home/ServicesSection';
import GovernmentActivitySection from '../components/home/GovernmentActivitySection';
import FindServiceSection from '../components/home/FindServiceSection';
import StatsSection from '../components/home/StatsSection';
import MapSection from '../components/home/MapSection';
import HistorySection from '../components/home/HistorySection';
import UpdatesSection from '../components/home/UpdatesSection';
import LeadershipSection from '../components/home/LeadershipSection';
import ContactSection from '../components/home/ContactSection';
import QuizSection from '../components/home/QuizSection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Municipality of Aringay — BetterAringay.org"
        description="Transparency portal for the Municipality of Aringay, La Union — 24 barangays, 50,380 citizens, coastal gateway to La Union. Services, officials, budgets, ordinances, and contact at Marcos Ave, Poblacion."
        keywords="Aringay, La Union, Municipality of Aringay, BetterAringay, government services, transparency, 24 barangays, Kilawen Festival"
      />
      <main className="flex-grow">
        <Hero />
        <FindServiceSection />
        <ServicesSection />
        <StatsSection />
        <MapSection />
        <HistorySection />
        <UpdatesSection />
        <LeadershipSection />
        <ContactSection />
        <QuizSection />
        <GovernmentActivitySection />
      </main>
    </>
  );
};

export default Home;
