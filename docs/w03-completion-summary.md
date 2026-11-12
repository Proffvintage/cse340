# W03 Completion Summary

## MVC structure

The application now follows an explicit Model-View-Controller flow:

`browser request → src/routes.js → controller → model/PostgreSQL → controller → EJS view → browser`

Parameterized queries are in `src/models`; controllers validate route identifiers and prepare view data; `src/routes.js` maps URLs to controllers; and `src/views` renders escaped database values. `server.js` is limited to shared middleware, routing, centralized errors, startup, and shutdown.

## Detail pages and relationships

- `/organization/:id` displays one organization and every sponsored project.
- `/projects` displays the next five upcoming projects.
- `/project/:id` displays one project, its partner, and linked category tags.
- `/category/:id` displays one category and all linked projects.
- Malformed or missing resource IDs return a custom 404 page.
- Unexpected controller or database failures return a custom 500 page.

## Verification

JavaScript syntax checks, `git diff --check`, and compilation of all 12 EJS templates passed. `npm run verify:w03` passed against a disposable local PostgreSQL schema, including success and failure paths. `npm run verify:w02` also passed as a regression suite. The temporary database container and test schemas were removed after verification; hosted application records were never used or changed.

Course source: <https://byui-cse.github.io/cse340-ww-course-v2/week03/assignment.html>
