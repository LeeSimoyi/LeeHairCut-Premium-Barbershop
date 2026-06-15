# LeeHairCut — Premium Luxury Barber Shop Website

A complete, production-ready multi-page website for **LeeHairCut**, a premium luxury barber shop based in Mutare, Zimbabwe.

---

## Project Overview

LeeHairCut is a fully responsive, dark-luxury themed multi-page website built with pure HTML5, CSS3 and vanilla JavaScript. No frameworks or build tools required — open any HTML file in a browser and it works immediately.

---

## Pages Included

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Full homepage with hero slider, services, team, pricing, testimonials, FAQ, CTA |
| About | `pages/about.html` | Company story, timeline, mission/vision, values, awards, team intro |
| Services | `pages/services.html` | All services with full details, benefits, pricing and booking CTAs |
| Gallery | `pages/gallery.html` | Masonry gallery with category filters and lightbox |
| Team | `pages/team.html` | Full team profiles with stats, skills and social links |
| Pricing | `pages/pricing.html` | Individual services, packages, memberships and comparison table |
| Booking | `pages/booking.html` | 4-step booking wizard — service, barber, date/time, details |
| Testimonials | `pages/testimonials.html` | Masonry reviews with rating summary and review submission form |
| FAQ | `pages/faq.html` | Searchable, filterable accordion FAQ |
| Blog | `pages/blog.html` | Blog listing with sidebar, categories, search and pagination |
| Blog Post | `pages/blog-post.html` | Full article with author, table of contents, share buttons and related posts |
| Contact | `pages/contact.html` | Contact form, business hours, social links and embedded map |
| Privacy Policy | `pages/privacy.html` | Full privacy policy |
| Terms | `pages/terms.html` | Full terms and conditions |
| 404 | `404.html` | Custom not found page |

---

## File Structure

```
leehaircut/
├── index.html              # Homepage
├── 404.html                # Not found page
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
├── css/
│   ├── shared.css          # Global styles, navbar, footer, buttons, animations
│   ├── home.css            # Homepage-specific styles
│   └── pages.css           # Shared inner page styles
├── js/
│   ├── shared.js           # Global JS — navbar, animations, booking modal, FAQ, slider
│   └── home.js             # Homepage hero slider
└── pages/
    ├── about.html
    ├── services.html
    ├── gallery.html
    ├── team.html
    ├── pricing.html
    ├── booking.html
    ├── testimonials.html
    ├── faq.html
    ├── blog.html
    ├── blog-post.html
    ├── contact.html
    ├── privacy.html
    └── terms.html
```

---

## Features

