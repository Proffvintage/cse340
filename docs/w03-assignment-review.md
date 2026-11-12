# W03 Model-View-Controller Implementation

Course source: [W03 assignment](https://byui-cse.github.io/cse340-ww-course-v2/week03/assignment.html).

| Rubric criterion | Implementation evidence |
| --- | --- |
| Learning and Team Activity Features | `/organizations` links every partner to a detail page. Organization details list linked projects. `/projects` retrieves the next five opportunities through `getUpcomingProjects(5)`. Project details link to the partner organization. Custom 404 and 500 responses are centralized. |
| Categories Pages | `/categories` links every category to `/category/:id`. The category controller retrieves one category and its linked projects through parameterized model functions. |
| Category Tags | `/project/:id` retrieves the project and its categories. Each category is rendered as a tag linking to `/category/:id`. |
| MVC Organization | SQL remains in `src/models`; request coordination remains in `src/controllers`; URL mapping remains in `src/routes.js`; EJS presentation remains in `src/views`; and `server.js` configures middleware, errors, startup, and shutdown. |
| Error Handling and Professional Style | Route IDs are validated, missing records return HTTP 404, asynchronous failures reach the error middleware, and production 500 pages hide internal details. Detail and error pages extend the existing responsive visual design. |

`npm run verify:w03` passed against a disposable local PostgreSQL database. It checks list/detail pages, next-five limiting, relationships, category tags, escaped output, invalid IDs, custom 404/500 responses, database-failure recovery, and MVC boundaries. `npm run verify:w02` also passed as a regression suite. JavaScript syntax checks and compilation of all 12 EJS templates passed as well.
