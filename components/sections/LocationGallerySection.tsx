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
    name: 'Noida Expressway',
    fullName: 'Sector 132, Noida Expressway',
    address: 'Logix Technova, Block B, Sector 132, Noida, UP 201304',
    landmark: '5 min from Sector 142 Metro',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0333565677342!2d77.37683682549627!3d28.508644125732683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8826931d419%3A0x3f229bc2b2adfdd8!2sLOGIX%20TECHNOVA%2C%20Block%20B%2C%20Sector%20132%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1764679491627!5m2!1sen!2sin',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=LOGIX+TECHNOVA,+Block+B,+Sector+132,+Noida,+Uttar+Pradesh+201304',
    gallery: [
      { id: 'exp-1', label: 'Private Cabin', image: '/expressway/1000269110.webp', alt: 'Private Cabin Office Space Sector 132 Noida Expressway' },
      { id: 'exp-2', label: 'Hot Desk Area', image: '/expressway/1000269112.webp', alt: 'Hot Desk Coworking Area Noida Expressway Sector 132' },
      { id: 'exp-3', label: 'Lounge', image: '/expressway/1000269114.webp', alt: 'Coworking Lounge Space Sharkspace Noida' },
      { id: 'exp-4', label: 'Meeting Room', image: '/expressway/1000269131.webp', alt: 'Meeting Room Coworking Space Sector 132 Noida' },
      { id: 'exp-5', label: 'Pantry', image: '/expressway/1000269132.webp', alt: 'Pantry Cafeteria Sharkspace Coworking Noida' },
      { id: 'exp-6', label: 'Reception', image: '/expressway/1000269133.webp', alt: 'Reception Desk Sharkspace Coworking Sector 132' },
      { id: 'exp-7', label: 'Conference', image: '/expressway/1000269134.webp', alt: 'Conference Room Sector 132 Noida' },
      { id: 'exp-8', label: 'Shared Space', image: '/expressway/1000269135.webp', alt: 'Shared Workspace Sector 132 Noida' },
    ],
  },
  {
    id: 'sec62',
    name: 'Noida Sector 62',
    fullName: 'Sector 62, Noida',
    address: 'Sector 62, Noida, Uttar Pradesh',
    landmark: 'Near Sector 62 Metro Station',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.452267493095!2d77.36000000000001!3d28.627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456923f011%3A0x95f54be88e71f6a3!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703145600000!5m2!1sen!2sin',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sector+62,+Noida,+Uttar+Pradesh',
    gallery: [
      { id: 'sec62-1', label: 'Workspace', image: '/62/Gemini_Generated_Image_3b9s213b9s213b9s.webp', alt: 'Open Shared Workspace Sector 62 Noida' },
      { id: 'sec62-2', label: 'Conference Room', image: '/62/Gemini_Generated_Image_43uanb43uanb43ua.webp', alt: 'Conference Room Sector 62 Noida' },
      { id: 'sec62-3', label: 'Cabin', image: '/62/Gemini_Generated_Image_cb4197cb4197cb41.webp', alt: 'Private Cabin Sector 62 Noida' },
      { id: 'sec62-4', label: 'Lounge', image: '/62/Gemini_Generated_Image_dnokaldnokaldnok.webp', alt: 'Lounge Area Sector 62 Noida' },
      { id: 'sec62-5', label: 'Hot Desk', image: '/62/Gemini_Generated_Image_j2a5ucj2a5ucj2a5.webp', alt: 'Hot Desk Sector 62 Noida' },
      { id: 'sec62-6', label: 'Pantry', image: '/62/Gemini_Generated_Image_lrg4rglrg4rglrg4.webp', alt: 'Pantry Sector 62 Noida' },
      { id: 'sec62-7', label: 'Reception', image: '/62/Gemini_Generated_Image_3b9s213b9s213b9s.webp', alt: 'Reception Sector 62 Noida' },
      { id: 'sec62-8', label: 'Meeting Room', image: '/62/Gemini_Generated_Image_43uanb43uanb43ua.webp', alt: 'Meeting Room Sector 62 Noida' },
    ],
  },
  {
    id: 'sec63',
    name: 'Noida Sector 63',
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
    name: 'Noida Sector 16',
    fullName: 'Sector 16, Noida',
    address: 'Sector 16, Noida, Uttar Pradesh',
    landmark: 'Near Noida City Centre Metro',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.452267493095!2d77.31500000000001!3d28.580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45b7c5dd40b%3A0x8af553e4e0cc8c1!2sSector%2016%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703145600000!5m2!1sen!2sin',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sector+16,+Noida,+Uttar+Pradesh',
    gallery: [
      { id: 'sec16-1', label: 'Private Cabin', image: '/16/Gemini_Generated_Image_67eg4e67eg4e67eg.webp', alt: 'Private Cabin Sector 16 Noida' },
      { id: 'sec16-2', label: 'Hot Desk', image: '/16/Gemini_Generated_Image_8af3868af3868af3.webp', alt: 'Hot Desk Sector 16 Noida' },
      { id: 'sec16-3', label: 'Conference', image: '/16/Gemini_Generated_Image_hzxek2hzxek2hzxe.webp', alt: 'Conference Room Sector 16 Noida' },
      { id: 'sec16-4', label: 'Lounge', image: '/16/Gemini_Generated_Image_jgpgczjgpgczjgpg.webp', alt: 'Lounge Sector 16 Noida' },
      { id: 'sec16-5', label: 'Reception', image: '/16/Gemini_Generated_Image_ovyc47ovyc47ovyc.webp', alt: 'Reception Sector 16 Noida' },
      { id: 'sec16-6', label: 'Meeting Room', image: '/16/Gemini_Generated_Image_pzd1f1pzd1f1pzd1.webp', alt: 'Meeting Room Sector 16 Noida' },
      { id: 'sec16-7', label: 'Pantry', image: '/16/Gemini_Generated_Image_trr47ltrr47ltrr4.webp', alt: 'Pantry Sector 16 Noida' },
      { id: 'sec16-8', label: 'Workspace', image: '/16/Gemini_Generated_Image_v73056v73056v730.webp', alt: 'Workspace Sector 16 Noida' },
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
    <section id="locations" className="bg-cream py-12 md:py-16">
      {/* Header Section */}
      <div className="px-4 md:px-6 lg:px-8 mb-6 md:mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-navy mb-3">
            Our Locations
          </h2>
          <p className="text-slate-navy/70 text-base md:text-lg">
            Multiple locations across Noida to serve you better
          </p>
        </div>

        {/* Location Tabs */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-3">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocation(location)}
              className={`rounded-full px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-medium transition-all duration-300 ${
                activeLocation.id === location.id
                  ? 'bg-sharkspace-blue text-white shadow-lg scale-105'
                  : 'bg-white text-slate-navy border border-slate-navy/10 hover:bg-slate-navy/5 hover:border-sharkspace-blue/30'
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content - With margins and rounded corners */}
      <m.div
        key={`content-${activeLocation.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Desktop Layout - With side margins */}
        <div className="hidden lg:block px-6 xl:px-10">
          <div className="flex gap-4">
            {/* Map Section - Left side */}
            <div className="w-[28%] flex flex-col overflow-hidden rounded-2xl shadow-lg">
              {/* Map */}
              <div className="relative flex-1 min-h-[400px] rounded-t-2xl overflow-hidden">
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
              {/* Address overlay */}
              <div className="bg-slate-navy text-white p-5 rounded-b-2xl">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-sharkspace-blue" />
                  <div>
                    <p className="font-medium text-sm">{activeLocation.fullName}</p>
                    <p className="text-xs text-white/70 mt-1">{activeLocation.address}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <Button href="#lead-form" size="sm" className="flex-1 text-xs">
                    Book Visit
                  </Button>
                  <a
                    href={activeLocation.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex h-9 items-center justify-center rounded-xl border border-white/30 px-3 text-xs font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Gallery Grid - 4x2 with rounded corners */}
            <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-3">
              {activeLocation.gallery.slice(0, 8).map((item, index) => (
                <m.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md"
                  onClick={() => openLightbox(item.image, item.label)}
                >
                  <div className="relative aspect-[4/3] w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="18vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-3 left-3">
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet & Mobile Layout */}
        <div className="lg:hidden px-4 sm:px-6">
          {/* Map - Full width banner */}
          <div className="relative aspect-[2.5/1] sm:aspect-[3/1] overflow-hidden rounded-2xl mb-3 shadow-lg">
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
          
          {/* Address Bar */}
          <div className="bg-slate-navy text-white p-4 rounded-2xl mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-lg">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 flex-shrink-0 text-sharkspace-blue" />
              <div>
                <p className="font-medium text-sm">{activeLocation.fullName}</p>
                <p className="text-xs text-white/70">{activeLocation.landmark}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button href="#lead-form" size="sm" className="flex-1 sm:flex-none text-xs h-9">
                Book Visit
              </Button>
              <a
                href={activeLocation.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex h-9 items-center justify-center rounded-xl border border-white/30 px-4 text-xs font-medium text-white transition-colors hover:bg-white/10"
              >
                Directions
              </a>
            </div>
          </div>

          {/* Gallery Grid - Tight, no gaps */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {activeLocation.gallery.slice(0, 8).map((item, index) => (
              <m.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md"
                onClick={() => openLightbox(item.image, item.label)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-semibold text-white">{item.label}</p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </m.div>

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
