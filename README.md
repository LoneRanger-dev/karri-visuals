# Karri Visuals — 3D Cinematic Website

> **Creative Media & Film Production** · Hyderabad

A premium, 3D-cinematic marketing website built with Next.js 16, React Three Fiber, Framer Motion, and Tailwind CSS v4.

---

## Quick Start

```bash
# 1. Install dependencies (already done if you ran the build script)
npm install

# 2. Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## Production Build & Deploy

```bash
npm run build   # compile + type-check
npm run start   # serve production build locally
```

**Deploy to Vercel**: Push this folder to a GitHub repo, connect it in [vercel.com](https://vercel.com), and click Deploy. Zero config needed.

---

## Where to Add Real Content

### 1. Hero showreel video
- Drop your MP4 into `public/video/showreel.mp4`
- The Hero component auto-plays it muted in the background

### 2. Portfolio videos & thumbnails
- Edit `src/lib/data.ts` → the `portfolio` array
- Set `videoUrl` to your real MP4 paths (or a CDN URL like Cloudflare R2/Mux)
- Set `thumbnail` to the poster image path under `public/img/`

### 3. Real portfolio images
- Add `public/img/placeholder-thumb-1.jpg` through `...-6.jpg` with real stills
- Or update the `thumbnail` strings in `src/lib/data.ts` to full URLs

### 4. Logo
- Replace the "KV" text badge in `Navbar.tsx` and `Footer.tsx` with your real SVG/PNG
- Put the SVG in `public/img/logo.svg`
- For the 3D hero logo, place a `.glb` model in `public/models/kv-logo.glb` and update
  `src/components/three/KVLogo3D.tsx` to use `useGLTF("/models/kv-logo.glb")`

### 5. Stats (project count, clients, awards, years)
- `src/lib/data.ts` → `stats` array

### 6. Testimonials
- `src/lib/data.ts` → `testimonials` array
- Replace `avatar` paths with real photos in `public/img/`

### 7. Contact form endpoint
- `src/components/sections/Contact.tsx` → `onSubmit()` function
- Wire it to Resend, Formspree, or create `src/app/api/contact/route.ts`

### 8. Google Maps embed
- Search for the address in Google Maps → Share → Embed
- Replace the placeholder `<div>` in `Contact.tsx` with the `<iframe>` code

### 9. Social links
- `src/components/layout/Footer.tsx` and `src/components/sections/Contact.tsx`
- Update the `href` values in the `socials` arrays with real handles

---

## Folder Structure

```
karri-visuals/
├── public/
│   ├── models/          ← .glb 3D models (kv-logo.glb)
│   ├── video/           ← showreel.mp4, portfolio clips
│   ├── img/             ← posters, thumbnails, avatars
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx   ← fonts, Lenis, metadata
│   │   ├── page.tsx     ← composes all 12 sections
│   │   └── globals.css  ← Tailwind v4 @theme brand tokens
│   ├── components/
│   │   ├── layout/      ← Navbar, Footer, LenisProvider
│   │   ├── sections/    ← Hero, Intro, Services, Showreel, Process,
│   │   │                   Stats, About, Testimonials, CTABand, Contact
│   │   ├── three/       ← Scene, KVLogo3D, Particles, LightSweep
│   │   └── ui/          ← GlassCard, ClayButton, NeoInput, TiltCard,
│   │                       Lightbox, SocialIcons
│   ├── lib/
│   │   ├── data.ts      ← ALL seed content (services, portfolio, etc.)
│   │   └── hooks.ts     ← useReducedMotion, useCountUp, useInView
│   └── types/
│       └── index.ts     ← TypeScript interfaces
```

---

## Brand Tokens (Tailwind v4 `@theme`)

| Token | Value | Usage |
|---|---|---|
| `navy` | `#0B1A2F` | Primary background |
| `navy-deep` | `#0A0A0A` | Darkest bg / overlays |
| `gold` | `#C9A24B` | Primary accent / headings |
| `gold-light` | `#F4D27A` | Gradient end |
| `teal` | `#1FA8B8` | Secondary accent |
| `cream` | `#F4EFE6` | Body text |

CSS utilities: `gradient-gold`, `gradient-teal`, `gradient-gold-text`, `gradient-teal-text`, `.glass`, `.neo`, `.clay`

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Styling | Tailwind CSS v4 (PostCSS) |
| 3D | Three.js + @react-three/fiber + @react-three/drei |
| Post FX | @react-three/postprocessing (bloom, vignette, chromatic aberration) |
| Animation | Framer Motion + GSAP-ready (ScrollTrigger hook in lib/hooks.ts) |
| Smooth scroll | Lenis |
| Forms | React Hook Form + Zod |
| Icons | Lucide React + custom SVG social icons |
