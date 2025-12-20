import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileCTA } from '@/components/layout/MobileCTA';
import { HeroSection } from '@/components/sections/HeroSection';

// Lazy load below-the-fold sections
const ValuePropsSection = dynamic(() => import('@/components/sections/ValuePropsSection').then(mod => ({ default: mod.ValuePropsSection })), {
  loading: () => <div className="h-96 animate-pulse bg-cream/50" />,
});
const LocationGallerySection = dynamic(() => import('@/components/sections/LocationGallerySection').then(mod => ({ default: mod.LocationGallerySection })), {
  loading: () => <div className="h-96 animate-pulse bg-cream/50" />,
});
const PricingSection = dynamic(() => import('@/components/sections/PricingSection').then(mod => ({ default: mod.PricingSection })), {
  loading: () => <div className="h-96 animate-pulse bg-cream/50" />,
});

const AmenitiesSection = dynamic(() => import('@/components/sections/AmenitiesSection').then(mod => ({ default: mod.AmenitiesSection })), {
  loading: () => <div className="h-96 animate-pulse bg-cream/50" />,
});
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-96 animate-pulse bg-white" />,
});
const LeadFormSection = dynamic(() => import('@/components/sections/LeadFormSection').then(mod => ({ default: mod.LeadFormSection })), {
  loading: () => <div className="h-96 animate-pulse bg-sharkspace-blue/10" />,
});

const CTASection = dynamic(() => import('@/components/sections/CTASection').then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="h-64 animate-pulse bg-slate-navy/10" />,
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValuePropsSection />
        <LocationGallerySection />
        <PricingSection />
        <AmenitiesSection />
        <TestimonialsSection />
        <LeadFormSection />
        <CTASection />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
