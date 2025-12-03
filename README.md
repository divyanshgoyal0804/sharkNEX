# Sharkspace Coworking - Noida Sector 132 Landing Page

A high-conversion landing page for Sharkspace premium coworking space located on Noida Expressway, Sector 132.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd sharkspace-noida-express

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
sharkspace-noida-express/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page (landing page)
│   └── globals.css        # Global styles & Tailwind
├── components/            # React components
│   ├── ui/               # Design system components
│   ├── sections/         # Page section components
│   ├── layout/           # Layout components
│   └── forms/            # Form components
├── lib/                   # Utility functions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   └── images/           # Image assets
└── ...config files
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```bash
cp .env.local.example .env.local
```

Required variables for production:

- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics 4 ID
- `NEXT_PUBLIC_META_PIXEL_ID` - Facebook/Meta Pixel ID
- `NEXT_PUBLIC_GOOGLE_ADS_ID` - Google Ads Conversion ID
- `NEXT_PUBLIC_SITE_URL` - Site URL for canonical tags

## Development Workflow

### Code Formatting

```bash
# Format all files with Prettier
npm run format
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Design System

### Color Palette

| Color          | Hex       | Usage                    |
| -------------- | --------- | ------------------------ |
| Slate Navy     | `#1A2430` | Primary dark / text      |
| Cream          | `#F7F4EF` | Light background         |
| Sharkspace Blue| `#4F7DF3` | Primary brand color      |
| Saffron        | `#F3A63A` | Accent / highlights      |
| Forest Green   | `#145C48` | Secondary accent         |

### Typography

- **Headings:** SF Pro Display, system-ui, sans-serif
- **Body:** Inter, Manrope, system-ui, sans-serif

### Spacing

Using Tailwind's default spacing scale with custom additions for breathable layouts.

## Deployment

This project is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

For manual deployment:

```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## Contributing

1. Follow the existing code style (Prettier + ESLint)
2. Use TypeScript for all new files
3. Create components in appropriate directories
4. Write meaningful commit messages

## License

Private - All rights reserved by Sharkspace.
