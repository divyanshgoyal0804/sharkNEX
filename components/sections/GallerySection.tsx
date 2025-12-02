'use client';

import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { ArrowRight, X } from 'lucide-react';

const galleryItems = [
  { id: 'img-cabin', label: 'Private Cabin', image: '/pvtcabin.jpg' },
  { id: 'img-hotdesk', label: 'Hot Desk Area', image: '/shared1.jpg' },
  { id: 'img-lounge', label: 'Lounge', image: '/lounge.jpeg' },
  { id: 'img-meetingroom', label: 'Meeting Room', image: '/confroom1.jpg' },
  { id: 'img-pantry', label: 'Pantry', image: '/Canteen.jpg' },
  { id: 'img-reception', label: 'Reception', image: '/reception.jpg' },
  { id: 'img-workspace', label: 'Open Workspace', image: '/shared2.JPG' },
  { id: 'img-confroom', label: 'Conference Room', image: '/conference room1st.png' },
];

// Lightbox Modal Component
function Lightbox({
  image,
  label,
  onClose,
}: {
  image: string;
  label: string;
  onClose: () => void;
}) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Glass blur background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Image container */}
      <m.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 flex h-[80vh] w-[90vw] max-w-5xl items-center justify-center overflow-hidden rounded-2xl bg-black/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={label}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>
        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-center font-heading text-lg font-semibold text-white">
            {label}
          </p>
        </div>
      </m.div>
    </m.div>
  );
}

function GalleryImage({
  id,
  label,
  image,
  onClick,
}: {
  id: string;
  label: string;
  image: string;
  onClick: () => void;
}) {
  return (
    <m.div
      variants={fadeInUp}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-navy/10 bg-white shadow-soft transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
      onClick={onClick}
    >
      {/* Image Container - Fixed aspect ratio for uniform size */}
      <div
        id={id}
        className="relative aspect-[4/3] w-full overflow-hidden"
        role="img"
        aria-label={label}
      >
        <Image
          src={image}
          alt={label}
          fill
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhQf/aAAwDAQACEQMRAD8AzjxrWL7T9Wlt7WeaO3ZFeRY5CgJI4zgdYq3/AFFf/uf2lKYMlg1k8bkif//Z"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-4 left-4">
          <p className="font-heading text-sm font-semibold text-white">
            {label}
          </p>
        </div>
      </div>
    </m.div>
  );
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; label: string } | null>(null);

  const openLightbox = useCallback((image: string, label: string) => {
    setSelectedImage({ image, label });
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <Container>
        <SectionHeading
          title="See the Space — Designed for Focus & Comfort"
          subtitle="Bright interiors, modern furniture, natural sunlight and cozy breakout zones — created to make work feel effortless."
        />

        {/* Desktop/Tablet Uniform Grid */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="hidden grid-cols-2 gap-4 md:grid lg:grid-cols-3 xl:grid-cols-4"
        >
          {galleryItems.map((item) => (
            <GalleryImage
              key={item.id}
              id={item.id}
              label={item.label}
              image={item.image}
              onClick={() => openLightbox(item.image, item.label)}
            />
          ))}
        </m.div>

        {/* Mobile - Single column stacked layout */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 md:hidden"
        >
          {galleryItems.slice(0, 6).map((item) => (
            <m.div
              key={item.id}
              variants={fadeInUp}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-navy/10 shadow-soft transition-transform duration-300 active:scale-[0.98]"
              onClick={() => openLightbox(item.image, item.label)}
            >
              <div
                id={`mobile-${item.id}`}
                className="relative aspect-[4/3] w-full overflow-hidden"
                role="img"
                aria-label={item.label}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhQf/aAAwDAQACEQMRAD8AzjxrWL7T9Wlt7WeaO3ZFeRY5CgJI4zgdYq3/AFFf/uf2lKYMlg1k8bkif//Z"
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-navy/60 to-transparent">
                <div className="absolute bottom-3 left-3">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>

        {/* CTA */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-lg text-slate-navy/70">
            Like what you see? Tours open for pre-booking —{' '}
            <span className="font-semibold text-slate-navy">
              limited cabins available.
            </span>
          </p>
          <Button href="#lead-form" size="lg">
            Book a Free Tour
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </m.div>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage.image}
            label={selectedImage.label}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
