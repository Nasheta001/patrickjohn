# PatrickJohn Writing Services — Angular Website

A fully functional Angular 19 portfolio website for PatrickJohn Writing Services, covering iGaming content and academic writing.

## 🗂 Project Structure

```
patrickjohn/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          # Fixed nav with scroll effect & mobile menu
│   │   │   └── footer/          # 5-column footer with social links
│   │   ├── pages/
│   │   │   ├── home/            # Homepage: hero, features, stats, testimonials
│   │   │   ├── about/           # About: credentials, skills, platforms
│   │   │   ├── services/        # Services: tabbed iGaming + Academic cards
│   │   │   ├── portfolio/       # Portfolio: tabbed project grid + testimonials
│   │   │   └── contact/         # Contact: social icons + direct channels + form
│   │   ├── app.component.ts     # Root with cursor, reveal animations, WA FAB
│   │   ├── app.config.ts        # Angular providers + router config
│   │   └── app.routes.ts        # Lazy-loaded routes for all pages
│   ├── index.html
│   ├── main.ts
│   └── styles.scss              # Global design system (tokens, utils, animations)
├── angular.json
├── package.json
└── tsconfig.json
```

## 🚀 Setup & Run

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm 9+

### Install

```bash
cd patrickjohn
npm install
```

### Run Development Server

```bash
npm start
# or
ng serve
```

Open: http://localhost:4200

### Build for Production

```bash
npm run build
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| `--navy` | `#04091a` — Background |
| `--steel` | `#0d1f3c` — Cards |
| `--gold` | `#c9a84c` — Primary accent |
| `--gold-lt` | `#f0d27a` — Gold highlight |
| `--em` | `#2ecc8b` — Academic accent |
| `--mist` | `rgba(179,207,229,0.72)` — Body text |

Fonts: **Bebas Neue** (headings) + **Outfit** (body) + **Instrument Serif** (testimonials)

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero, features, stats, split CTA, testimonials |
| `/about` | About — Bio, credentials, skills, platforms |
| `/services` | Services — Tabbed iGaming/Academic service cards |
| `/portfolio` | Portfolio — Tabbed project grid, testimonials |
| `/contact` | Contact — Social connect, channels, contact form |

---

## ✨ Features

- ✅ Angular 19 standalone components
- ✅ Lazy-loaded routes for fast page loads
- ✅ Custom gold cursor with ring animation
- ✅ Scroll-reveal animations on all sections
- ✅ Sticky navbar with scroll effect
- ✅ Mobile-responsive hamburger menu
- ✅ Animated background orbs + grid
- ✅ Floating WhatsApp button (always visible)
- ✅ Ticker animation strip
- ✅ Tabbed portfolio (iGaming / Academic)
- ✅ Tabbed services (iGaming / Academic)
- ✅ Contact form with Angular FormsModule
- ✅ Social connect section (WhatsApp, LinkedIn, Twitter, Email)
- ✅ Fully SCSS-powered design system

---

## 📞 Contact Info (Update These)

In `contact.component.ts`:
```ts
href: 'https://wa.me/27717225973'       // WhatsApp number
href: 'mailto:patrickjohn@email.com'    // Email
```

In `app.component.ts`:
```html
href="https://wa.me/27717225973"         // FAB WhatsApp
```

In `footer.component.ts`:
```ts
{ label: 'WA', href: 'https://wa.me/27717225973' }
```
"# patrickjohn" 
