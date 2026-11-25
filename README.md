# CSE 340 Service Network

W05 Authentication and Authorization, following the [Service Network v2 assignment](https://byui-cse.github.io/cse340-ww-course-v2/week05/assignment.html) and its learning/team activities. Week 5 is verified locally; the live site below remains on the committed Week 4 release until deployment is authorized.

Live site: <https://hate-uchiha-cse340.onrender.com>

Repository: <https://github.com/Proffvintage/cse340>

## Run locally

Use Node 22. On a fresh checkout, copy `.env.sample` to `.env` and set `DB_URL` to the intended application database. The existing `DATABASE_URL` name also works. Keep `.env` out of Git. Set `SESSION_SECRET` to a private random value of at least 32 characters. Development and tests generate an ephemeral secret when it is absent; production requires a configured secret.

```bash
npm install
# Run this only when creating a new, empty application database:
npm run db:setup
npm run dev
```

Open <http://127.0.0.1:3000>. In another terminal, run `npm run verify`. The existing course database has already been initialized; do not run setup again against it.

Run `npm run verify:w05` with `DB_URL` pointing to a disposable loopback PostgreSQL database. It verifies registration, bcrypt hashes, login/logout, session rotation, guest/regular/admin access, hidden links, direct POST protection, users-page privacy, and database failures. `npm run verify:w04` and `npm run verify:w03` remain regression suites. Never use the hosted course database for these write-heavy checks. The older W02 suite contains a stale fixed-date upcoming-project expectation.

Production runs with `npm start`. Render supplies the port and production database URL. Production also requires the private `SESSION_SECRET`, uses HTTPS session cookies, and trusts the hosting proxy. Database setup and migrations never run on startup. `database/w04-project-title.sql` expanded the hosted title column to 200 characters on November 16, 2026 while preserving seeded records. Do not rerun seed setup against an initialized database.

## Pages

- `/`: Home and the service-network mission.
- `/organizations` and `/organization/:id`: partner lists and individual organization details with linked projects.
- `/projects` and `/project/:id`: the next five projects and individual details with partner and category links.
- `/categories` and `/category/:id`: category lists and individual categories with linked projects.
- `/test-error`: the intentional Week 3 server-error route used to verify the custom 500 response.
- `/new-organization`, `/new-project`, and `/new-category`: validated create forms, available from each directory page.
- `/edit-organization/:id`, `/edit-project/:id`, and `/edit-category/:id`: prepopulated update forms, available from each detail page.
- `/assign-categories/:projectId`: category checkboxes; `/project/:projectId/assign-categories` is an equivalent route supported because the lesson names both.

The organizations and public images come from the official learning activities. Project dates, locations and additional events are sample data. Each seeded project has a sponsor and at least one category. New projects can have categories assigned afterward; clearing every checkbox intentionally removes their category links.

## Implementation and verification

- [W05 completion summary](docs/w05-completion-summary.md)
- [W05 rubric evidence](docs/w05-assignment-review.md)
- [W05 team activity responses](docs/w05-team-activity.md)
- [W05 coaching rehearsal, not an actual session](docs/w05-coaching-transcript.txt)
- [W05 original coaching prompt](docs/w05-coaching-prompt.txt)
- [W05 status update draft](docs/w05-status-update.txt)
- [W05 submission checklist](docs/w05-submission-checklist.md)
- [W04 completion summary](docs/w04-completion-summary.md)
- [W04 rubric evidence and lesson discrepancies](docs/w04-assignment-review.md)
- [W04 team activity discussion responses](docs/w04-team-activity.md)
- [W04 coaching rehearsal, not an actual session](docs/w04-coaching-transcript.txt)
- [W04 original coaching prompt](docs/w04-coaching-prompt.txt)
- [W04 status update draft](docs/w04-status-update.txt)
- [W04 deployment and submission checklist](docs/w04-submission-checklist.md)
- [W04 hosted deployment evidence](docs/evidence/w04/deployment.json)
- [W03 completion summary](docs/w03-completion-summary.md)
- [W03 rubric evidence](docs/w03-assignment-review.md)
- [W03 team activity notes](docs/w03-team-activity.md)
- [W03 coaching session transcript](docs/w03-coaching-transcript.txt)
- [W02 full completion description](docs/w02-completion-description.txt)
- [W02 rubric evidence](docs/w02-assignment-review.md)
- [W01 rubric evidence](docs/assignment-review.md)
- [Code and request-flow guide](docs/code-guide.md)
- [Render configuration](docs/render-setup.md)
- [W01 coaching questions and model answers](docs/w01-coaching-answers.md)
- [Detailed W01 coaching review guide](docs/w01-coaching-review-guide.md)

The router is in `src/routes.js`; request coordination is in `src/controllers`; SQL is in `src/models`; and EJS presentation is in `src/views`. All pages share the header and footer in `src/views/partials`. The stylesheet is `public/css/main.css`. JavaScript uses ESM imports/exports, arrow functions, and async/await. `<%- %>` is used only for trusted partial includes; template data uses `<%= %>`.

`src/setup.sql` creates and seeds `organization`, `project`, `category`, and `project_category`. Parameterized detail and relationship queries live in the model files. Express 4 asynchronous controllers are wrapped so rejected queries reach centralized error middleware. Missing routes and records return a custom HTTP 404 page; unexpected failures return a custom HTTP 500 page without exposing production details.
