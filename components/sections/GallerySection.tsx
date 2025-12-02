'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { ArrowRight } from 'lucide-react';

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

function GalleryImage({
  id,
  label,
  image,
}: {
  id: string;
  label: string;
  image: string;
}) {
  return (
    <m.div
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-2xl border border-slate-navy/10 bg-white shadow-soft transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
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
              className="group relative overflow-hidden rounded-2xl border border-slate-navy/10 shadow-soft transition-transform duration-300 active:scale-[0.98]"
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
    </section>
  );
}
