# W01 verification evidence

Date: 2026-11-01.

## Local

- Simple Express exercise: PASS; GET `/` returns 200 and `Welcome home!`; missing route returns 404, port 3000.
- Development command: PASS; `pnpm run dev` starts nodemon and serves localhost:5500.
- Frozen dependency installation: PASS; `pnpm install --frozen-lockfile` succeeds.
- EJS/static HTTP checks: PASS; `pnpm verify` passes all seven checks on localhost:5500.
- Production start: PASS; `NODE_ENV=production PORT=10000 HOST=0.0.0.0 pnpm start` honors the supplied port and binding; all seven checks pass using `pnpm verify -- http://localhost:10000`.
- Git exclusion: PASS; `.env` and `node_modules` are ignored.
- VS Code course extensions: installed and confirmed with `code --list-extensions` (Prettier, EJS, File Utils, SQLTools, PostgreSQL driver, JavaScript snippets).
- Browser review: pending.

## Hosted

- GitHub repository URL: https://github.com/Proffvintage/cse340; initial implementation pushed to `main`.
- Render web service URL: pending.
- Render database status and region: pending.
- Deployed commit: pending.
- Post-deployment HTTP checks: pending.
- Post-deployment browser review: pending.

Question 1 is not yet complete.

## Seven HTTP checks

1. Home returns HTML (200) with the title, Hate-Uchiha heading, layout, header/navigation/footer, current year, and no unrendered EJS tags.
2. `/css/styles.css` returns nonempty CSS (200).
3. `/js/script.js` returns JavaScript (200).
4. `/images/site/favicon-32x32.png` returns nonempty PNG (200).
5. `/missing-w01-page` returns 404.
6. `/.env` returns 404.
7. `/server.js` returns 404.

These checks validate application responses. They do not establish Render deployment, database connectivity, or visual correctness in a browser.
