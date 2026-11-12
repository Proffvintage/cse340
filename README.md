# CSE 340 Service Network

W03 Model-View-Controller implementation, following the [v2 assignment](https://byui-cse.github.io/cse340-ww-course-v2/week03/assignment.html) and its learning/team activities.

Live site: <https://hate-uchiha-cse340.onrender.com>

Repository: <https://github.com/Proffvintage/cse340>

## Run locally

Use Node 22. On a fresh checkout, copy `.env.sample` to `.env` and set `DB_URL` to your Render External Database URL. The existing `DATABASE_URL` name also works. Keep `.env` out of Git.

```bash
npm install
# Run this only when creating a new, empty application database:
npm run db:setup
npm run dev
```

Open <http://127.0.0.1:3000>. In another terminal, run `npm run verify`. The existing course database has already been initialized; do not run setup again against it.

Run `npm run verify:w03` for MVC, detail-page, relationship, escaping, and error-handling integration checks. Run `npm run verify:w02` for the earlier schema and database-retrieval regression suite. Both create and remove a disposable schema; application records are unaffected. They require database connectivity and permission to create a schema.

Production runs with `npm start`. Render supplies the port and production environment variables, including the Internal Database URL in `DATABASE_URL` or `DB_URL`. Database setup is a separate operation and never runs on server startup.

## Pages

- `/`: Home and the service-network mission.
- `/organizations` and `/organization/:id`: partner lists and individual organization details with linked projects.
- `/projects` and `/project/:id`: the next five projects and individual details with partner and category links.
- `/categories` and `/category/:id`: category lists and individual categories with linked projects.
- `/test-error`: the intentional Week 3 server-error route used to verify the custom 500 response.

The organizations and public images come from the official learning activities. Project dates, locations and additional events are sample data. Every project has a sponsor and at least one category; several have two categories.

## Implementation and verification

- [W03 completion summary](docs/w03-completion-summary.md)
- [W03 rubric evidence](docs/w03-assignment-review.md)
- [W03 team activity notes](docs/w03-team-activity.md)
- [W03 coaching session transcript](docs/w03-coaching-transcript.txt)
- [W02 full completion description](docs/w02-completion-description.txt)
- [W02 rubric evidence](docs/w02-assignment-review.md)
- [W01 rubric evidence](docs/assignment-review.md)
- [Code and request-flow guide](docs/code-guide.md)
- [Render configuration](docs/render-setup.md)

The router is in `src/routes.js`; request coordination is in `src/controllers`; SQL is in `src/models`; and EJS presentation is in `src/views`. All pages share the header and footer in `src/views/partials`. The stylesheet is `public/css/main.css`. JavaScript uses ESM imports/exports, arrow functions, and async/await. `<%- %>` is used only for trusted partial includes; template data uses `<%= %>`.

`src/setup.sql` creates and seeds `organization`, `project`, `category`, and `project_category`. Parameterized detail and relationship queries live in the model files. Express 4 asynchronous controllers are wrapped so rejected queries reach centralized error middleware. Missing routes and records return a custom HTTP 404 page; unexpected failures return a custom HTTP 500 page without exposing production details.
