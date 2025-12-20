'use client';

import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { MapPin, X } from 'lucide-react';

// Location data with map embeds and gallery images
const locations = [
  {
    id: 'expressway',
    name: 'Expressway',
    fullName: 'Sector 132, Noida Expressway',
    address: 'Logix Technova, Block B, Sector 132, Noida, UP 201304',
    landmark: '5 min from Sector 142 Metro',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0333565677342!2d77.37683682549627!3d28.508644125732683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8826931d419%3A0x3f229bc2b2adfdd8!2sLOGIX%20TECHNOVA%2C%20Block%20B%2C%20Sector%20132%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1764679491627!5m2!1sen!2sin',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=LOGIX+TECHNOVA,+Block+B,+Sector+132,+Noida,+Uttar+Pradesh+201304',
    gallery: [
      { id: 'exp-cabin', label: 'Private Cabin', image: '/pvtcabin.webp', alt: 'Private Cabin Office Space Sector 132 Noida Expressway' },
      { id: 'exp-hotdesk', label: 'Hot Desk Area', image: '/shared1.webp', alt: 'Hot Desk Coworking Area Noida Expressway Sector 132' },
      { id: 'exp-lounge', label: 'Lounge', image: '/lounge.webp', alt: 'Coworking Lounge Space Sharkspace Noida' },
      { id: 'exp-meeting', label: 'Meeting Room', image: '/confroom1.webp', alt: 'Meeting Room Coworking Space Sector 132 Noida' },
      { id: 'exp-pantry', label: 'Pantry', image: '/Canteen.webp', alt: 'Pantry Cafeteria Sharkspace Coworking Noida' },
      { id: 'exp-reception', label: 'Reception', image: '/reception.webp', alt: 'Reception Desk Sharkspace Coworking Sector 132' },
      { id: 'exp-conf', label: 'Conference', image: '/conference room1st.webp', alt: 'Conference Room Sector 132 Noida' },
      { id: 'exp-shared', label: 'Shared Space', image: '/shared2.webp', alt: 'Shared Workspace Sector 132 Noida' },
    ],
  },
  {
    id: 'sec62',
    name: 'Sec 62',
    fullName: 'Sector 62, Noida',
    address: 'Sector 62, Noida, Uttar Pradesh',
    landmark: 'Near Sector 62 Metro Station',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.452267493095!2d77.36000000000001!3d28.627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456923f011%3A0x95f54be88e71f6a3!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703145600000!5m2!1sen!2sin',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sector+62,+Noida,+Uttar+Pradesh',
    gallery: [
      { id: 'sec62-1', label: 'Workspace', image: '/shared2.webp', alt: 'Open Shared Workspace Sector 62 Noida' },
      { id: 'sec62-2', label: 'Conference Room', image: '/conference room1st.webp', alt: 'Conference Room Sector 62 Noida' },
      { id: 'sec62-3', label: 'Cabin', image: '/pvtcabin.webp', alt: 'Private Cabin Sector 62 Noida' },
      { id: 'sec62-4', label: 'Lounge', image: '/lounge.webp', alt: 'Lounge Area Sector 62 Noida' },
      { id: 'sec62-5', label: 'Hot Desk', image: '/shared1.webp', alt: 'Hot Desk Sector 62 Noida' },
      { id: 'sec62-6', label: 'Pantry', image: '/Canteen.webp', alt: 'Pantry Sector 62 Noida' },
      { id: 'sec62-7', label: 'Reception', image: '/reception.webp', alt: 'Reception Sector 62 Noida' },
      { id: 'sec62-8', label: 'Meeting Room', image: '/confroom1.webp', alt: 'Meeting Room Sector 62 Noida' },
    ],
  },
  {
    id: 'sec63',
    name: 'Sec 63',
    fullName: 'Sector 63, Noida',
    address: 'Sector 63, Noida, Uttar Pradesh',
    landmark: 'Near Sector 63 Metro Station',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.452267493095!2d77.37500000000001!3d28.627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e775eeec19%3A0x3ab4a9e4f9db6b29!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703145600000!5m2!1sen!2sin',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sector+63,+Noida,+Uttar+Pradesh',
    gallery: [
      { id: 'sec63-1', label: 'Open Workspace', image: '/shared1.webp', alt: 'Open Workspace Sector 63 Noida' },
      { id: 'sec63-2', label: 'Meeting Room', image: '/confroom1.webp', alt: 'Meeting Room Sector 63 Noida' },
      { id: 'sec63-3', label: 'Pantry', image: '/Canteen.webp', alt: 'Pantry Sector 63 Noida' },
      { id: 'sec63-4', label: 'Reception', image: '/reception.webp', alt: 'Reception Sector 63 Noida' },
      { id: 'sec63-5', label: 'Private Cabin', image: '/pvtcabin.webp', alt: 'Private Cabin Sector 63 Noida' },
      { id: 'sec63-6', label: 'Conference', image: '/conference room1st.webp', alt: 'Conference Room Sector 63 Noida' },
      { id: 'sec63-7', label: 'Lounge', image: '/lounge.webp', alt: 'Lounge Sector 63 Noida' },
      { id: 'sec63-8', label: 'Shared Desk', image: '/shared2.webp', alt: 'Shared Desk Sector 63 Noida' },
    ],
  },
  {
    id: 'sec16',
    name: 'Sec 16',
    fullName: 'Sector 16, Noida',
    address: 'Sector 16, Noida, Uttar Pradesh',
    landmark: 'Near Noida City Centre Metro',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.452267493095!2d77.31500000000001!3d28.580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45b7c5dd40b%3A0x8af553e4e0cc8c1!2sSector%2016%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703145600000!5m2!1sen!2sin',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sector+16,+Noida,+Uttar+Pradesh',
    gallery: [
      { id: 'sec16-1', label: 'Private Cabin', image: '/pvtcabin.webp', alt: 'Private Cabin Sector 16 Noida' },
      { id: 'sec16-2', label: 'Hot Desk', image: '/shared2.webp', alt: 'Hot Desk Sector 16 Noida' },
      { id: 'sec16-3', label: 'Conference', image: '/conference room1st.webp', alt: 'Conference Room Sector 16 Noida' },
      { id: 'sec16-4', label: 'Lounge', image: '/lounge.webp', alt: 'Lounge Sector 16 Noida' },
      { id: 'sec16-5', label: 'Reception', image: '/reception.webp', alt: 'Reception Sector 16 Noida' },
      { id: 'sec16-6', label: 'Meeting Room', image: '/confroom1.webp', alt: 'Meeting Room Sector 16 Noida' },
      { id: 'sec16-7', label: 'Pantry', image: '/Canteen.webp', alt: 'Pantry Sector 16 Noida' },
      { id: 'sec16-8', label: 'Workspace', image: '/shared1.webp', alt: 'Workspace Sector 16 Noida' },
    ],
  },
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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
      
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-center font-heading text-lg font-semibold text-white">
            {label}
          </p>
        </div>
      </m.div>
    </m.div>
  );
}

