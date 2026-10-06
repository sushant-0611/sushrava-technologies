# SUSHRAVA Technologies

**Build. Innovate. Echo Beyond.**

SUSHRAVA Technologies delivers modern software solutions, professional websites and innovative college project development with a focus on quality, usability and technology.

This is the complete static website for SUSHRAVA Technologies — built with pure HTML5, CSS3 and vanilla JavaScript, ready for GitHub Pages.

---

## Tech Stack

| Layer      | Technology                        |
| ---------- | --------------------------------- |
| Markup     | HTML5 (semantic, accessible)      |
| Styling    | CSS3 (Grid, Flexbox, animations)  |
| Scripting  | Vanilla JavaScript (no libraries) |
| Hosting    | GitHub Pages                      |

No frameworks, no build step, no backend, no database.

## Project Structure

```text
sushrava-technologies/
│
├── index.html                  # Home
├── why-us.html                 # Why SUSHRAVA
├── features.html               # Development capabilities
├── services.html               # Main services overview
├── websites.html               # Website development detail
├── college-projects.html       # College project development detail
├── demos.html                  # Project demos
├── about.html                  # About the company
├── contact.html                # Contact + enquiry form
├── 404.html                    # Not-found page
│
├── css/
│   └── style.css               # All styles (design tokens, layout, responsive)
│
├── js/
│   └── script.js               # Nav, scroll reveal, form, back-to-top
│
├── assets/
│   ├── logo/
│   │   └── logo.svg            # "The Infinite Echo" brand mark
│   ├── images/                 # (reserved for future photos)
│   ├── icons/                  # (icons are inline SVG in markup)
│   └── projects/
│       ├── complaint-management.svg
│       ├── safehaven-iot.svg
│       ├── careq.svg
│       └── hydroponics.svg
│
└── README.md
```

## Running Locally

The site is fully static — no install, no build.

**Option 1:** Open `index.html` directly in any browser.

**Option 2 (recommended):** Serve it with any static server so relative paths and SVG favicons behave exactly like production:

```bash
npx serve .
# or
python -m http.server 8000
```

Then visit the printed local URL.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `sushrava-technologies`).
2. Push this folder's contents to the repository root:

```bash
git init
git add .
git commit -m "SUSHRAVA Technologies website"
git remote add origin https://github.com/<your-username>/sushrava-technologies.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `(root)` → Save**.
4. Wait a minute, then the site is live at `https://<your-username>.github.io/sushrava-technologies/`.

Because every path is relative (`./css/style.css`, `./js/script.js`, `./assets/...`), the site works from any subpath without configuration.

**One post-deploy step:** `og:image` in each page's `<head>` is currently the relative `./assets/logo/logo.svg`. WhatsApp, LinkedIn and Facebook previews require an **absolute** URL, so once the site is live change it to `https://<your-username>.github.io/sushrava-technologies/assets/logo/logo.svg` (a 1200×630 PNG works best for link previews).

## Contact Form

The site is backend-free, so the enquiry form on `contact.html` uses a **mailto:** flow: after client-side validation it opens the visitor's email app with a pre-filled message addressed to `sushrava.technologies@gmail.com`. To collect submissions without a mail client, point the form at a static-form service (e.g. Formspree) later by swapping the `action`/`fetch` in `js/script.js` — no markup changes needed.

## Contact Channels & Social Links

Every page carries the same footer contact block plus a floating WhatsApp button (bottom-right, above *Back to top*).

| Channel   | Value                                             |
| --------- | ------------------------------------------------- |
| Phone     | [+91 9021496257](tel:+919021496257)               |
| WhatsApp  | `https://wa.me/919021496257` (pre-filled message) |
| Email     | `sushrava.technologies@gmail.com`                 |
| GitHub    | https://github.com/sushant-0611                   |
| LinkedIn  | https://www.linkedin.com/in/sushant-kakade        |
| Instagram | [@sushrava.technologies](https://www.instagram.com/sushrava.technologies) |

All external links open in a new tab with `rel="noopener noreferrer"` and carry an `aria-label`. To change the WhatsApp greeting, edit the `?text=` query in the `wa.me` URLs (footer + floating button on each page, and the WhatsApp row on `contact.html`).

## Brand

- **Wordmark:** SUSHRAVA (Lucida Handwriting, Deep Navy `#0B1F3A`) · TECHNOLOGIES (Montserrat Medium, Slate `#475569`)
- **Palette:** Deep Navy `#0B1F3A` · Electric Cyan `#00B8D9` · White `#FFFFFF` · Slate Gray `#475569`
- **Concept:** *The Infinite Echo* — a central pulse rippling outward without end.

## Accessibility & Performance Notes

- Semantic landmarks, single `h1` per page, labelled form fields, `aria-current` navigation state, visible focus styles.
- `prefers-reduced-motion` disables the ripple/reveal animations.
- All icons and artwork are inline/file SVG — zero image-weight, zero icon-library dependencies.
- No console errors; JavaScript is one small deferred file.

---

© 2026 SUSHRAVA Technologies. All Rights Reserved.
