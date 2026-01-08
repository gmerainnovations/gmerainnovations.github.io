# GMEra Innovations - Single Page Website

A modern, responsive single-page website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, professional design matching the GMEra Innovations brand
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Smooth scroll navigation
- 🎭 Interactive testimonials carousel
- 📧 Contact form with validation
- 🎪 Animated hero section

## Sections

1. **Hero** - Eye-catching landing section with CTA
2. **About** - Company values (Mission, Vision, Excellence, Collaboration)
3. **Services** - 6 service offerings in a grid layout
4. **Portfolio** - Showcase of successful projects
5. **Certifications** - Team certifications and achievements
6. **Testimonials** - Client testimonials with carousel
7. **Team** - Team description and photo
8. **Contact** - Contact form and information
9. **Footer** - Company links and social media

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deployment

### GitHub Pages (Automatic)

This repository is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on every push to `main` branch

2. **Your site will be available at:**
   - `https://gmerainnovations.github.io/gmera/`

### Manual Deployment

1. Build the static site:
```bash
npm run build
```

2. The `out` directory contains all static files ready for deployment

3. Deploy the `out` directory to any static hosting service

## Project Structure

```
gmera/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles and animations
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx          # Main page with all sections
│   └── components/
│       ├── Header.tsx         # Navigation header
│       ├── Hero.tsx          # Hero section
│       ├── About.tsx         # About section
│       ├── Services.tsx      # Services section
│       ├── Portfolio.tsx     # Portfolio section
│       ├── Certifications.tsx # Certifications section
│       ├── Testimonials.tsx  # Testimonials carousel
│       ├── Team.tsx          # Team section
│       ├── Contact.tsx       # Contact form and info
│       └── Footer.tsx        # Footer component
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
- `gmera-blue`: Primary dark blue (#1e3a8a)
- `gmera-light-blue`: Accent blue (#3b82f6)

### Content

All content is defined in the component files. Edit the respective component to update:
- Service descriptions
- Portfolio projects
- Testimonials
- Contact information

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## License

Private - GMEra Innovations
