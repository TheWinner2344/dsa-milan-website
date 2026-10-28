# MILAN — SRMIST National Cultural Festival

A high-performance, accessible, and responsive web platform for **MILAN**, the flagship national-level cultural festival hosted by **SRM Institute of Science and Technology (SRMIST)**, Kattankulathur, Chennai, organized by the **Directorate of Student Affairs (DSA) Tech Team**.

This project was built for the **DSA Tech Team Technical Interview Assignment**, adhering strictly to modern frontend engineering standards, WCAG AA accessibility, zero-pill metadata discipline, and robust client-side validation.

---

## 🌟 Key Highlights & Art Direction

- **Monumental Classical Wordmark:** Enormous classical display typography spelling `MILAN` (`Bodoni Moda` / `DM Serif Display`) rendered with warm sunset-vermilion-gold gradient and sculpted lighting, intertwined with dynamic 3D cultural silk elements.
- **Giant Live Countdown:** Real-time countdown to festival commencement on **18 February 2027 at 09:00:00 IST (Asia/Kolkata)**, dynamically updating every second with prominent editorial days, hours, minutes, and seconds. Handles start/pass states cleanly with unmount interval cleanup.
- **Consistent Section Hierarchy:** Unified navigation and page flow:
  1. `Home` (`#home`) — Monumental MILAN hero, campaign introduction, and live countdown
  2. `About MILAN` (`#about`) — Institutional heritage, curatorial ethos, and 5 creative pillars
  3. `Events` (`#events`) — Category quick-selectors and floating search surface
  4. `Venue & Campus` (`#campus`) — Dr. T.P. Ganesan Auditorium, Open Air Amphitheatre, Mini Auditoriums, and Tech Park
- **Floating Search & Category Quick-Bar:** Circular category selectors (`Dance`, `Music`, `Drama`, `Fashion`, `Technical`) alongside a floating search bar with restrained warm glow, immediate keyword updates, and filter reset controls.
- **Cinema-Ratio Event Cards:** High-resolution festival imagery with category indicator dots (`● DANCE`), classical serif titles, unified dates (**February 18 – 21, 2027**), venues, and detail triggers.
- **Accessible Detail Modals & Regulations:** Full dialog support with focus trapping, Escape-key dismiss, full descriptions, and stage regulation checklists.
- **Honest Demo Registration Flow:** Client-side interest submission with strict validation (Full Name, Email format, selected event, institution, and terms acknowledgment), generating a local demo token receipt. **No personal data is sent to external servers or persisted in a database.**

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables
- **Motion:** [Motion for React](https://motion.dev/docs/react-animation) (`motion/react`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** *Bodoni Moda*, *DM Serif Display*, *Cormorant Garamond*, *Plus Jakarta Sans*
- **Asset Strategy:** High-resolution festival category photography with resilient CSS fallback containers (`onError` handling) ensuring zero broken images.

### Project Structure

```
├── index.html                   # HTML entry point with SEO metadata and Google Fonts
├── metadata.json                # AI Studio application metadata
├── package.json                 # Project dependencies and npm scripts
├── src/
│   ├── assets/images/           # High-resolution festival category visual assets
│   ├── components/
│   │   ├── Navbar.tsx           # Floating 3-zone navigation bar & mobile menu
│   │   ├── Hero.tsx             # Signature monumental classical MILAN hero
│   │   ├── Countdown.tsx        # Dynamic Asia/Kolkata countdown to Feb 18, 2027
│   │   ├── AboutSection.tsx     # Thematic pillars, curatorial ethos, & institutional history
│   │   ├── EventExplorer.tsx    # Circular category selector & floating search surface
│   │   ├── EventCard.tsx        # Event display card with category dots & action links
│   │   ├── CampusSection.tsx    # Kattankulathur stages (Dr. T.P. Ganesan, Amphitheatre, etc.)
│   │   ├── EventDetailsModal.tsx# Accessible event details and competition regulations
│   │   ├── RegistrationModal.tsx# Form validation, error recovery, & demo pass receipt
│   │   └── Footer.tsx           # Institutional credits and accessibility statement
│   ├── data/
│   │   └── events.ts            # 10 typed sample events aligned to Feb 18–21, 2027
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces for events, filters, and forms
│   ├── index.css                # Global CSS variables, gradient meshes, and font definitions
│   ├── App.tsx                  # Main application state orchestration (1-4 section flow)
│   └── main.tsx                 # React DOM root mounting
└── tsconfig.json                # TypeScript strict configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/TheWinner2344/dsa-milan-website.git
cd dsa-milan-website

# Install dependencies
npm install

# Start local development server (runs on port 3000)
npm run dev

# Run TypeScript type check
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🔒 Security Practices & Audit

Security was reviewed according to the assignment requirements:

1. **No External Attack Surface:** The app runs entirely in client-side memory without exposing unnecessary backend endpoints or database credentials.
2. **Zero Hardcoded Secrets:** No API keys, credentials, or secrets are bundled in the client code or `VITE_` variables.
3. **Safe Rendering:** All user input (form fields, search queries) is escaped through standard React JSX string rendering. No `dangerouslySetInnerHTML`, `eval()`, or unvetted DOM manipulation is utilized.
4. **Rel Protection:** External links strictly use `rel="noopener noreferrer"` and `target="_blank"` where applicable.
5. **Clear Demo Boundary:** The registration form explicitly informs users that it is a client-side demonstration, does not collect sensitive credentials (passwords, phone numbers, government IDs), and does not transmit data across the network.
6. **Vulnerability Audit:** `npm audit --omit=dev` verified with 0 vulnerabilities across all production packages.

---

## ♿ Accessibility (a11y) & Responsiveness

- **Keyboard Navigation:** Full support for `Tab` order, visible gold focus rings (`focus-ring-gold`), and `Escape` key listeners on all modals and drawers.
- **Screen Reader Support:** Semantic HTML5 landmarks (`<header>`, `<main>`, `<article>`, `<footer>`, `<section>`), appropriate `aria-labelledby`, `aria-modal="true"`, and `role="tablist"` implementations.
- **Fluid Viewport Math:** The gigantic MILAN wordmark utilizes responsive `vw` sizing with `overflow-hidden` constraints, preventing horizontal page overflow on mobile devices while maintaining sculptural impact on ultrawide monitors.
- **Reduced Motion:** Adheres to CSS transition limits and disables animations for users with `prefers-reduced-motion: reduce`.
