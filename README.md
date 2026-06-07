# ACE VENTURES — Premium Taxi Website

**Tech Stack:** React + Vite + Tailwind CSS + Framer Motion

## 🚀 Local Development

```bash
cd ace-ventures
npm install
npm run dev
```
Visit `http://localhost:5173`

## 📦 Production Build

```bash
npm run build
npm run preview   # preview at http://localhost:4173
```

## ☁️ Deploy to Vercel

```bash
npm install -g vercel
vercel
# Follow prompts → Framework: Vite → Build: npm run build → Output: dist
```

Or connect your GitHub repo at vercel.com → Import Project → auto-deploys on push.

## ☁️ Deploy to Netlify

```bash
npm run build
# Drag & drop the /dist folder to netlify.com/drop
```

Or via CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📁 Project Structure

```
ace-ventures/
├── public/
│   └── logo.jpeg
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── WhyUs.jsx
│   │   │   ├── Fleet.jsx
│   │   │   ├── AirportFares.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── BookingProcess.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── CTAStrip.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/
│   │   │   ├── ScrollReveal.jsx
│   │   │   └── SectionHeader.jsx
│   │   ├── MarqueeBanner.jsx
│   │   ├── Navbar.jsx
│   │   ├── FloatingWhatsApp.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── siteContent.js       ← All content here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## ✏️ Updating Content

All business content is in `src/data/siteContent.js`:
- Brand info, phone, WhatsApp, email
- Fleet vehicles & pricing
- Airport fare tables
- Services, testimonials, FAQs

## 🎨 Colors

| Token   | Hex       | Usage             |
|---------|-----------|-------------------|
| Navy    | `#082544` | Primary / dark bg |
| Cyan    | `#27D8E5` | Accents / hover   |
| Orange  | `#FF7A1A` | CTAs / badges     |
| Yellow  | `#FFC61A` | Prices / accents  |
