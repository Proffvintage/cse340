# W02 Database Retrieval

Course source: [W02 assignment](https://byui-cse.github.io/cse340-ww-course-v2/week02/assignment.html).

| Rubric criterion | Implementation evidence |
| --- | --- |
| Database Design | `src/setup.sql` creates and seeds all four tables, with serial primary keys, sponsor foreign keys, a composite junction primary key, category uniqueness, required columns, and relationship indexes. Three organizations each sponsor five projects. All 15 projects have categories through 24 links. |
| End-to-End Data Flow | Models query PostgreSQL; asynchronous handlers in `server.js` pass rows to EJS. Organizations display names, descriptions, emails and database-selected logos. Projects display formatted dates, titles, joined sponsor names, descriptions and locations. Categories display database names. Home previews also use database results. |
| Code Organization and Standards | `src/models/db.js` exports the pool and `testConnection`. Dedicated plural model files export `getAllOrganizations`, `getAllProjects`, and `getAllCategories`. ESM, async arrow functions, explicit SELECT columns and escaped EJS output follow the learning activity pattern. |

`npm run verify:w02` passed against a disposable PostgreSQL schema. It verifies real setup SQL, seed counts, foreign keys, duplicate prevention, many-to-many links, model-to-EJS responses, new records, escaped content, query failure/recovery, empty results, static assets, navigation and HTTP status codes. The schema is removed afterward.

See [the full description](w02-completion-description.txt) for deployment results and all work performed. The rubric's final score is assigned by the instructor.