export function LocationGallerySection() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [selectedImage, setSelectedImage] = useState<{ image: string; label: string } | null>(null);

  const openLightbox = useCallback((image: string, label: string) => {
    setSelectedImage({ image, label });
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <section id="locations" className="bg-cream py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Our Locations — Find Your Perfect Workspace"
          subtitle="Multiple locations across Noida to serve you better. Choose the one closest to you."
        />

        {/* Location Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocation(location)}
              className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                activeLocation.id === location.id
                  ? 'bg-sharkspace-blue text-white shadow-lg scale-105'
                  : 'bg-white text-slate-navy border border-slate-navy/10 hover:bg-slate-navy/5 hover:border-sharkspace-blue/30'
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>

        {/* Location Name Badge */}
        <m.div
          key={activeLocation.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-sharkspace-blue/10 px-5 py-2.5 text-sharkspace-blue">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">{activeLocation.fullName}</span>
            <span className="text-sharkspace-blue/60">•</span>
            <span className="text-sm text-sharkspace-blue/80">{activeLocation.landmark}</span>
          </div>
        </m.div>

        {/* Main Content - Map Left, Gallery Right */}
        <m.div
          key={`content-${activeLocation.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6 lg:flex-row lg:gap-8 lg:mr-[-300px]"
        >
          {/* Left Side - Map (fixed width, pushed to left) */}
          <div className="flex flex-col gap-4 lg:ml-[-300px] lg:w-[380px] lg:flex-shrink-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-navy/10 bg-white shadow-soft">
              <iframe
                src={activeLocation.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
            
            {/* Address Card */}
            <div className="rounded-xl border border-slate-navy/10 bg-white p-4">
              <p className="text-sm text-slate-navy/80">{activeLocation.address}</p>
              <p className="mt-1 text-xs text-slate-navy/50">📍 {activeLocation.landmark}</p>
              <div className="mt-3 flex flex-col gap-2">
                <Button href="#lead-form" size="sm" className="w-full">
                  Book a Visit
                </Button>
                <a
                  href={activeLocation.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-full items-center justify-center rounded-xl border-2 border-slate-navy/20 px-4 text-sm font-medium text-slate-navy transition-colors hover:border-slate-navy/40 hover:bg-slate-navy/5"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Gallery Grid (takes remaining space) */}
          <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            {activeLocation.gallery.slice(0, 8).map((item, index) => (
              <m.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-slate-navy/10 shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                onClick={() => openLightbox(item.image, item.label)}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-3 left-3">
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
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
