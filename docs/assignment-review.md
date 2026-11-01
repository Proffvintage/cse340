# W01 Initial Site Creation — rubric evidence

Source: <https://byui-cse.github.io/cse340-ww-course-v2/week01/assignment.html>. Assessment uses the rubric supplied by the learner. This is verification evidence, not an instructor-issued grade.

| Rubric criterion | Implementation | Verification |
| --- | --- | --- |
| 1. EJS Pages | `src/views/home.ejs`, `organizations.ejs`, `projects.ejs`, `categories.ejs`; four routes and shared navigation; EJS title data on every page | Local HTTP checks pass; live checks pending |
| 2. EJS Partials | Every page includes `partials/header` and `partials/footer`; header renders the HTML title; footer renders the current-year copyright | Local title/partial/copyright checks pass; live checks pending |
| 3. Static Files | `public/css/main.css`; the four official course PNG images and favicon in `public/images`; static middleware directly in `server.js` | Local image and stylesheet delivery checks pass; live checks pending |
| 4. Code Organization and Standards | ESM, camelCase, const, arrow functions, async/await, escaped EJS data; raw output limited to header/footer includes; `.env` ignored | Source inspection, EJS escaping and local Git exclusion checks pass; latest GitHub exclusion check pending |
| 5. Deployment and Professional Style | Shared responsive teal-and-cream design; existing free Render service | Local browser and desktop/mobile visual checks pass; final Render deployment pending |
| 6. Overall Score | All preceding rows must be Complete for the rubric's 100-point completion result | Pending final hosted verification |

## Verification commands

```bash
npm run verify
npm run verify -- https://hate-uchiha-cse340.onrender.com
```

The HTTP checks cover all four pages, exact required content, page titles, shared partials, active navigation, internal anchor targets, CSS, four PNG images, favicon, missing routes and exclusion of private/source files.

Browser verification passed on every page at widths of 320, 390 and 1440 pixels: loaded images, no horizontal overflow, navigation text fitting inside its links, active navigation and text contrast. Keyboard skip-link access and navigation clicks also passed, with no browser JavaScript errors. All four pages were visually inspected on desktop and mobile. Local screenshots are in `docs/evidence/v2/local`.

HTTP checks passed against both the development server and a production-mode `npm start` server. The source scan found no CommonJS, `var`, function declarations or `.then`/`.catch` chains. Unescaped EJS output is limited to the eight shared partial includes. `git check-ignore .env` confirms exclusion and only `.env.sample` is tracked.

## Submission URLs

- GitHub: <https://github.com/Proffvintage/cse340>
- Render: <https://hate-uchiha-cse340.onrender.com>

No Canvas submission has been made.
