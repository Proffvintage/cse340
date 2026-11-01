# Render setup for W01

Course sources: [Account](https://byui-cse.github.io/cse340-ww-content/views/render-com.html), [PostgreSQL](https://byui-cse.github.io/cse340-ww-content/views/render-postgresql.html), [Web service](https://byui-cse.github.io/cse340-ww-content/views/render-app-server.html), [Deploy updates](https://byui-cse.github.io/cse340-ww-content/views/render-deploy-updates.html).

## GitHub and Render accounts

Publish this local project to a new GitHub repository named `cse340`. Include `pnpm-lock.yaml`; exclude `.env` and `node_modules` using `.gitignore`.

Register at <https://dashboard.render.com/register> using GitHub. Complete GitHub's authorization prompts and allow Render access to the `cse340` repository. Account sign-in/authorization take place in your browser.

## PostgreSQL service

Choose **New → Postgres**:

| Setting | Value |
| --- | --- |
| Name | `cse340-db` |
| Database and user | `cse340` |
| Region | Frankfurt; match the web service |
| PostgreSQL version | Render's default |
| Instance | Free |

Wait for Available. The course states the free database expires after 30 days; retain SQL scripts when you create them in Week 2.

Copy the Internal Database URL directly into the web service's `DATABASE_URL`. Do not commit the URL to Git.

Created for this project: `cse340-db`, ID `dpg-dbjn1sajnfac738gb100-a`, PostgreSQL 18 in Frankfurt. Render assigned database name `cse340_0kyc` and user `cse340`. The free database expires on 2026-12-01.

## Node web service

Choose **New → Web Service**, connect the GitHub repository:

| Setting | Value |
| --- | --- |
| Name | `hate-uchiha-cse340` or an available unique name |
| Runtime | Node |
| Branch | `main` |
| Root directory | Empty |
| Region | Frankfurt, matching the database |
| Build command | `pnpm install --frozen-lockfile` |
| Start command | `pnpm start` |
| Instance | Free |
| Auto-deploy | Off; course uses manual deployment |

The build command adds `--frozen-lockfile` to the course's `pnpm install` to deploy the verified dependency versions.

Environment variables:

| Key | Value |
| --- | --- |
| `NODE_ENV` | `production` |
| `NODE_VERSION` | `22.23.2` |
| `HOST` | `0.0.0.0` |
| `STUDENT_NAME` | `Hate-Uchiha` |
| `DATABASE_URL` | Database's Internal Database URL |

Render supplies `PORT`; let Render choose it. The local `.env` is not deployed.

## Deployment and testing

1. Create the service and wait for **Live**.
2. Open its public HTTPS URL; check the heading, navigation, footer, favicon and styling.
3. Locally run `pnpm verify -- https://YOUR-SERVICE.onrender.com`.
4. Confirm the database is Available and both regions match. W01 does not query the database yet.
5. For updates: commit/push, choose **Manual Deploy → Clear build cache & deploy**, repeat tests.

Verification checks rendered HTML, CSS, JavaScript, image delivery, a missing route, and exclusion of `.env` and server source from static serving. Account features come later.

Record repository URL, public URL, deployed commit and results in `verification.md`. Local success does not prove deployment success.

External database access is configured for the current development public IP only. Update the database Networking allowlist if your public IP changes. Same-region Render services use the Internal Database URL.
