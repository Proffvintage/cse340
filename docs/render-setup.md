# Render configuration — v2

Course source: [Deploy your site](https://byui-cse.github.io/cse340-ww-course-v2/week01/prepare-deploy.html).

Existing web service: `hate-uchiha-cse340` (`srv-dbjn2hnb9u1s73eh48cg`). Public URL: <https://hate-uchiha-cse340.onrender.com>.

## Current W02 deployment

The W02 application is deployed at commit `647642454224c4e7dbbe208870fc707fe477c76a` through deployment `dep-dblh9pnf3r2c73a5aggg`, verified Live on November 4, 2026. All four hosted pages and desktop/mobile browser checks passed. See [the full W02 description](w02-completion-description.txt) and `evidence/w02`.

The database now contains 3 organizations, 15 projects, 4 categories, and 24 project/category links from `src/setup.sql`. Do not run setup again against this initialized database. The app accepts the existing Render `DATABASE_URL` or the lesson's `DB_URL`; locally, `.env` uses the External Database URL in `DB_URL`. `ENABLE_SQL_LOGGING=true` enables development query logging.

Render's private database hostname uses a self-signed certificate. `src/models/db.js` keeps SSL encryption and accepts that certificate only for private `dpg-*` hostnames. External database connections retain certificate verification. After the development IP changed, its /32 entry was added to the database allowlist while preserving the previous entry.

The settings below remain the service configuration. Subsequent W01 deployment notes are historical evidence.

| Setting | Required configuration |
| --- | --- |
| Repository | `https://github.com/Proffvintage/cse340` |
| Branch | `main` |
| Runtime | Node |
| Region | Frankfurt |
| Root directory | Empty |
| Build command | `npm install` |
| Start command | `npm start` |
| Plan | Free |
| Auto-deploy | On commit |
| `NODE_ENV` | `production` |
| `NODE_VERSION` | `22.23.2` |
| `HOST` | `0.0.0.0` |
| `PORT` | Supplied by Render |

During W01, the four pages used provided static content. W02 now queries PostgreSQL on each directory request. Real credentials remain in the local ignored `.env` and Render's environment settings.

After a deployment reaches Live, run `npm run verify -- https://hate-uchiha-cse340.onrender.com` and inspect all four pages on desktop and mobile. The final results are recorded in `assignment-review.md`.

The v2 site was deployed from application commit `f0aea35aafd729e0d4ec813f795edef98d3ac5ac` and verified online on November 1, 2026. The working deployment is `dep-dbjnksnf3r2c73ckl62g`.

The initial replacement deployment reported Live but still served the old vehicle site. Clearing the build cache and redeploying resolved the mismatch. Auto-deploy remains enabled, although the GitHub push did not start the initial deployment; the verified deployment was triggered with:

```bash
render deploys create srv-dbjn2hnb9u1s73eh48cg --clear-cache --wait --confirm --output json
```
