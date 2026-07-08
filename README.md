# Karthik — Data Science Engineer Portfolio

A production-ready personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion, plus a small Express backend for the contact form.

## 1. Folder Structure

```
karthik-portfolio/
├── index.html
├── postcss.config.js
├── vite.config.js
├── package.json
├── .env.example
├── public/
│   ├── favicon.svg
│   └── Karthik_DS_Resume.pdf        # served for the "Resume" download buttons
├── src/
│   ├── main.jsx                     # React entry point
│   ├── App.jsx                      # composes all sections + loader
│   ├── index.css                    # Tailwind v4 theme tokens + globals
│   ├── data/
│   │   └── portfolioData.js         # single source of truth: all resume content
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── HeroIllustration.jsx     # SVG illustration (placeholder, see note below)
│       ├── ParticleField.jsx        # floating background particles
│       ├── About.jsx
│       ├── Experience.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── ProjectCard.jsx          # tilt-on-hover project card
│       ├── Achievements.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── Loader.jsx               # initial page loading animation
│       └── Reveal.jsx               # reusable scroll-reveal wrapper
└── server/                          # contact form backend
    ├── index.js
    ├── package.json
    ├── .env.example
    └── messages.json                # created at runtime, gitignored
```

## 2. Component Hierarchy

```
App
├── Loader (shown briefly on first load)
├── Navbar
└── main
    ├── Hero (ParticleField, HeroIllustration)
    ├── About (Reveal, animated counters, staggered lines)
    ├── Experience (timeline of Reveal cards)
    ├── Skills (category cards of animated badges)
    ├── Projects (ProjectCard × N, tilt effect)
    ├── Achievements (Reveal grid)
    └── Contact (form → POST /api/contact)
Footer
```

## 3. Architecture Notes

- **All content lives in `src/data/portfolioData.js`.** To update anything (roles, projects, links, dates), edit that file — no need to touch components.
- **Same background everywhere.** The `.app-bg` class (defined once in `index.css`) is applied at the root `<div>` in `App.jsx`, so the dark crimson gradient from the hero flows continuously through every section and the footer — nothing resets it per-section.
- **Backend is optional for the site to work.** If `VITE_API_URL` isn't reachable, the contact form fails gracefully and shows your email as a fallback.

## 4. Color Palette

| Token | Hex | Use |
|---|---|---|
| `bg-void` | `#0a0304` | Base background |
| `bg-maroon` | `#2a0507` | Gradient mid-tone |
| `crimson` | `#e01021` | Primary accent, buttons |
| `crimson-light` | `#ff4757` | Headlines, hover states |
| `ink-100` | `#f7ecec` | Primary text |
| `ink-300` | `#d9c8c8` | Secondary text |
| `ink-500` | `#a68d8d` | Muted text |

## 5. Typography

- **Display font:** Sora (600–800 weight) — used for names, section titles, headlines.
- **Body font:** Inter (400–600 weight) — used for paragraphs, nav, labels.
- Loaded via Google Fonts in `index.css`; both mapped to `font-display` / `font-body` Tailwind theme tokens.

## 6. Animation Plan

| Effect | Where |
|---|---|
| Fade + slide on load | Hero headline, tagline, buttons |
| Typing animation | Hero role text (react-type-animation) |
| Floating particles | Hero background |
| Floating hero image | HeroIllustration (framer-motion `y` loop) |
| Staggered line reveal (1s interval, opacity 20%→100%) | About section |
| Animated count-up | About stats (Projects/Certifications/Internships/CGPA) |
| Scroll reveal (fade-up/zoom/slide) | Every section, via `<Reveal>` |
| 3D tilt on hover | Project cards |
| Glow on hover | All primary buttons |
| Loading spinner | Initial app mount |

## 7. Important Note on the Hero Illustration

The brief asked to replace the reference character with an illustration based on your own photo. No photo of you was included in this upload (only the resume and the reference screenshot), so `HeroIllustration.jsx` currently ships a generic, non-photorealistic SVG placeholder in the same pose/position as the reference (person + laptop, warm rim light). When you have a photo, generate or commission an illustrated version of it and either:
- drop it in `public/hero-illustration.png` and swap `HeroIllustration.jsx` for an `<img>`/`<image>` tag, or
- ask me to generate one from your photo and I'll wire it in.

## 8. Placeholder Links To Update

In `src/data/portfolioData.js`:
- `personal.linkedin` — add your real LinkedIn URL
- `personal.github` — add your real GitHub profile URL
- `projects[].github` — add each project's real repo URL
- `projects[].demo` — add live demo URLs if/when deployed

## 9. Running Locally

**Frontend**
```bash
npm install
cp .env.example .env      # set VITE_API_URL if backend isn't on localhost:5000
npm run dev
```

**Backend**
```bash
cd server
npm install
cp .env.example .env      # optionally add SMTP creds to actually send emails
npm start
```
Without SMTP configured, submitted messages are still saved to `server/messages.json`.

## 10. Deployment

### Option A — Everything on Vercel (recommended, no separate backend host)

The `api/contact.js` file is a Vercel serverless function, so the whole site — frontend + contact form — deploys as a single Vercel project. The `server/` folder is *not* used in this path; it's kept only for Option B.

1. Push this repo to GitHub.
2. Import the repo in Vercel — it auto-detects Vite via `vercel.json`. No build settings need changing.
3. Leave `VITE_API_URL` unset (or blank) so the form calls the relative `/api/contact` on the same domain.
4. (Optional, to actually send emails instead of just logging submissions) Add these Environment Variables in the Vercel project settings:
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_RECEIVER`
   - Without these, submissions still succeed and are visible in the Vercel function logs — they just aren't emailed anywhere.
5. Deploy. Done — one URL for the whole site.

### Option B — Frontend on Vercel, backend elsewhere

Use this only if you want the full always-on Express server (e.g. for persistent `messages.json` storage) instead of the serverless function.

1. Deploy `server/` to Render/Railway/any Node host (`npm start`), with env vars from `server/.env.example`.
2. Deploy the frontend to Vercel as above, but set `VITE_API_URL` to your backend's deployed URL.
3. On the backend host, set `CLIENT_ORIGIN` to your Vercel domain (for CORS).

## 11. Future Enhancements

- Swap the placeholder hero illustration for one generated from your actual photo.
- Add a blog/notes section for write-ups on your ML projects.
- Add real GitHub repo stats (stars/forks) via the GitHub API.
- Add a dark/light theme toggle (currently dark-only by design).
- Persist contact messages to a real database (Postgres/MongoDB) instead of a JSON file.
