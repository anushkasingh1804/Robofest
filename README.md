# ROBOFEST®26 — Machine / Organism

Independent frontend assignment (not the official site). React + Vite + Framer Motion + Lucide. Plain CSS (no Tailwind) in `src/index.css`.

## Run (Windows + VS Code)
1. Install Node.js LTS from nodejs.org. 2. Unzip, `File > Open Folder` in VS Code. 3. Terminal (`Ctrl+`` `):
```
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```
## GitHub
```
git init && git add . && git commit -m "ROBOFEST 2026 site"
git branch -M main
git remote add origin https://github.com/<you>/robofest-landing.git
git push -u origin main
```
(Create the empty repo on github.com first. Add `node_modules` and `dist` to `.gitignore`.)
## Vercel
Import the GitHub repo at vercel.com/new. Framework: Vite, build `npm run build`, output `dist`. Deploy.

## Edit content
Everything lives in `src/config/content.js`: registration URL, official URL, socials (empty until verified), events (names illustrative), themes.

## Assets & disclosure
- No photographs. All visuals are original SVG/CSS: mascot (`Mascot.jsx`), event art (`EventArt.jsx`), gear drawing. They are illustrations, not event photography.
- Fonts via Google Fonts: Space Grotesk, Inter, IBM Plex Mono (OFL).
- Packages: react, framer-motion, lucide-react, vite.
- Built with AI assistance (Claude). Review and be ready to explain every file.
- Official page https://robotix.nitrr.ac.in/robofest was NOT fetched; no dates, venue, prizes, fees or events are claimed.

## Manual test checklist
- 320/375/768/1024/1440px: no horizontal scroll, headlines fit.
- Mobile menu opens, links close it, Esc closes it, toggle is keyboard-operable.
- Tab through the page: focus ring always visible.
- "Activate sequence": IDLE → PROCESSING → ACTIVE, parts highlight, Reset works; touch works.
- OS reduced-motion on: no entrance/idle animation, sequence still changes state.
- The Register Now CTA opens the official ROBOTiX Club recruitment Google Form in a new tab. Navbar/footer Register links navigate to the internal registration section.
- Console has no errors; fonts load (fallbacks otherwise).
