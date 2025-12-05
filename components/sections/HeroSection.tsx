import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { HeroContent } from '@/components/sections/HeroContent';
import { CONTACT } from '@/lib/constants';
import { Phone, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-14 md:pt-20">
      {/* Full Screen Background Image - Desktop (LCP Element) */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/heropf.webp"
          alt="Sharkspace Coworking Space Sector 132 Noida Expressway - Premium Shared Office"
          fill
          priority
          fetchPriority="high"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AzLxq8vtP1iW3tbi4gtmRXkWOQoCSOcgdYq3/AE/f/sf2lKVMOS2UjRsS4TP/2Q=="
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/5 via-transparent to-transparent" />
      </div>

      {/* Full Screen Background Image - Mobile (LCP Element) */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/herophone.webp"
          alt="Sharkspace Coworking Space Sector 132 Noida Expressway - Shared Office Space"
          fill
          priority
          fetchPriority="high"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AzLxq8vtP1iW3tbi4gtmRXkWOQoCSOcgdYq3/AE/f/sf2lKVMOS2UjRsS4TP/2Q=="
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      </div>

      {/* Desktop Layout - Using Client Component for animations */}
      <HeroContent />

      {/* Mobile Layout - Content only */}
      <div className="relative flex min-h-[calc(100vh-56px)] flex-col px-4 md:hidden">
        {/* Content - Upper 35% */}
        <div className="flex h-[35vh] items-center pt-4">
          <div className="text-center w-full">
            <h1 className="font-heading text-3xl font-bold leading-tight text-white">
              <span className="text-sharkspace-blue">Flexible Coworking</span> &{' '}
              Managed Offices on Noida Expressway
            </h1>
            <p className="mt-3 text-sm text-white/90">
              Premium hot desks, dedicated desks & private cabins with 24×7 access — now launching in Sector-132.
            </p>
            <a
              href={`tel:${CONTACT.phone}`}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-white text-base transition-colors hover:text-sharkspace-blue"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">{CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA - appears at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-navy/10 bg-white p-3 shadow-lg md:hidden">
        <Button href="#lead-form" className="w-full">
          Book a Free Tour
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
