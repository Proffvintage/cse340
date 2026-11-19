# W04 Assignment Review

Student: Markson

Course source: <https://byui-cse.github.io/cse340-ww-course-v2/week04/assignment.html>

This review evaluates the local Service Network v2 implementation. It does not claim deployment or assign a grade without instructor assessment.

| Published requirement | Local implementation evidence | Verification |
| --- | --- | --- |
| Learning and team activity features | Organizations and service projects have create/edit models, controllers, GET/POST routes, and EJS forms. Existing values populate update forms. The project organization dropdown permits reassignment. HTML and server validation are applied to all four forms. | W04 successful writes, prepopulation, partner reassignment, malformed inputs, boundary lengths, and unchanged-record assertions passed. |
| Create categories | GET and POST `/new-category` use the category controller and a parameterized model insert. The labeled name input is required with `maxlength="100"` and no client minimum. Server rules enforce trimmed length 3 to 100. | Valid creation, missing/short/oversized names, wrong input types, duplicate submissions, and raw escaped text passed. |
| Edit categories | GET and POST `/edit-category/:id` load existing data, preserve invalid submitted names, validate the URL ID, and update only the specified category. | Prepopulation, unchanged-name updates, invalid values, duplicate names, and unrelated-row preservation passed. |
| MVC organization and naming | SQL remains in `src/models`; controllers coordinate validation and view data; `src/routes.js` declares feature URLs; `server.js` supplies shared middleware and errors; EJS renders presentation. Express 4 async handlers forward rejected promises. | Source-organization checks, EJS compilation, custom 404/500 behavior, and query-failure recovery passed. |
| Deployment and professional style | Responsive labeled forms, keyboard focus, accessible status/error feedback, shared partials, and existing visual styling are implemented locally. | Real Chrome checks passed for all seven forms at desktop and mobile widths with no horizontal overflow. Evidence is in `docs/evidence/w04`. Week 4 deployment and hosted accessibility verification are not performed, so this requirement cannot be claimed complete. |

The six learning activities also include project category assignment. Both documented URL patterns are supported. The checkbox controller validates selections; the model locks the target project and replaces links atomically. Zero, one, multiple, duplicate, invalid, concurrent, and failing selections were verified.

## Published sample discrepancies and deliberate choices

1. The project lesson allows server titles through 200 characters, but the older schema and HTML sample used 150. The title column and form now allow 200. The additive migration preserves existing data.
2. The project description sample allows 500 characters in the browser and 1000 on the server. This implementation preserves those demonstrated limits. A submitted 1000-character description is accepted and persisted; a longer value is rejected.
3. The location sample shows an HTML limit of 255 but a server limit of 200. Both layers now use 200. The sample's `isLength({ max: ... })` is inclusive despite prose saying "less than".
4. The project creation prose mentions a list redirect, while its sample redirects to the new detail page. This implementation follows the detail-page redirect, making the saved record immediately inspectable.
5. The category-assignment lesson names `/assign-categories/:projectId` and `/project/:projectId/assign-categories`. Both work; links use the former. Field names consistently use `categoryIds`.
6. The team activity briefly names `update-project.ejs` but consistently uses `edit-project` afterward. The route and controller render `edit-project.ejs`.
7. Organization sanitization prose mentions escaping before storage, but its shown rule omits that step. This implementation stores trimmed plain text, normalizes valid email, binds SQL parameters, and escapes EJS output exactly once. This avoids double-encoded names and descriptions.
8. The session lesson demonstrates `saveUninitialized: true`; this implementation uses `false` to avoid unused sessions. The one-hour session lifetime and in-memory storage remain. Production adds `HttpOnly`, `SameSite=Lax`, HTTPS cookies, and a required private secret.
9. Missing form closing tags and inconsistent helper argument ordering in examples were not copied. Assignment replacement additionally uses a transaction so partial failure cannot erase previous relationships.

## Remaining submission evidence

No Week 4 commit, push, hosted migration, deployment, live verification, Canvas upload, Teams meeting/post, quiz attempt, or real coaching conversation is recorded. Existing repository and hosted URLs are retained only as the learner's known submission targets. The published course requires understanding every submitted line and restricts bulk AI generation and AI quiz answers; AI-assisted work is disclosed in the completion summary.
