# MILAN — SRMIST National Cultural Festival

A high-performance, accessible, and responsive web platform for **MILAN**, the flagship national-level cultural festival hosted by **SRM Institute of Science and Technology (SRMIST)**, Kattankulathur, Chennai, organized by the **Directorate of Student Affairs (DSA) Tech Team**.

This project was built for the **DSA Tech Team Technical Interview Assignment**, adhering strictly to modern frontend engineering standards, WCAG AA accessibility, zero-pill metadata discipline, and robust client-side validation.

---

## 🌟 Key Highlights & Art Direction

- **Signature Typographic Hero:** Enormous, edge-to-edge sculptural display typography spelling `MILAN` in an iridescent multi-spectral gradient (coral, orange, magenta, violet, electric blue, and cyan) floating behind foreground navigation and campaign introductions.
- **Strict 3-Zone Navigation Contract:** Single-line brand wordmark, clear text navigation with animated gradient underlines, and a single high-intent primary CTA (`Register Demo`), accompanied by an accessible mobile slideout drawer.
- **Functional Event Discovery Engine:** Live keyword search across title, tagline, descriptions, categories, and campus venues, coupled with multi-discipline category filters (`Dance`, `Music`, `Drama`, `Fashion`, `Technical`).
- **Deep Event Detail Modals:** Fully accessible dialogs (`role="dialog"`, `aria-modal="true"`, focus trapping, Escape key support) providing event schedules, team limits, technical duration, venue context, and regulations.
- **Client-Side Registration Flow:** Demo registration modal with field validation (required inputs, email syntax regex, minimum lengths), clear error messaging, and a verifiable demo pass receipt with generated token.
- **Anti-Slop Discipline:** Zero static pill capsules around metadata, no decorative pulsing status dots, no fake telemetry, no generic purple templates, and clean unboxed typographic separators (`·`).

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** *Cinzel* (sculptural classical display), *Playfair Display* (editorial serif), *Plus Jakarta Sans* (modern interface sans)
- **Asset Strategy:** Locally generated, high-resolution festival photography with resilient CSS fallback containers (`onError` handling) ensuring zero broken images.

### Project Structure

```
├── index.html                   # HTML entry point with SEO metadata and Google Fonts
├── metadata.json                # AI Studio application metadata
├── package.json                 # Project dependencies and npm scripts
├── src/
│   ├── assets/images/           # High-resolution festival category visual assets
│   ├── components/
│   │   ├── Navbar.tsx           # Floating 3-zone navigation bar & mobile menu
│   │   ├── Hero.tsx             # Signature oversized sculptural MILAN hero
│   │   ├── AboutSection.tsx     # Thematic pillars, campus venues, & institutional ethos
│   │   ├── EventExplorer.tsx    # Keyword search, category filters, & empty state
│   │   ├── EventCard.tsx        # Event display card with resilient image fallback
│   │   ├── EventDetailsModal.tsx# Accessible event details and competition regulations
│   │   ├── RegistrationModal.tsx# Form validation, error recovery, & demo pass receipt
│   │   └── Footer.tsx           # Institutional credits and accessibility statement
│   ├── data/
│   │   └── events.ts            # 10 typed sample events across 5 disciplines
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces for events, filters, and forms
│   ├── index.css                # Global styles, gradient meshes, and font definitions
│   ├── App.tsx                  # Main application state orchestration
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
git clone <repository-url>
cd milan-srmist

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

---

## ♿ Accessibility (a11y) & Responsiveness

- **Keyboard Navigation:** Full support for `Tab` order, visible focus rings (`focus-visible:ring-2`), and `Escape` key listeners on all modals and drawers.
- **Screen Reader Support:** Semantic HTML5 landmarks (`<header>`, `<main>`, `<article>`, `<footer>`, `<section>`), appropriate `aria-labelledby`, `aria-modal="true"`, and `role="tablist"` implementations.
- **Fluid Viewport Math:** The gigantic MILAN wordmark utilizes responsive `vw` sizing with `overflow-hidden` constraints, preventing horizontal page overflow on mobile devices while maintaining sculptural impact on ultrawide monitors.
- **Reduced Motion:** Adheres to CSS transition limits and avoids continuous jarring animations.

---

## 📄 License & Attribution

- Hosted by **SRM Institute of Science and Technology, Kattankulathur**.
- Designed and engineered by the **DSA Tech Team**.
- Released under the **Apache-2.0** License.
