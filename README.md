# A Love Letter 💛

A cinematic, interactive birthday website — a candlelit "love letter" that
unfolds as she scrolls, ending in a sealed envelope she taps to open.

Built with **React** + **Framer Motion** + **Vite**.

---

## ✨ What's inside

- An animated opening with her name and drifting candlelight
- Scroll-revealed love notes
- A small "our story" timeline
- A photo gallery with hover captions + click-to-enlarge
- **A wax-sealed envelope she taps to open your personal letter** (the centerpiece)
- Floating hearts wherever she taps
- Optional background music
- Fully responsive + respects reduced-motion preferences

---

## 🪄 Make it yours (only two things to do)

### 1. Write your words
Open **`src/config.js`** and change the text — her name, your name, the notes,
the timeline, the photo captions, and your letter. It's all in one file, with
comments showing exactly what each part does. Keep the quotes and commas.

### 2. Add your photos
Drop your own pictures into **`public/photos/`**, keeping the same file names:

| File          | Where it appears            | Best shape   |
|---------------|-----------------------------|--------------|
| `hero.jpg`    | opening background          | wide         |
| `photo-1.jpg` | gallery (large)             | wide         |
| `photo-2.jpg` | gallery                     | tall         |
| `photo-3.jpg` | gallery                     | tall         |
| `photo-4.jpg` | gallery (large)             | wide         |
| `photo-5.jpg` | gallery                     | any          |
| `photo-6.jpg` | gallery                     | any          |

(Optional) add a song at `public/music/song.mp3` and set `music.enabled: true`
in `src/config.js`.

---

## ▶️ Run it on your computer

You need [Node.js](https://nodejs.org) (version 18 or newer). Then in a terminal:

```bash
npm install      # do this once
npm run dev      # starts the site at http://localhost:5173
```

Open the link it prints. Edits to `src/config.js` and photos update live.

To make the final files for the web:

```bash
npm run build    # output goes into the dist/ folder
```

---

## 🚀 Put it online (free)

### Easiest — Vercel or Netlify
1. Push this folder to a GitHub repo (see below).
2. Go to [vercel.com](https://vercel.com) (or [netlify.com](https://netlify.com)),
   sign in with GitHub, and import the repo.
3. It auto-detects Vite. Click deploy. Done — you get a shareable link.

### GitHub Pages
1. In `vite.config.js`, set `base: "/your-repo-name/"`.
2. Run `npm run build`.
3. Enable Pages in your repo settings, serving the `dist` folder
   (or use the `gh-pages` package / a GitHub Action).

---

## ⬆️ Upload to GitHub

Create an empty repo on GitHub, then from this folder:

```bash
git init
git add .
git commit -m "A love letter for her birthday"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

> `node_modules/` and `dist/` are ignored on purpose — that's normal.
> Anyone who clones the repo just runs `npm install`.

---

Made with love. Now go make her smile. 💛
