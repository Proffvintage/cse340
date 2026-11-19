# W04 Completion Summary

Student: Markson

Course source: <https://byui-cse.github.io/cse340-ww-course-v2/week04/index.html>

## Local implementation

The Service Network application now creates and updates organizations, service projects, and categories through the existing ESM Model-View-Controller structure. Each create page is linked from its directory; each update page is linked from its resource detail page. Update forms start with the current database values, including the project date and selected partner organization.

The application parses form and JSON bodies before routing. In-memory Express sessions hold temporary form values and custom flash messages. Successful writes and validation failures save the session before an HTTP 303 redirect. Flash messages survive redirects and static requests, appear on the next rendered page, and disappear on refresh. Retained form values are scoped to their exact form URL and escaped by EJS.

Server validation checks string types, required values, lengths, emails, calendar dates, positive IDs, and referenced records. Categories use a server minimum of 3 and maximum of 100 characters; their HTML deliberately omits `minlength` so the server-only rule can be demonstrated. Duplicate category names receive useful feedback without changing records.

Project category assignments support zero, one, or many checkbox values. Replacements use one PostgreSQL client, a transaction, and a lock on the target project row. A failed replacement restores the old assignments; concurrent requests cannot leave a mixed or partial category set.

## Database compatibility

`src/setup.sql` supports 200-character project titles. `database/w04-project-title.sql` expands the title column in an existing database without replacing its data. The migration was tested on a disposable local schema and was not applied to the hosted course database.

## Verification performed

- `npm run verify:w04` passed against disposable local PostgreSQL, including 349 rejected submissions, accepted length boundaries, targeted persistence, duplicate races, escaped output, session isolation, one-time feedback, malformed and missing IDs, transaction serialization, rollback, unexpected database errors, and recovery.
- `npm run verify:w03` passed as an MVC and error-handling regression check.
- All 20 JavaScript files passed syntax checks and all 22 EJS templates compiled. Every README document link resolves locally.
- Real headless Chrome checks passed for all seven forms at 1280-pixel desktop and 375-pixel mobile widths. They verified no horizontal overflow, labeled controls, required fields, browser email checks, the server-only category minimum, actual form submission, persistence, and one-time feedback. Results and screenshots are in `docs/evidence/w04`.
- `npm audit --omit=dev` reported no production dependency vulnerabilities.

The earlier `verify:w02` check fails because it expects the November 14, 2026 Park Cleanup on an upcoming-project list after that date. This pre-existing date-sensitive expectation was not changed.

## Deployment

Week 4 is live at <https://hate-uchiha-cse340.onrender.com> through deployment `dep-dbtemdh42hec73b92sj0`. The production schema migration, session secret, all form and write flows, error pages, and post-test cleanup were verified. See `docs/evidence/w04/deployment.json` and the submission checklist.

The verified Week 4 source was committed and pushed to `main`; the deployment evidence records that publication. Canvas submission, Teams attendance, quizzes, and a real 30-minute coaching conversation were not performed. The separate coaching file remains an explicitly labeled AI-authored rehearsal. Reflection and team-channel text are drafts, not evidence of student participation.

AI assistance was used for implementation and verification. The course requires the learner to understand every submitted line and restricts bulk AI code generation and AI quiz answers. Review this work against the instructor's policy before submitting it. No private environment values appear in these deliverables.
