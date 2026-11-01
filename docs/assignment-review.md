# W01 Initial Site Creation — rubric evidence

Source: <https://byui-cse.github.io/cse340-ww-course-v2/week01/assignment.html>. Assessment uses the rubric supplied by the learner. This is verification evidence, not an instructor-issued grade.

| Rubric criterion | Implementation | Verification |
| --- | --- | --- |
| 1. EJS Pages | `src/views/home.ejs`, `organizations.ejs`, `projects.ejs`, `categories.ejs`; four routes and shared navigation; EJS title data on every page | Complete: local and live page/content/title/navigation checks pass |
| 2. EJS Partials | Every page includes `partials/header` and `partials/footer`; header renders the HTML title; footer renders the current-year copyright | Complete: local and live partial/copyright checks pass |
| 3. Static Files | `public/css/main.css`; the four official course PNG images and favicon in `public/images`; static middleware directly in `server.js` | Complete: local and live image/stylesheet checks pass |
| 4. Code Organization and Standards | ESM, camelCase, const, arrow functions, async/await, escaped EJS data; raw output limited to header/footer includes; `.env` ignored | Complete: source inspection, escaping and Git checks pass; GitHub recursive tree contains no `.env` |
| 5. Deployment and Professional Style | Shared responsive teal-and-cream design; existing free Render service | Complete: verified Live deployment; browser and desktop/mobile visual checks pass |
| 6. Overall Score | All preceding rows must be Complete for the rubric's 100-point completion result | All five implementation requirements verified Complete; final grading belongs to the instructor |

## Verification commands

```bash
npm run verify
npm run verify -- https://hate-uchiha-cse340.onrender.com
```

The HTTP checks cover all four pages, exact required content, page titles, shared partials, active navigation, internal anchor targets, CSS, four PNG images, favicon, missing routes and exclusion of private/source files.

Browser verification passed on every page at widths of 320, 390 and 1440 pixels: loaded images, no horizontal overflow, navigation text fitting inside its links, active navigation and text contrast. Keyboard skip-link access and navigation clicks also passed, with no browser JavaScript errors. All four pages were visually inspected on desktop and mobile. Local screenshots are in `docs/evidence/v2/local`.

HTTP checks passed against both the development server and a production-mode `npm start` server. The source scan found no CommonJS, `var`, function declarations or `.then`/`.catch` chains. Unescaped EJS output is limited to the eight shared partial includes. `git check-ignore .env` confirms exclusion and only `.env.sample` is tracked.

## Hosted verification

- Tested application commit: `f0aea35aafd729e0d4ec813f795edef98d3ac5ac`.
- Verified Render deployment: `dep-dbjnksnf3r2c73ckl62g`, Live at `2026-11-01T17:45:00.177131Z`.
- Build: `npm install`; startup: `npm start`; Node `22.23.2`; runtime reports production and listens on `0.0.0.0:10000`.
- All live HTTP verification checks passed after this deployment.
- Live Chromium checks passed on all four pages at 320, 390 and 1440 pixels, including keyboard navigation. The eight live screenshots match the visually reviewed local screenshots exactly.
- Evidence: `docs/evidence/v2/deployment.json`, `local-browser-results.json`, `live-browser-results.json`, and `live/` screenshots.

The first deployment reported Live while still serving the previous vehicle site. A restart did not resolve that mismatch. Rebuilding from the same application commit with the build cache cleared produced the verified Service Network pages. Auto-deploy is enabled in Render settings; this deployment was triggered through the Render CLI after no deployment started from the GitHub push.

Later evidence commits only update documentation and verification artifacts; the tested application commit above identifies the code exercised online.

## Submission URLs

- GitHub: <https://github.com/Proffvintage/cse340>
- Render: <https://hate-uchiha-cse340.onrender.com>

No Canvas submission has been made.
