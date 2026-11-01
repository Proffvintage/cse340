# Render configuration — v2

Course source: [Deploy your site](https://byui-cse.github.io/cse340-ww-course-v2/week01/prepare-deploy.html).

Existing web service: `hate-uchiha-cse340` (`srv-dbjn2hnb9u1s73eh48cg`). Public URL: <https://hate-uchiha-cse340.onrender.com>.

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

The existing database and its environment variable remain available for later activities. W01's four pages use the provided static content and do not query the database. Real credentials remain in the local ignored `.env` and Render's environment settings.

After a deployment reaches Live, run `npm run verify -- https://hate-uchiha-cse340.onrender.com` and inspect all four pages on desktop and mobile. The final results are recorded in `assignment-review.md`.

The v2 site was deployed from application commit `f0aea35aafd729e0d4ec813f795edef98d3ac5ac` and verified online on November 1, 2026. The working deployment is `dep-dbjnksnf3r2c73ckl62g`.

The initial replacement deployment reported Live but still served the old vehicle site. Clearing the build cache and redeploying resolved the mismatch. Auto-deploy remains enabled, although the GitHub push did not start the initial deployment; the verified deployment was triggered with:

```bash
render deploys create srv-dbjn2hnb9u1s73eh48cg --clear-cache --wait --confirm --output json
```
