import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactForm from '@/components/sections/ContactForm';
import FloatingButtons from '@/components/ui/FloatingButtons';
import VideoSection from '@/components/sections/VideoSection';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
       <VideoSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactForm />
      <FloatingButtons />
      
    </main>
  );
}