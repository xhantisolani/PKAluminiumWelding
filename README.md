# PK Aluminium Welding Solutions — React (Vite + Chakra UI)

Bright, modern aluminium welding & fabrication website. Frontend‑only, 7 pages, Chakra UI components, and a quote request form.

## 🚀 Tech
- React 18 + Vite
- Chakra UI (components, theming, light/dark)
- React Router v6
- React Hook Form (quote form)
- Framer Motion (ready to use)
- React Icons

## 📁 Structure
- `src/pages`: Home, About, Services, Portfolio, Contact, FAQ, NotFound
- `src/components/common`: Navbar, Footer, Hero, ServiceCard, ProjectCard
- `src/routes/AppRoutes.jsx`: routes
- `src/theme/theme.js`: Chakra theme

## ▶️ Run locally
```bash
yarn install
yarn dev
```

Open the URL printed in your terminal (usually http://localhost:5173).

## 📦 Build
```bash
yarn build
yarn preview
```

## 📝 Notes
- Contact form is demo‑only (logs to console + toast). Wire it to your backend or a form service (e.g., Formspree, Netlify Forms) to receive submissions.
- Replace demo images with your project photos in `src/assets/images` and update components accordingly.
