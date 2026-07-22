# Revelo Xenith — Agency Website

A production-ready multi-page marketing site built with React + Vite,
Tailwind CSS, Framer Motion, React Router, and Lucide icons.

## Setup

This sandbox has no network access, so dependencies could not be
installed or the build verified here. On your own machine:

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build to /dist
```

## Notes

- `src/assets/logo.svg` is a placeholder wordmark (brand colors applied).
  Swap in the real logo file at that path — it's referenced in both
  Navbar.jsx and Footer.jsx.
- Portfolio and team photos use Unsplash URLs — swap in real client/team
  photography by editing `src/data/portfolio.js` and `src/data/team.js`.
- The contact form (`src/components/ContactForm.jsx`) is front-end only;
  wire `handleSubmit` up to a real API endpoint when one exists.
- No Figma file was provided — layout and spacing decisions were made
  directly from the written brief.
