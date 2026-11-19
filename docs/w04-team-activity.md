# W04 Team Activity: Updating Service Projects

Student: Markson

Course source: <https://byui-cse.github.io/cse340-ww-course-v2/week04/team-activity.html>

## Completed code

`updateProject` performs a parameterized update of the project's title, description, location, date, and organization ID. It returns the affected ID and throws if the target does not exist. `showEditProjectForm` retrieves the project and all organizations, preparing the current date and selected organization. `processEditProjectForm` validates submitted values, checks the referenced partner, delegates the write, stores success feedback, and redirects to the project's detail page.

GET and POST `/edit-project/:id` are wired in `src/routes.js`. The EJS update form displays existing values with escaped output, submits to the matching POST route, and uses the project ID from the URL rather than trusting a submitted hidden ID. The local W04 suite verifies reassignment, invalid inputs, missing records, targeted persistence, and error recovery.

## Discussion responses

1. **Changing a project's organization:** No organization-table data needs to change. Update `project.organization_id` to the chosen existing partner's ID; the foreign key expresses the relationship.
2. **Omitting the project lookup before rendering:** The form would lack the current title, description, location, date, and organization. The user could not reliably edit the intended record, and undefined view data could cause a render error. A missing record should instead return 404.
3. **Purpose of retrieving every organization:** The dropdown needs readable partner names and their database IDs. The currently associated partner must be selected, while the other options allow reassignment.
4. **Same URL, different actions:** Express matches the HTTP method as well as the path. GET displays the form; POST processes the submitted body. Body parsing middleware runs before the POST controller.

## Meeting and submission requirements

The official activity calls for a one-hour synchronous Teams meeting, rotating the leader, opening with prayer, and a ten-minute code review. This file documents technical preparation and completed local code; it does not claim that the meeting occurred or invent teammates' feedback. The team quiz and deployment were not performed.

If the learner was absent, the [official checklist](https://byui-cse.github.io/cse340-ww-course-v2/week04/team-absent.html) requires notifying the team, completing the activity, and posting one or two paragraphs in Teams. No absence or notification is assumed here.

## Optional technical Teams-post draft

The Week 4 update flow separates responsibilities clearly: the GET controller loads the existing project and partner options, EJS builds a prepopulated form, and the POST controller validates data before asking the model to update the selected record. Changing the sponsor means changing the project's foreign key, not editing an organization. Bound SQL values protect the query, while escaped EJS output protects the rendered page.

The local verification checks both successful updates and rejected inputs, including invalid dates, missing partners, and malformed record IDs. It also checks that failed requests leave unrelated records unchanged. One useful discussion point is the difference between a user selecting a nonexistent partner and the database being temporarily unavailable: the first deserves form feedback, while the second should reach centralized server-error handling.

This optional post is an AI-assisted draft based on actual code. It has not been posted and is not evidence of attendance, personal learning, or course submission.
