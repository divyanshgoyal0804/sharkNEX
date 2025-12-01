// Sharkspace Constants and Data

export const CONTACT = {
  phone: '+91-9876543210',
  phoneDisplay: '+91-98765 43210',
  email: 'hello@sharkspace.in',
  whatsapp: '919876543210',
  address: 'Sharkspace Coworking, Sector-135, Noida Expressway',
  landmark: '5 min from Sector-142 Metro',
};

export const PRICING_DATA = [
  {
    type: 'Hot Desk',
    price: '₹4,500',
    period: '/ month',
    includes: 'High-speed Wi-Fi, access to common areas & pantry',
    popular: false,
  },
  {
    type: 'Dedicated Desk',
    price: '₹6,500',
    period: '/ month',
    includes: 'Fixed workstation, lockers & premium seating zone',
    popular: true,
  },
  {
    type: 'Private Cabin',
    subtitle: '2–4 Seats',
    price: '₹14,500',
    period: '/ month',
    includes: 'Enclosed cabin, storage, access to meeting rooms',
    popular: false,
  },
  {
    type: 'Custom Team Suite',
    subtitle: '6–35 Seats',
    price: 'Request Pricing',
    period: '',
    includes: 'Tailored layouts, branding, managed office support',
    popular: false,
  },
];

export const AMENITIES = [
  { icon: 'Monitor', text: 'Fully furnished plug-and-play workspace' },
  { icon: 'Users', text: 'Private meeting rooms & phone booths' },
  { icon: 'Shield', text: '24×7 secure access & CCTV' },
  { icon: 'Wifi', text: 'High-speed + dedicated fibre internet' },
  { icon: 'Coffee', text: 'Pantry, tea/coffee & breakout lounge' },
  { icon: 'Mail', text: 'Reception & mail handling' },
  { icon: 'Printer', text: 'Printer & office admin support' },
  { icon: 'Calendar', text: 'Event space & community programs' },
  { icon: 'Car', text: 'Reserved parking & valet options' },
  { icon: 'Heart', text: 'Pet-friendly (select zones)' },
];

export const TESTIMONIALS = [
  {
    quote:
      'Sharkspace helped us cut our office costs by 30% while upgrading the workspace quality. Our team retention improved within 2 months.',
    name: 'Rahul',
    role: 'SaaS Founder',
    rating: 5,
  },
  {
    quote:
      'We scaled from 4 seats to 18 within the same centre without shifting offices. Smoothest managed office experience ever.',
    name: 'Pooja',
    role: 'HR Manager',
    rating: 5,
  },
  {
    quote:
      'Great people, great productivity vibe. It feels like a premium workspace without the corporate stiffness.',
    name: 'Michael',
    role: 'Creative Agency',
    rating: 5,
  },
];

export const FAQS = [
  {
    question: 'Do I get access to meeting rooms with a coworking membership?',
    answer:
      'Yes, Sharkspace Sector-135 provides meeting room access based on your plan. Private cabins include additional hours.',
  },
  {
    question: 'Can I book a meeting room for just a day?',
    answer: 'Yes, day bookings for meeting rooms are available.',
  },
  {
    question: 'Do you provide complimentary tea/coffee?',
    answer: 'Yes — unlimited tea/coffee is available in the pantry.',
  },
  {
    question: 'Are there discounts for long-term commitments?',
    answer:
      'Yes — 10% off for 24-month commitments and special pricing for teams above 20 seats.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes — secure parking is available for members and visitors.',
  },
];

export const VALUE_PROPS = [
  {
    icon: 'CalendarCheck',
    title: 'Flexible monthly plans',
    description: 'No long lock-ins',
  },
  {
    icon: 'Building',
    title: 'Meeting rooms, high-speed internet',
    description: '24×7 secure access',
  },
  {
    icon: 'Users',
    title: 'Vibrant community & events',
    description: 'Networking and growth',
  },
];

export const STATS = [
  { value: 100, suffix: '+', label: 'Founders & Startups' },
  { value: 4.9, suffix: '/5', label: 'Average Rating' },
  { value: 24, suffix: '/7', label: 'Access & Support' },
];
