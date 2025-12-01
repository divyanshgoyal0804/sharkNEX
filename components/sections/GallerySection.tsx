'use client';

import Image from 'next/image';
import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <m.div
      ref={ref}
      style={{ y }}
      variants={fadeInUp}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-navy/10 bg-white shadow-soft"
    >
      {/* Image Container */}
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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

        {/* Desktop Masonry Grid */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="hidden gap-4 md:grid md:grid-cols-3 lg:grid-cols-4"
        >
          {/* Row 1 */}
          <div className="md:col-span-2 lg:col-span-2">
            <GalleryImage id="img-cabin" label="Private Cabin" image="/pvtcabin.jpg" />
          </div>
          <div className="md:col-span-1">
            <GalleryImage id="img-hotdesk" label="Hot Desk Area" image="/shared1.jpg" />
          </div>
          <div className="hidden lg:block lg:col-span-1">
            <GalleryImage id="img-lounge" label="Lounge" image="/lounge.jpeg" />
          </div>

          {/* Row 2 */}
          <div className="md:col-span-1">
            <GalleryImage id="img-meetingroom" label="Meeting Room" image="/confroom1.jpg" />
          </div>
          <div className="md:col-span-1">
            <GalleryImage id="img-pantry" label="Pantry" image="/Canteen.jpg" />
          </div>
          <div className="md:col-span-1 lg:col-span-2">
            <GalleryImage id="img-reception" label="Reception" image="/reception.jpg" />
          </div>

          {/* Row 3 - Hidden on smaller screens */}
          <div className="hidden lg:block lg:col-span-1">
            <GalleryImage id="img-workspace" label="Open Workspace" image="/shared2.JPG" />
          </div>
          <div className="hidden lg:block lg:col-span-1">
            <GalleryImage id="img-confroom" label="Conference Room" image="/conference room1st.png" />
          </div>
        </m.div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="scrollbar-hide -mx-4 flex gap-4 overflow-x-auto px-4 pb-4">
            {galleryItems.map((item) => (
              <m.div
                key={item.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-[280px] flex-shrink-0"
              >
                <div
                  id={`mobile-${item.id}`}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-navy/10 shadow-soft"
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
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-navy/50 to-transparent">
                    <div className="absolute bottom-3 left-3">
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>

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