### Design
- Dark luxury theme — black (#0a0a0a), dark grey (#111111), red accent (#b30000 / #ff2b2b)
- Glassmorphism panels with backdrop blur
- Premium shadows and gradient effects
- Poppins + Inter typography
- Animated gradient borders and glow effects
- Fully responsive — mobile, tablet, desktop, foldables

### Navigation
- Fixed sticky navbar with scroll blur effect
- Mobile hamburger menu with slide-in drawer
- Active page highlighting
- Back-to-top button
- Smooth scroll behaviour

### Homepage
- Auto-sliding hero with 3 background images and dot navigation
- Trust strip with icons
- About preview section with experience badge
- 6-card services grid with hover overlays
- Why Choose Us — 6 cards with animated icon borders
- Animated statistics counters
- Masonry-style gallery preview
- 4-column team cards with social overlay
- 3-tier pricing with popular badge
- Auto-sliding testimonials with touch swipe support
- Split-layout FAQ accordion
- CTA section with background image
- Google Maps embed
- Full footer with 4 columns

### Booking System (pages/booking.html)
- 4-step wizard: Service selection → Barber selection → Date/time picker → Details
- Visual step indicator with completed/active states
- Service cards with name, duration and price
- Barber cards with photos
- Time slot grid with unavailable slots marked
- Appointment summary before confirmation
- Success screen after submission

### Gallery (pages/gallery.html)
- CSS columns masonry layout
- 5 category filters (All, Haircuts, Beard, Interior, Tools, Clients)
- Lightbox with prev/next navigation and keyboard support
- Lazy loaded images

### Pricing (pages/pricing.html)
- Tab-based navigation: Individual / Packages / Memberships / Compare
- 10 individual services with duration
- 3 package tiers (Standard, Premium, Luxury)
- 3 membership plans (Silver, Gold, Platinum)
- Feature comparison table with checkmarks

### FAQ (pages/faq.html)
- Live search filtering
- Category filter buttons (Booking, Services, Pricing, Membership, General)
- Smooth accordion open/close animation
- No-results message

### Blog (pages/blog.html + blog-post.html)
- Featured post card spanning full width
- Sidebar with search, categories, recent posts and tag cloud
- Full blog post with table of contents, author card, share buttons
- Related posts grid

### Testimonials (pages/testimonials.html)
- Rating summary with star distribution bars
- Masonry review cards with service tags
- Star-picker review submission form

### Animations
- Intersection Observer scroll reveal (fade-up, fade-left, fade-right, scale-in)
- Stagger delay classes (.delay-1 through .delay-6)
- Counter animation for statistics
- Hero image crossfade transition
- Card hover effects (lift, glow, border reveal)
- Icon rotation and scale on hover

---

## Business Information

- **Business Name:** LeeHairCut
- **Location:** Mutare, Manicaland, Zimbabwe
- **Phone / WhatsApp:** +263 78088 6795
- **Email:** hello@leehaircut.com
- **Hours:** Mon–Fri 08:00–19:00 | Sat 08:00–18:00 | Sun 09:00–15:00

---

## Customisation Guide

### Changing Business Details
Search and replace the following across all files:
- `+263 78088 6795` → your phone number
- `hello@leehaircut.com` → your email
- `Mutare, Manicaland, Zimbabwe` → your address
- `263780886795` in WhatsApp links → your WhatsApp number (digits only)

### Changing Colours
Edit CSS variables in `css/shared.css`:
```css
:root {
  --red: #b30000;
  --red-bright: #ff2b2b;
  --black: #0a0a0a;
  --dark: #111111;
}
```

### Changing Images
Replace Unsplash URLs with your own image paths. All images use the pattern:
```
https://images.unsplash.com/photo-XXXXXXXX?w=800&q=80
```
Replace with local paths like `../imgs/your-image.jpg` for production use.

### Updating Prices
Prices appear in:
- `pages/services.html` — individual service rows
- `pages/pricing.html` — full pricing page
- `pages/booking.html` — service selector cards
- `index.html` — pricing preview section

---

## Deployment

### Static Hosting (Recommended)
This is a pure static website. Deploy to any of these platforms for free:

**Netlify (Recommended)**
1. Drag the entire `leehaircut/` folder to netlify.com/drop
2. Your site is live instantly with a free HTTPS URL
3. Connect a custom domain in Netlify settings

**Vercel**
1. Push the folder to a GitHub repository
2. Import the repository at vercel.com
3. Set root directory and deploy

**GitHub Pages**
1. Push to a GitHub repository
2. Enable Pages under repository Settings → Pages
3. Set source to main branch

### Custom Domain
Update the following after connecting your domain:
- `sitemap.xml` — replace `leehaircut.com` with your domain
- `robots.txt` — update sitemap URL
- All `og:url` meta tags in page `<head>` sections

---

## Browser Support
- Chrome 80+ ✓
- Firefox 75+ ✓
- Safari 13+ ✓
- Edge 80+ ✓
- Mobile Safari iOS 13+ ✓
- Chrome Android ✓

---

## Performance Notes
- All images use lazy loading (`loading="lazy"`)
- Fonts loaded via Google Fonts with display=swap
- CSS animations use transform and opacity only (GPU accelerated)
- Intersection Observer used instead of scroll listeners for animations
- No jQuery or heavy libraries — pure vanilla JS

---

## Credits
- **Design & Development:** LeeHairCut Project
- **Photography:** Unsplash.com (free to use under Unsplash License)
- **Icons:** Font Awesome 6.5
- **Fonts:** Google Fonts — Poppins, Inter

---

&copy; 2026 LeeHairCut. All rights reserved.
