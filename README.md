# CSE 340 Service Network

W01 Initial Site Creation, following the [v2 assignment](https://byui-cse.github.io/cse340-ww-course-v2/week01/assignment.html).

Live site: <https://hate-uchiha-cse340.onrender.com>

Repository: <https://github.com/Proffvintage/cse340>

## Run locally

Use Node 22. On a fresh checkout, copy `.env.sample` to `.env` before starting development. Keep `.env` out of Git.

```bash
npm install
npm run dev
```

Open <http://127.0.0.1:3000>. In another terminal, run `npm run verify`.

Production runs with `npm start`. Render supplies the port and production environment variables.

## Pages

- `/`: Home and the service-network mission.
- `/organizations`: the three course-provided partners, logos and contact addresses.
- `/projects`: Park Cleanup, Food Drive and Community Tutoring.
- `/categories`: Environmental, Educational, Community Service, and Health and Wellness.

The organization names, addresses and projects are the course's placeholder content. The public images are from the official learning activity.

## Implementation and verification

- [Rubric evidence](docs/assignment-review.md)
- [Code and request-flow guide](docs/code-guide.md)
- [Render configuration](docs/render-setup.md)

The four EJS views are in `src/views`. All pages share the header and footer in `src/views/partials`. The stylesheet is `public/css/main.css`. JavaScript uses ESM imports/exports, arrow functions, and async/await. `<%- %>` is used only for the two trusted partial includes; template data uses `<%= %>`.
