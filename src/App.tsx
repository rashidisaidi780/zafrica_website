import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AuctionShowcase from '@/components/AuctionShowcase';
import About from '@/components/About';
import CompanyProfile from '@/components/CompanyProfile';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import SectionWave from '@/components/SectionWave';
import AuctionTerms from '@/pages/AuctionTerms';
import RepossessionTerms from '@/pages/RepossessionTerms';
import { Route, Routes } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SectionWave fromColor="#0d1b2a" toColor="#ffffff" />
        <AuctionShowcase />
        <SectionWave fromColor="#ffffff" toColor="#f9fafb" />
        <About />
        <SectionWave fromColor="#f9fafb" toColor="#ffffff" />
        <CompanyProfile />
        <Services />
        <SectionWave fromColor="#ffffff" toColor="#f9fafb" />
        <Contact />
        <SectionWave fromColor="#f9fafb" toColor="#ffffff" />
        <Testimonials />
      </main>
      <SectionWave fromColor="#ffffff" toColor="#0d1b2a" />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms/auction-services" element={<AuctionTerms />} />
      <Route path="/terms/repossession-services" element={<RepossessionTerms />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
